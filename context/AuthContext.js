"use client";

import {createContext, useContext, useState, useEffect} from "react";

import {auth, db} from "../config/firebase";

import {setCookie, getCookie, hasCookie, deleteCookie} from 'cookies-next';

import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";

import {
  doc,
  setDoc,
  onSnapshot,
  updateDoc,
  collection,
} from "firebase/firestore";

import {useRouter} from "next/navigation";

const AuthContext = createContext();

const useAuth = () => useContext(AuthContext);

const AuthProvider = ({children}) => {
  const router = useRouter();

  const [user, setUser] = useState();
  const [userDetails, setUserDetails] = useState();
  const [userStatus, setUserStatus] = useState(false);

  useEffect(() => {
    const cookie = getCookie("userUid");

    if (hasCookie("userUid")) {
      setUser(cookie);
      setUserStatus(true);
      getUserCred(cookie);
    } else {
      console.log("No User");
    }
  }, []);

  const getUserCred = (uid) => {
    const userRef = doc(db, "users", uid);
    setUser(uid);

    onSnapshot(userRef, (fetchedData) => {
      setUserDetails({...fetchedData.data()});
    });
  };

  const createUserDoc = async (uid, name, email) => {
    await setDoc(doc(db, "users", uid), {
      uid: uid,
      name: name,
      email: email,
      profilePic: "",
      tasks: {},
    });

    return true;
  };

  const signUp = async (name, email, password, setErrorEmail) => {
    try {
      const userCred = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      setErrorEmail(false);
      await createUserDoc(userCred.user.uid, name, email);

      setCookie("userUid", userCred.user.uid, {
        path: '/',
      });

      getUserCred(userCred.user.uid);
      setUserStatus(true);

      router.push("/app");
      return true;
    } catch (error) {
      if (error.message.includes("email")) {
        setErrorEmail("Email already in use");
      }
      return false;
    }
  };

  const login = async (email, password, setErrorEmail, setErrorPassword) => {
    try {
      const userCred = await signInWithEmailAndPassword(auth, email, password);

      setErrorEmail(false);
      setErrorPassword(false);

      setCookie("userUid", userCred.user.uid, {
        path: '/',
      });

      getUserCred(userCred.user.uid);
      setUserStatus(true);

      router.push("/app");
      return true;
    } catch (error) {
      if (error.message.includes("invalid-credential")) {
        setErrorEmail(true);
        setErrorPassword("Either Email or Password is incorrect");
      } else if (error.message.includes("internal")) {
        setErrorEmail("Internal Error");
        setErrorPassword("Internal Error");
      }

      return false;
    }
  };

  const googleAuth = async (form, setLoading) => {
    try {
      const provider = new GoogleAuthProvider();

      signInWithPopup(auth, provider).then(async (userCred) => {

        setCookie("userUid", userCred.user.uid, {
          path: '/',
        });

        if (form === "sign-up") {
          await createUserDoc(
            userCred.user.uid,
            userCred.user.displayName,
            userCred.user.email
          );
        }

        getUserCred(userCred.user.uid);

        setLoading(false);
        setUserStatus(true);
        router.push("/");

        return true;
      });
    } catch (error) {
      return false;
    }
  };

  const logout = async () => {
    await signOut(auth);

    setUserStatus(false);
    setUser(null);
    setUserDetails(null);

    deleteCookie("userUid");
  };

  return (
    <AuthContext.Provider
      value={{
        signUp,
        login,
        logout,
        googleAuth,
        user,
        userDetails,
        userStatus,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export {useAuth, AuthProvider};

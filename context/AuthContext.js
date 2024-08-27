"use client";

import { createContext, useContext } from "react";

import { auth, db } from "../config/firebase";

const AuthContext =  createContext();

const useAuth = () => useContext(AuthContext);

const AuthProvider = ({children}) => {

  return (
    <AuthContext.Provider
    value={{
    }}
    
    >
      {children}


    </AuthContext.Provider>
  )

}

export {useAuth, AuthProvider};
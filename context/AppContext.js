"use client";

import { useContext, createContext } from "react";

import { realDb } from "@/config/firebase";

import { set, ref, push, get } from "firebase/database";
import { useAuth } from "./AuthContext";
import dayjs from "dayjs";

const AppContext = createContext();

const useApp = () => useContext(AppContext);

const AppProvider = ({ children }) => {
  const { user } = useAuth();

  const addTask = async (taskName, taskDescrip, dueDate, priority, project) => {
    const task = {
      taskName: taskName,
      taskDescrip: taskDescrip,
      dueDate: dueDate.toJSON(),
      priority: priority,
      project: project,
    };

    const newTaskRef = push(ref(realDb, `${user}`));

    try {
      set(newTaskRef, task);
    } catch (error) {
      alert("Error! Please try after sometime");
    }
  };

  const sleep = (resolve, ms) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
  };

  const search = async (searchValue, searchData, setSearchData) => {
    const dbRef = ref(realDb, `${user}`);
    const snapshot = await get(dbRef);

    if (snapshot.exists()) {
      const data = snapshot.val();
      let fetchedData = Object.keys(data).map((id) => {
        return {
          ...data[id],
          id: id,
        };
      });

      let tempData = [];

      fetchedData.map((el) => {
        if (
          el.taskName.toLowerCase().includes(searchValue) ||
          el.taskName.includes(searchValue)
        ) {
          if (!searchData.includes(el)) {
            tempData = [el, ...tempData];
          }
        }
      });

      setSearchData(tempData);
    }
  };

  return (
    <AppContext.Provider value={{ addTask, search }}>
      {children}
    </AppContext.Provider>
  );
};

export { useApp, AppProvider };

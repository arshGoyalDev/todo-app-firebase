"use client";

import { useContext, createContext } from "react";

import { realDb } from "@/config/firebase";

import { set, ref, push } from "firebase/database";
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

  return (
    <AppContext.Provider value={{ addTask }}>{children}</AppContext.Provider>
  );
};

export { useApp, AppProvider };

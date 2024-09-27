"use client";

import { useContext, createContext } from "react";

const AppContext = createContext();

const useApp = () => useContext(AppContext)

const AppProvider = ({children}) => {

  const addTask = (taskName, taskDescrip, dueDate, priority, project) => {
    console.log(taskName, taskDescrip, dueDate, priority, project);
  }

  return (
    <AppContext.Provider value={{addTask}}>
      {children}
    </AppContext.Provider>
  )
}

export {useApp, AppProvider}
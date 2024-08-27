"use client";

import { createContext, useContext, useState, useEffect } from "react";

const ThemeContext = createContext();

const useTheme = () => {
  return useContext(ThemeContext);
};

const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    if (localStorage.getItem("darkMode")) {
      setDarkMode(JSON.parse(localStorage.getItem("darkMode")));
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setDarkMode(true);
    } else {
      setDarkMode(false);
    }
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { useTheme, ThemeProvider };

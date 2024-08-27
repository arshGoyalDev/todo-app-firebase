"use client";

import { useTheme } from "@/context";

const Footer = () => {
  const { darkMode, setDarkMode } = useTheme();

  return (
    <footer className="fixed w-[90vw] left-[5vw] bottom-[5vw] md:w-[80vw] md:left-[10vw] md:bottom-10 flex justify-between items-center py-4 px-4 lg:px-10 bg-gray-100 dark:bg-zinc-900 border-2 border-gray-300 dark:border-zinc-700 rounded-xl">
      <h2 className="text-xl xl:text-2xl font-semibold">Todo App</h2>

      <div className="flex gap-3 items-center">
        <p>Light</p>

        <button
          className="relative h-8 w-16 rounded-full bg-white dark:bg-zinc-950"
          onClick={() => {
            darkMode ? setDarkMode(false) : setDarkMode(true);
          }}
        >
          <div
            className={`absolute top-1 rounded-full left-1 w-6 h-6 transition-all duration-300 ${
              darkMode ? "translate-x-8 bg-zinc-800" : " bg-gray-200"
            }`}
          ></div>
        </button>

        <p>Dark</p>
      </div>
    </footer>
  );
};
export default Footer;

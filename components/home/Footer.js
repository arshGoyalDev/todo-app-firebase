"use client";

import { ToggleThemeButton } from "@/components/button";

const Footer = () => {

  return (
    <footer className="z-50 fixed w-[90vw] left-[5vw] bottom-[5vw] md:w-[80vw] md:left-[10vw] md:bottom-10 flex justify-between items-center py-4 px-4 lg:px-10 bg-gray-50 dark:bg-zinc-900 border-2 border-gray-200 dark:border-zinc-800 rounded-xl">
      <h2 className="text-xl xl:text-2xl font-bold">Todo App</h2>

      <ToggleThemeButton />
    </footer>
  );
};
export default Footer;

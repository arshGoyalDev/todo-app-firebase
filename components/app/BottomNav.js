"use client";

import { use, useState } from "react";

import { AddTaskBtn, SettingsBtn, AddNoteBtn } from "../button";

import SettingsMenu from './SettingsMenu';

const BottomNav = () => {
  const [settingsMenuVisible, setSettingsMenuVisible] = useState(false);

  return (
    <nav className="z-50 w-[95vw] sm:w-fit fixed bottom-5 left-1/2 -translate-x-1/2 flex sm:gap-10 justify-between items-center py-3 px-4 bg-gray-50 dark:bg-zinc-900 border-2 border-gray-200 dark:border-zinc-800 rounded-xl">
      <button className="p-1 flex justify-center items-center rounded-full">
        <span className="stroke-black dark:stroke-white">
          <svg
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8 2V5"
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M16 2V5"
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M16 3.5C19.33 3.68 21 4.95 21 9.65V15.83C21 19.95 20 22.01 15 22.01H9C4 22.01 3 19.95 3 15.83V9.65C3 4.95 4.67 3.69 8 3.5H16Z"
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M20.75 17.6H3.25"
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12 8.25C10.77 8.25 9.73 8.92 9.73 10.22C9.73 10.84 10.02 11.31 10.46 11.61C9.85 11.97 9.5 12.55 9.5 13.23C9.5 14.47 10.45 15.24 12 15.24C13.54 15.24 14.5 14.47 14.5 13.23C14.5 12.55 14.15 11.96 13.53 11.61C13.98 11.3 14.26 10.84 14.26 10.22C14.26 8.92 13.23 8.25 12 8.25ZM12 11.09C11.48 11.09 11.1 10.78 11.1 10.29C11.1 9.79 11.48 9.5 12 9.5C12.52 9.5 12.9 9.79 12.9 10.29C12.9 10.78 12.52 11.09 12 11.09ZM12 14C11.34 14 10.86 13.67 10.86 13.07C10.86 12.47 11.34 12.15 12 12.15C12.66 12.15 13.14 12.48 13.14 13.07C13.14 13.67 12.66 14 12 14Z"
              fill="black"
            />
          </svg>
        </span>
      </button>

      <AddNoteBtn />

      <AddTaskBtn />

      <SettingsBtn
        settingsMenuVisible={settingsMenuVisible}
        setSettingsMenuVisible={setSettingsMenuVisible}
      />

      {settingsMenuVisible && <SettingsMenu setSettingsMenuVisible={setSettingsMenuVisible} />}

      <button className="p-1 flex justify-center items-center rounded-full">
        <span className="stroke-black dark:stroke-white">
          <svg
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8 2V5"
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M16 2V5"
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M3.5 9.08997H20.5"
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M21 8.5V17C21 20 19.5 22 16 22H8C4.5 22 3 20 3 17V8.5C3 5.5 4.5 3.5 8 3.5H16C19.5 3.5 21 5.5 21 8.5Z"
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M15.6947 13.7H15.7037"
              stroke-Width="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M15.6947 16.7H15.7037"
              stroke-Width="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M11.9955 13.7H12.0045"
              stroke-Width="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M11.9955 16.7H12.0045"
              stroke-Width="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M8.29431 13.7H8.30329"
              stroke-Width="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M8.29431 16.7H8.30329"
              stroke-Width="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </button>
    </nav>
  );
};
export default BottomNav;

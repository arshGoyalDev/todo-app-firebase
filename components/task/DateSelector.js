"use client";

import { useState } from "react";

import { Calendar } from "./";

const DateSelector = ({dueDate, setDueDate}) => {
  const [menuVisible, setMenuVisible] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => {
          menuVisible ? setMenuVisible(false) : setMenuVisible(true);
        }}
        className="flex items-center gap-2 py-2 px-3 hover:bg-gray-200 hover:dark:bg-zinc-800 bg-opacity-10 border-2 border-gray-200 dark:border-zinc-800 hover:border-transparent transition-all duration-200 rounded-lg"
      >
        {dueDate.toDate().toDateString()}
        <span className="stroke-black dark:stroke-white">
          <svg
            width="16"
            height="16"
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
              d="M11.9955 13.7H12.0045"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M8.29431 13.7H8.30329"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M8.29431 16.7H8.30329"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </button>

      {menuVisible && <Calendar dueDate={dueDate} setDueDate={setDueDate} setMenuVisible={setMenuVisible} />}
    </div>
  );
};
export default DateSelector;

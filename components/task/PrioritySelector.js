"use client";

import { useState } from "react";

const PrioritySelector = ({ priority, setPriority }) => {
  const [menuVisible, setMenuVisible] = useState(false);

  const changePriority = (val) => {
    setPriority(val);
    setMenuVisible(false);
  }

  return (
    <div className="relative">
      <button
        onClick={() => {
          menuVisible ? setMenuVisible(false) : setMenuVisible(true);
        }}
        className="flex items-center gap-2 py-2 px-3 hover:bg-gray-200 hover:dark:bg-zinc-800 bg-opacity-10 border-2 border-gray-200 dark:border-zinc-800 hover:border-transparent transition-all duration-200 rounded-lg"
      >
        Priority {priority !== 0 && priority}
        <span
          className={`${
            priority === 0 && "fill-transparent stroke-black dark:stroke-white"
          } ${priority === 1 && "fill-red-600"} ${
            priority === 2 && "fill-yellow-500"
          } ${priority === 3 && "fill-blue-600"}`}
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.26001 11.0199V15.9899C4.26001 17.8099 4.26001 17.8099 5.98001 18.9699L10.71 21.6999C11.42 22.1099 12.58 22.1099 13.29 21.6999L18.02 18.9699C19.74 17.8099 19.74 17.8099 19.74 15.9899V11.0199C19.74 9.19994 19.74 9.19994 18.02 8.03994L13.29 5.30994C12.58 4.89994 11.42 4.89994 10.71 5.30994L5.98001 8.03994C4.26001 9.19994 4.26001 9.19994 4.26001 11.0199Z"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M17.5 7.63V5C17.5 3 16.5 2 14.5 2H9.5C7.5 2 6.5 3 6.5 5V7.56"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </span>
      </button>

      {menuVisible && (
        <div className="absolute -bottom-10 -right-40 w-36 flex-col bg-gray-100 dark:bg-zinc-900 border-2 border-gray-200 dark:border-zinc-800 rounded-xl">
          <button
            onClick={() => changePriority(1)}
            className="w-full flex items-center justify-between py-2 px-5 border-b-2 border-gray-200 dark:border-zinc-800"
          >
            Priority 1
            <span className="fill-red-600">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.26001 11.0199V15.9899C4.26001 17.8099 4.26001 17.8099 5.98001 18.9699L10.71 21.6999C11.42 22.1099 12.58 22.1099 13.29 21.6999L18.02 18.9699C19.74 17.8099 19.74 17.8099 19.74 15.9899V11.0199C19.74 9.19994 19.74 9.19994 18.02 8.03994L13.29 5.30994C12.58 4.89994 11.42 4.89994 10.71 5.30994L5.98001 8.03994C4.26001 9.19994 4.26001 9.19994 4.26001 11.0199Z"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M17.5 7.63V5C17.5 3 16.5 2 14.5 2H9.5C7.5 2 6.5 3 6.5 5V7.56"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </span>
          </button>
          <button
            onClick={() => changePriority(2)}
            className="w-full flex items-center justify-between gap-2 py-2 px-5 border-b-2 border-gray-200 dark:border-zinc-800"
          >
            Priority 2
            <span className="fill-yellow-500">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.26001 11.0199V15.9899C4.26001 17.8099 4.26001 17.8099 5.98001 18.9699L10.71 21.6999C11.42 22.1099 12.58 22.1099 13.29 21.6999L18.02 18.9699C19.74 17.8099 19.74 17.8099 19.74 15.9899V11.0199C19.74 9.19994 19.74 9.19994 18.02 8.03994L13.29 5.30994C12.58 4.89994 11.42 4.89994 10.71 5.30994L5.98001 8.03994C4.26001 9.19994 4.26001 9.19994 4.26001 11.0199Z"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M17.5 7.63V5C17.5 3 16.5 2 14.5 2H9.5C7.5 2 6.5 3 6.5 5V7.56"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </span>
          </button>
          <button
            onClick={() => changePriority(3)}
            className="w-full flex items-center justify-between gap-2 py-2 px-5"
          >
            Priority 3
            <span className="fill-blue-600">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.26001 11.0199V15.9899C4.26001 17.8099 4.26001 17.8099 5.98001 18.9699L10.71 21.6999C11.42 22.1099 12.58 22.1099 13.29 21.6999L18.02 18.9699C19.74 17.8099 19.74 17.8099 19.74 15.9899V11.0199C19.74 9.19994 19.74 9.19994 18.02 8.03994L13.29 5.30994C12.58 4.89994 11.42 4.89994 10.71 5.30994L5.98001 8.03994C4.26001 9.19994 4.26001 9.19994 4.26001 11.0199Z"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M17.5 7.63V5C17.5 3 16.5 2 14.5 2H9.5C7.5 2 6.5 3 6.5 5V7.56"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </span>
          </button>
        </div>
      )}
    </div>
  );
};

export default PrioritySelector;

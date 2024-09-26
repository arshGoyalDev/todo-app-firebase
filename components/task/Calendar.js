"use client";

import { useEffect, useState } from "react";

import dayjs from "dayjs";

import { generateDate, months } from "@/utils/calendar";

const Calendar = ({ dueDate, setDueDate, setMenuVisible }) => {
  const days = ["S", "M", "T", "W", "T", "F", "S"];

  const currentDate = dayjs();

  const [today, setToday] = useState(currentDate);

  return (
    <div className="z-[1000] absolute -bottom-10 md:-bottom-32 md:-right-[21rem] w-72 md:w-80 p-5 flex-col bg-gray-100 dark:bg-zinc-900 border-2 border-gray-200 dark:border-zinc-800 rounded-xl">
      <div className="flex justify-between items-center">
        <div className="flex flex-col">
          <h2 className="select-none font-semibold">
            {months[today.month()]},
          </h2>
          <h2 className="select-none font-semibold">{today.year()}</h2>
        </div>
        <div className="flex gap-10 items-center ">
          <button
            className="w-5 h-5 cursor-pointer hover:scale-105 transition-all"
            onClick={() => {
              setToday(today.month(today.month() - 1));
            }}
          >
            <span className="stroke-black dark:stroke-white">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M13.26 15.53L9.73999 12L13.26 8.46997"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </button>
          <h1
            className=" cursor-pointer hover:scale-105 transition-all"
            onClick={() => {
              setToday(currentDate);
            }}
          >
            Today
          </h1>
          <button
            className="w-5 h-5 cursor-pointer hover:scale-105 transition-all"
            onClick={() => {
              setToday(today.month(today.month() + 1));
            }}
          >
            <span className="stroke-black dark:stroke-white">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M10.74 15.53L14.26 12L10.74 8.46997"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </button>
        </div>
      </div>
      <div className="flex flex-nowrap">
        {days.map((day, index) => {
          return (
            <h1
              key={index}
              className="text-sm text-center h-14 w-14 grid place-content-center text-gray-400 dark:text-zinc-400 select-none"
            >
              {day}
            </h1>
          );
        })}
      </div>

      <div className="grid grid-cols-7">
        {generateDate(today.month(), today.year()).map(
          ({ date, currentMonth, today }, index) => {
            return (
              <div
                key={index}
                className="p-2 text-center h-12 grid place-content-center text-sm border-t border-gray-200 dark:border-zinc-800"
              >
                <h1
                  className={`
                        ${
                          currentMonth ? "" : "text-gray-400 dark:text-zinc-400"
                        }
                        ${
                          today
                            ? "bg-primaryLight dark:bg-primaryDark text-white dark:text-black"
                            : ""
                        }
                        ${
                          dueDate.toDate().toDateString() ===
                          date.toDate().toDateString()
                            ? "bg-gray-200 dark:bg-zinc-700"
                            : ""
                        }
                        " h-8 w-8 rounded-lg grid place-content-center hover:bg-gray-500 hover:dark:bg-zinc-800 hover:bg-opacity-10 transition-all cursor-pointer select-none"
                      `}
                  onClick={() => {
                    if (date.toDate() >= currentDate) {
                      setDueDate(date);
                      setMenuVisible(false);
                    }
                  }}
                >
                  {date.date()}
                </h1>
              </div>
            );
          }
        )}
      </div>
    </div>
  );
};
export default Calendar;

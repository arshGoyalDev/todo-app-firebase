"use client";

import { useState, useEffect } from "react";

import SearchBox from "./SearchBox";

import { useApp } from "@/context";

const Header = () => {
  const { search } = useApp();

  const [searchValue, setSearchValue] = useState("");
  const [searchData, setSearchData] = useState([]);

  useEffect(() => {
    search(searchValue, searchData, setSearchData);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchValue]);

  return (
    <header className="flex justify-between items-center py-6 px-5 lg:py-10 lg:px-12 2xl:py-12 2xl:px-20">
      <h1 className="font-bold md:text-lg xl:text-xl">TODO APP</h1>

      <div className="relative flex gap-2">
        <input
          type="text"
          name="search"
          value={searchValue}
          autocomplete="off"
          onChange={(e) => setSearchValue(e.target.value)}
          placeholder="Search for tasks..."
          className="w-96 hidden md:block py-3 px-5 bg-gray-50 dark:bg-zinc-900 placeholder:dark:text-zinc-600 rounded-lg"
        />

        <button className="bg-gray-50 dark:bg-zinc-900 p-3 rounded-lg">
          <span className="stroke-black dark:stroke-white">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
                stroke-Width="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M22 22L20 20"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                f
              />
            </svg>
          </span>
        </button>

        {searchValue !== "" && (
          <SearchBox searchData={searchData} seatSearchData={setSearchData} />
        )}
      </div>
    </header>
  );
};
export default Header;

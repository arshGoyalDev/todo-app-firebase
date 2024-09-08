"use client";

import { useState } from "react";

const SearchBtn = () => {
  const [searchDialogVisible, setSearchDialogVisible] = useState(false);

  return (
    <button className="p-1 flex justify-center items-center rounded-full">
      <span className="stroke-black dark:stroke-white">
        <svg
          width="28"
          height="32"
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
          />
        </svg>
      </span>
    </button>
  );
};

export default SearchBtn;

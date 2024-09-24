import { useState } from 'react';

const SearchBox = () => {
  const [searchValue, setSearchValue] = useState("");

  return (
    <div className="search-box absolute top-[-240px] w-[90vw] sm:w-[360px] p-4 pb-0 bg-gray-50 dark:bg-zinc-900 border-2 border-gray-200 dark:border-zinc-800 rounded-xl">
      <div className="relative px-2 flex flex-row-reverse items-center w-full bg-gray-100 dark:bg-zinc-800 rounded-lg">
        <input
          type="text"
          value={searchValue}
          id="search-bar"
          placeholder="Search for tasks, projects ..."
          onChange={(e) => setSearchValue(e.target.value)}
          className="input py-3 w-full bg-transparent focus:outline-none px-2 placeholder:text-gray-500 font-semibold dark:placeholder:text-zinc-500"
        />
        <label
          htmlFor="search-bar"
          className="input-icon grid place-items-center w-10 h-8 rounded transition-all"
        >
          <span className="icon no-fill w-5 h-5 stroke-black dark:stroke-white">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11 20C15.9706 20 20 15.9706 20 11C20 6.02944 15.9706 2 11 2C6.02944 2 2 6.02944 2 11C2 15.9706 6.02944 20 11 20Z"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M18.9299 20.6898C19.4599 22.2898 20.6699 22.4498 21.5999 21.0498C22.4499 19.7698 21.8899 18.7198 20.3499 18.7198C19.2099 18.7098 18.5699 19.5998 18.9299 20.6898Z"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </label>
      </div>

      <div className="grid place-content-center text-lg py-16 font-bold">
        Nothing to see here ...
      </div>
    </div>
  );
};
export default SearchBox;

"use client";

const SearchBox = ({ searchValue, setSearchValue, searchData, setSearchData, searchBoxVisible, setSearchBoxVisible }) => {
  return (
    <div className={`${searchValue ? "md:block" : "md:hidden"} ${searchBoxVisible ? "block" : "hidden md:block"} absolute top-16 right-0 md:left-0 w-[90vw] max-w-[440px] md:w-[440px] md:h-52 bg-gray-50 dark:bg-zinc-900 rounded-lg overflow-y-auto`}>

      <div className="md:hidden py-4 px-4 border-b-2 border-gray-100 dark:border-zinc-800">
      <input
          type="text"
          name="search"
          value={searchValue}
          autocomplete="off"
          onChange={(e) => setSearchValue(e.target.value)}
          placeholder="Search for tasks..."
          className="w-full py-3 px-5 bg-gray-100 dark:bg-zinc-800 placeholder:dark:text-zinc-600 rounded-lg"
        />
      </div>

      {searchData.length !== 0 ?
        searchData.map((el) => {
          return (
            <>
              <div key={el.id} className="flex justify-between items-center border-b-2 border-gray-100 dark:border-zinc-800 hover:bg-gray-400 hover:dark:bg-zinc-800 hover:bg-opacity-10 transition-all cursor-pointer duration-200">
                <div className="w-full flex gap-3 items-center p-3">
                  <span className="stroke-black dark:stroke-white">
                    <svg
                      width="30"
                      height="30"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M7.75 12L10.58 14.83L16.25 9.17004"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>

                  <h2 className="font-semibold pt-0.5">{el.taskName}</h2>
                </div>

                <button className="p-3">
                  <span className="stroke-black dark:stroke-white">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8.91003 19.9201L15.43 13.4001C16.2 12.6301 16.2 11.3701 15.43 10.6001L8.91003 4.08008"
                        strokeWidth="1.5"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </button>
              </div>
            </>
          );
        }) : (
          <div className="pt-16 grid place-content-center font-lg font-semibold text-center">Found Nothing, Try searching something different.</div>
        )}
    </div>
  );
};
export default SearchBox;

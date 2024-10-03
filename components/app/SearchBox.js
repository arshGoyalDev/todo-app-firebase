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

                  <span className={`${el.priority === 1 && "fill-red-600"} ${el.priority === 2 && "fill-yellow-500"} ${el.priority === 3 && "fill-blue-600"}`}>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4.26001 11.0199V15.9899C4.26001 17.8099 4.26001 17.8099 5.98001 18.9699L10.71 21.6999C11.42 22.1099 12.58 22.1099 13.29 21.6999L18.02 18.9699C19.74 17.8099 19.74 17.8099 19.74 15.9899V11.0199C19.74 9.19994 19.74 9.19994 18.02 8.03994L13.29 5.30994C12.58 4.89994 11.42 4.89994 10.71 5.30994L5.98001 8.03994C4.26001 9.19994 4.26001 9.19994 4.26001 11.0199Z"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M17.5 7.63V5C17.5 3 16.5 2 14.5 2H9.5C7.5 2 6.5 3 6.5 5V7.56"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
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

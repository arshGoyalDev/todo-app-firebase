"use client";

import { useRouter } from "next/navigation";

import { useAuth } from "@/context";

const SettingsMenu = ({ setSettingsMenuVisible }) => {
  const router = useRouter();

  const { userDetails, logout } = useAuth();

  return (
    <div className="settings-menu absolute top-[-180px] left-[45%] w-[200px] bg-gray-50 dark:bg-zinc-900 border-2 border-gray-200 dark:border-zinc-800 rounded-xl">
      <button className="w-full flex justify-between items-center py-3 px-4 border-b-2 border-gray-200 dark:border-zinc-800">
        {userDetails?.name}

        <span className="stroke-black dark:stroke-white">
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.1601 10.87C12.0601 10.86 11.9401 10.86 11.8301 10.87C9.45006 10.79 7.56006 8.84 7.56006 6.44C7.56006 3.99 9.54006 2 12.0001 2C14.4501 2 16.4401 3.99 16.4401 6.44C16.4301 8.84 14.5401 10.79 12.1601 10.87Z"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M7.15997 14.56C4.73997 16.18 4.73997 18.82 7.15997 20.43C9.90997 22.27 14.42 22.27 17.17 20.43C19.59 18.81 19.59 16.17 17.17 14.56C14.43 12.73 9.91997 12.73 7.15997 14.56Z"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </span>
      </button>

      <button
        className="w-full flex justify-between items-center py-3 px-4 border-b-2 border-gray-200 dark:border-zinc-800"
        onClick={() => {
          setSettingsMenuVisible(false);
          router.push("/app?settings=true");
        }}
      >
        Settings
        <span className="stroke-black dark:stroke-white">
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3 9.11011V14.8801C3 17.0001 3 17.0001 5 18.3501L10.5 21.5301C11.33 22.0101 12.68 22.0101 13.5 21.5301L19 18.3501C21 17.0001 21 17.0001 21 14.8901V9.11011C21 7.00011 21 7.00011 19 5.65011L13.5 2.47011C12.68 1.99011 11.33 1.99011 10.5 2.47011L5 5.65011C3 7.00011 3 7.00011 3 9.11011Z"
              stroke-Width="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
              stroke-Width="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </button>

      <button
        className="w-full flex items-center justify-between py-3 px-4"
        onClick={() => {
          logout();
        }}
      >
        Logout
        <span className="stroke-black dark:stroke-white">
          <svg
            width="20"
            height="20"
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
  );
};
export default SettingsMenu;

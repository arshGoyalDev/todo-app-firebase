import Link from "next/link";

const Settings = () => {
  return (
    <div className="w-full sm:max-w-[600px] bg-gray-100 dark:bg-neutral-900 rounded-t-xl md:rounded-xl">
      <div className="flex justify-between items-center py-5 md:py-4 px-4 md:px-6 border-b-0 border-gray-200 dark:border-zinc-800">
        <h2 className="font-semibold text-xl">Settings</h2>
        <Link href="/app">
          <span className="stroke-black dark:stroke-white">
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M9.16998 14.83L14.83 9.17004"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M14.83 14.83L9.16998 9.17004"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Settings;

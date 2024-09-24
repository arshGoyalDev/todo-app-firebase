"use client";

const AddTaskBtn = () => {
  return (
    <button className="p-1 flex justify-center items-center rounded-full bg-primaryLight dark:bg-primaryDark">
      <span className="stroke-white dark:stroke-black">
        <svg
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6 12H18"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 18V6"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
    </button>
  );
};
export default AddTaskBtn;

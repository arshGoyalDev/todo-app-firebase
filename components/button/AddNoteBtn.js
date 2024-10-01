"use client";

import Link from 'next/link';

const AddNoteBtn = () => {
  return (
    <Link
      href="/app?add-note=true"
      className="p-1 flex justify-center items-center"
    >
      <span className="stroke-black dark:stroke-white">
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8 2V5" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round"
                strokeLinejoin="round"/>
          <path d="M16 2V5" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round"
                strokeLinejoin="round"/>
          <path d="M7 13H15" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round"
                strokeLinejoin="round"/>
          <path d="M7 17H12" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round"
                strokeLinejoin="round"/>
          <path
            d="M16 3.5C19.33 3.68 21 4.95 21 9.65V15.83C21 19.95 20 22.01 15 22.01H9C4 22.01 3 19.95 3 15.83V9.65C3 4.95 4.67 3.69 8 3.5H16Z"
            strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>

      </span>
    </Link>
  );
}

export default AddNoteBtn;

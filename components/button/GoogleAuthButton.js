"use client";

import { useState, useEffect } from "react";

import { useAuth } from "@/context";
import { ThreeDots } from "../loaders";

const GoogleAuthButton = ({ form }) => {
  const { googleAuth } = useAuth();

  const [loading, setLoading] = useState(false);

  return (
    <button
      onClick={() => {
        setLoading(true);
        googleAuth(form, setLoading);
      }}
      className="flex justify-center gap-3 items-center w-full max-w-[460px] py-3 border-2 border-gray-300 dark:border-zinc-800 rounded-xl hover:bg-gray-400 hover:text-black dark:hover:text-white hover:border-transparent hover:dark:bg-zinc-800 hover:bg-opacity-10 transition-all duration-300"
    >
      {loading ? (
        <>
          <ThreeDots />
        </>
      ) : (
        <>
          <span className=" dark:fill-white">
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21.5892 10.1783H12.1992V13.8883H17.7092C17.5992 14.8083 16.9992 16.1983 15.6692 17.1283C14.8292 17.7183 13.6892 18.1283 12.1992 18.1283C9.55922 18.1283 7.30922 16.3883 6.50922 13.9683C6.29922 13.3483 6.17922 12.6783 6.17922 11.9883C6.17922 11.2983 6.29922 10.6283 6.49922 10.0083C6.55922 9.8283 6.62922 9.63829 6.70922 9.46829C7.65922 7.33829 9.75922 5.85828 12.1992 5.85828C14.0792 5.85828 15.3392 6.6683 16.0692 7.3483L18.8892 4.58829C17.1592 2.97829 14.8992 1.98828 12.1992 1.98828C8.28922 1.98828 4.90922 4.22829 3.26922 7.49829C2.58922 8.85829 2.19922 10.3783 2.19922 11.9883C2.19922 13.5983 2.58922 15.1183 3.26922 16.4783L3.27922 16.4683V16.4783C4.91922 19.7483 8.28922 21.9883 12.1992 21.9883C14.8992 21.9883 17.1692 21.0983 18.8192 19.5683C20.7092 17.8283 21.7992 15.2583 21.7992 12.2083C21.7992 11.3983 21.7292 10.7983 21.5892 10.1783Z"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>

          <span className="font-semibold">Google</span>
        </>
      )}
    </button>
  );
};
export default GoogleAuthButton;

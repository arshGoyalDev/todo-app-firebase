"use client";

import React from "react";

import Link from "next/link";

import { useRouter } from "next/navigation";

const TransitionLink = ({ children, href, className }) => {
  const router = useRouter();

  const sleep = (ms) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
  };

  const handleTransition = async (
    e
  ) => {
    e.preventDefault();

    const body = document.querySelector("body");

    body?.classList.add("page-transition");

    await sleep(700);

    router.push(href);

    await sleep(900);

    body?.classList.remove("page-transition");
  };

  return (
    <Link onClick={handleTransition} href={href} className={className}>
      {children}
    </Link>
  );
};

export default TransitionLink;

"use client";

import React from "react";

import Link from "next/link";

import { useRouter } from "next/navigation";

const TransitionLink = ({ children, href, className }) => {
  const router = useRouter();

  const sleep = (ms) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
  };

  const handleTransition = async (e) => {
    e.preventDefault();

    const body = document.querySelector("body");

    body?.classList.add("animate--slide-in");
    body?.classList.add("animate--slide-out");

    await sleep(700);

    router.push(href);

    await sleep(900);

    body?.classList.remove("animate--slide-in");
    body?.classList.remove("animate--slide-out");
  };

  return (
    <Link onClick={handleTransition} href={href} className={className}>
      {children}
    </Link>
  );
};

export default TransitionLink;

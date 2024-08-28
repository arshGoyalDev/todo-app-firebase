"use client";

import { useState } from "react";

import {TransitionLink} from "@/components/animations";

import { Input, PasswordInput } from "@/components/form";
import { GoogleAuthButton } from "@/components/button";

const SignUpPage = () => {
  const [nameValue, setNameValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");

  const [errorName, setErrorName] = useState(false);
  const [errorEmail, setErrorEmail] = useState(false);
  const [errorPassword, setErrorPassword] = useState(false);

  return (
    <main className="dark:bg-zinc-950 min-h-screen dark:text-white xl:p-8 grid place-content-center xl:place-content-stretch xl:grid-cols-2 gap-8">
      <section className="hidden xl:block min-h-full rounded-xl bg-gray-200 dark:bg-zinc-800"></section>

      <section className="min-h-screen px-8 xl:px-0 xl:min-h-full flex flex-col items-center w-screen xl:w-full justify-center">
        <div className="grid gap-4 w-full max-w-[460px]">
          <h1 className="text-3xl font-semibold xl:text-5xl 2xl:text-5xl">
            Create an Account
          </h1>
          <p className="text-gray-600 dark:text-zinc-400">
            Already have an account?{" "}
            <TransitionLink href="/login" className="text-primary font-semibold">
              Login
            </TransitionLink>
          </p>
        </div>
        <form className="mt-12 w-full max-w-[460px]">
          <div className="flex flex-col gap-5 items-start">
            <Input
              value={nameValue}
              setValue={setNameValue}
              error={errorName}
              type="name"
            />

            <Input
              value={emailValue}
              setValue={setEmailValue}
              error={errorEmail}
              type="email"
            />

            <PasswordInput
              passwordValue={passwordValue}
              setPasswordValue={setPasswordValue}
              errorPassword={errorPassword}
            />
            <button className="text-white mt-10 w-full py-[14px] font-semibold bg-primary rounded-xl hover:bg-gray-400 hover:text-black dark:hover:text-white hover:dark:bg-zinc-800 hover:bg-opacity-10 transition-all duration-300">
              Sign Up
            </button>
          </div>
        </form>
        <div className="flex gap-2 items-center justify-stretch w-full max-w-[460px] mt-12 mb-8">
          <span className="h-1 w-full bg-gray-100 dark:bg-zinc-800 rounded-full"></span>
          <p className="w-full text-nowrap text-center font-medium">
            or Sign Up with
          </p>
          <span className="h-1 w-full bg-gray-100 dark:bg-zinc-800 rounded-full"></span>
        </div>

        <GoogleAuthButton />
      </section>
    </main>
  );
};
export default SignUpPage;

"use client";

import { useState } from "react";

import TransitionLink from "@/components/animations/TransitionLink";
import { Input, PasswordInput } from "@/components/form";

const SignUpPage = () => {
  const [nameValue, setNameValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");

  const [errorEmail, setErrorEmail] = useState(false);
  const [errorName, setErrorName] = useState(false);
  const [errorPassword, setErrorPassword] = useState(false);

  return (
    <main className="dark:bg-zinc-950 min-h-screen dark:text-white xl:p-8 xl:grid xl:grid-cols-2 gap-8">
      <section className="hidden xl:block min-h-full rounded-xl bg-gray-200 dark:bg-zinc-800"></section>

      <section className="min-h-screen px-8 xl:px-0 xl:min-h-full flex flex-col xl:items-center w-full justify-center">
        <div className="grid gap-4 w-full max-w-[460px]">
          <h1 className="text-3xl xl:text-5xl 2xl:text-5xl">
            Create an Account
          </h1>
          <p className="text-gray-600 dark:text-zinc-400">
            Already have an account?{" "}
            <TransitionLink
              href="/login"
              className="text-black dark:text-white"
            >
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
          </div>
        </form>
      </section>
    </main>
  );
};
export default SignUpPage;

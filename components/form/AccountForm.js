"use client";

import { useState } from "react";

import { Input, PasswordInput } from ".";
import { useAuth } from "@/context";

import { useRouter } from "next/navigation";

const AccountForm = ({ form }) => {
  const { signUp, login } = useAuth();

  const [nameValue, setNameValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");

  const [errorEmail, setErrorEmail] = useState(false);
  const [errorPassword, setErrorPassword] = useState(false);

  return (
    <form
      className="mt-12 w-full max-w-[460px]"
      onSubmit={(e) => {
        e.preventDefault();
        form === "sign-up"
          ? signUp(nameValue, emailValue, passwordValue, setErrorEmail)
          : login(emailValue, passwordValue, setErrorEmail, setErrorPassword);
      }}
    >
      <div className="flex flex-col gap-5 items-start">
        {form === "sign-up" && (
          <Input
            value={nameValue}
            setValue={setNameValue}
            error={false}
            type="name"
          />
        )}

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
        <button className="font-bold text-white dark:text-black mt-10 w-full py-[14px] bg-primaryLight dark:bg-primaryDark rounded-xl hover:bg-gray-400 hover:text-black dark:hover:text-white hover:dark:bg-zinc-800 hover:bg-opacity-10 transition-all duration-300">
          {form === "login" ? "Login" : "Sign Up"}
        </button>
      </div>
    </form>
  );
};

export default AccountForm;

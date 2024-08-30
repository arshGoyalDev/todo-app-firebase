"use client";

import { useState } from "react";

import { Input, PasswordInput } from ".";

const AccountForm = ({ form }) => {
  const [nameValue, setNameValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");

  const [errorName, setErrorName] = useState(false);
  const [errorEmail, setErrorEmail] = useState(false);
  const [errorPassword, setErrorPassword] = useState(false);

  return (
    <form className="mt-12 w-full max-w-[460px]">
      <div className="flex flex-col gap-5 items-start">
        {form === "sign-up" && (
          <Input
            value={nameValue}
            setValue={setNameValue}
            error={errorName}
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
        <button className="text-white mt-10 w-full py-[14px] font-semibold bg-primary rounded-xl hover:bg-gray-400 hover:text-black dark:hover:text-white hover:dark:bg-zinc-800 hover:bg-opacity-10 transition-all duration-300">
          {form === "login" ? "Login" : "Sign Up"}
        </button>
      </div>
    </form>
  );
};

export default AccountForm;

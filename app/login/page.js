import { TransitionLink } from "@/components/animations";

import { AccountForm } from "@/components/form";
import { GoogleAuthButton } from "@/components/button";

const metadata = {
  title: "Login | Todo App",
  description: "Login into todo app. Never miss your important tasks",
};

const LoginPage = () => {
  return (
    <main className="dark:bg-zinc-950 min-h-screen dark:text-white xl:p-8 grid place-content-center xl:place-content-stretch xl:grid-cols-2 gap-8">
      <section className="min-h-screen px-8 xl:px-0 xl:min-h-full flex flex-col items-center w-screen xl:w-full justify-center">
        <div className="grid gap-4 w-full max-w-[460px]">
          <h1 className="flex flex-col gap-2 font-semibold text-3xl xl:text-5xl 2xl:text-5xl">
            <p>Hello,</p>
            <p>Welcome Back</p>
          </h1>
          <p className="text-gray-600 dark:text-zinc-400">
            {
              // eslint-disable-next-line react/no-unescaped-entities
              "Don't have an account yet? "
            }
            <TransitionLink
              href="/sign-up"
              className="text-primary font-semibold"
            >
              Sign Up
            </TransitionLink>
          </p>
        </div>
        <AccountForm form="login" />
        <div className="flex gap-2 items-center justify-stretch w-full max-w-[460px] mt-12 mb-8">
          <span className="h-1 w-full bg-gray-100 dark:bg-zinc-800 rounded-full"></span>
          <p className="w-full text-nowrap text-center font-medium">
            or Login with
          </p>
          <span className="h-1 w-full bg-gray-100 dark:bg-zinc-800 rounded-full"></span>
        </div>

        <GoogleAuthButton />
      </section>

      <section className="hidden xl:block min-h-full rounded-xl bg-gray-200 dark:bg-zinc-800"></section>
    </main>
  );
};

export { metadata };
export default LoginPage;

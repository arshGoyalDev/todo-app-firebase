import { AccountForm } from "@/components/form";
import { GoogleAuthButton, HomeButton } from "@/components/button";
import { TransitionLink } from "@/components/animations";

const metadata = {
  title: "Sign Up | Todo App",
  description: "Sign for todo app. Make your life easier",
};

const SignUpPage = () => {
  return (
    <main className="dark:bg-zinc-950 min-h-screen dark:text-white xl:p-8 grid place-content-center xl:place-content-stretch xl:grid-cols-2 gap-8">
      <HomeButton form="sign-up" />

      <section className="hidden xl:block min-h-full rounded-xl bg-gray-200 dark:bg-zinc-800"></section>

      <section className="min-h-screen px-8 xl:px-0 xl:min-h-full flex flex-col items-center w-screen xl:w-full justify-center">
        <div className="grid gap-4 w-full max-w-[460px]">
          <h1 className="text-3xl font-semibold xl:text-5xl 2xl:text-5xl">
            Create an Account
          </h1>
          <p className="text-gray-600 dark:text-zinc-400">
            Already have an account?{" "}
            <TransitionLink
              href="/login"
              className="text-primary font-semibold"
            >
              Login
            </TransitionLink>
          </p>
        </div>
        <AccountForm form="sign-up" />

        <div className="flex gap-2 items-center justify-stretch w-full max-w-[460px] mt-12 mb-8">
          <span className="h-1 w-full bg-gray-100 dark:bg-zinc-800 rounded-full"></span>
          <p className="w-full text-nowrap text-center font-medium">
            or Sign Up with
          </p>
          <span className="h-1 w-full bg-gray-100 dark:bg-zinc-800 rounded-full"></span>
        </div>

        <GoogleAuthButton form="sign-up" />
      </section>
    </main>
  );
};

export { metadata };
export default SignUpPage;

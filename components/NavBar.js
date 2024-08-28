import { TransitionLink } from "./animations";

const NavBar = () => {
  return (
    <header className="sticky w-[90vw] left-[5vw] top-[5vw] md:w-[80vw] md:left-[10vw] md:top-10 flex justify-between items-center py-4 px-4 lg:px-10 bg-gray-50 dark:bg-zinc-900 border-2 border-gray-200 dark:border-zinc-800 rounded-xl">
      <h2 className="text-xl xl:text-2xl font-semibold">Todo App</h2>

      <nav className="flex items-center gap-4 font-medium">
        <TransitionLink
          href="/sign-up"
          className="px-2 py-1 lg:px-3 hover:bg-gray-200 hover:dark:bg-zinc-800 bg-opacity-10 rounded-lg transition-all duration-300"
        >
          Sign Up
        </TransitionLink>

        <TransitionLink
          href="/login"
          className="px-2 py-1 lg:px-3 hover:bg-gray-200 hover:dark:bg-zinc-800 bg-opacity-10 rounded-lg transition-all duration-300"
        >
          Login
        </TransitionLink>
      </nav>
    </header>
  );
};
export default NavBar;

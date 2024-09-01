import { TransitionLink } from "@/components/animations";

const HomeButton = ({ form }) => {
  return (
    <TransitionLink
      href="/"
      className={`flex items-center gap-1 fixed top-3 xl:top-8 left-3 ${
        form === "sign-up" ? "xl:left-1/2" : "xl:left-8"
      } pl-3 pr-4 py-2 bg-gray-50 dark:bg-zinc-900 border-2 border-gray-200 dark:border-zinc-800 rounded-lg`}
    >
      <span className="stroke-black dark:stroke-white">
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15 19.9201L8.47997 13.4001C7.70997 12.6301 7.70997 11.3701 8.47997 10.6001L15 4.08008"
            strokeWidth="1.5"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
      <span className="h-5">Home</span>
    </TransitionLink>
  );
};
export default HomeButton;

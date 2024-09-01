import { useTheme } from "@/context";

const ToggleThemeButton = () => {
  const { darkMode, setDarkMode } = useTheme();

  return (
    <div className="flex gap-3 items-center">
      <p>Theme</p>

      <button
        className={`relative w-16 h-8 rounded-full border-2 border-gray-200 dark:border-zinc-800 `}
        onClick={() => {
          darkMode ? setDarkMode(false) : setDarkMode(true);
        }}
      >
        <div
          className={`slider absolute top-1 left-1 h-5 w-5 rounded-full bg-zinc-600 ${
            darkMode && "dark"
          } transition-all duration-300`}
        ></div>
      </button>
    </div>
  );
};
export default ToggleThemeButton;

import { useTheme } from "@/context";


const ToggleThemeButton = () => {
  const {darkMode, setDarkMode} = useTheme();

  return (
    <div className="flex gap-3 items-center">
      <button onClick={() => setDarkMode(false)}>Light</button>

      <button
        className="relative h-8 w-16 rounded-full bg-white dark:bg-zinc-950"
        onClick={() => {
          darkMode ? setDarkMode(false) : setDarkMode(true);
        }}
      >
        <div
          className={`absolute top-1 left-1 w-6 h-6 transition-all duration-300 rounded-full ${
            darkMode ? "translate-x-8 bg-zinc-800" : " bg-gray-200"
          }`}
        ></div>
      </button>

      <button onClick={() => setDarkMode(true)}>Dark</button>
    </div>
  );
};
export default ToggleThemeButton;

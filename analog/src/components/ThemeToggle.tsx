import { Moon, Sun } from "lucide-react";

interface ThemeToggleProps {
  darkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ darkMode, setDarkMode }) => {
  return (
    <button
      onClick={() => setDarkMode((prev) => !prev)}
      className="p-2 rounded-lg transition duration-300 bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-700 flex items-center gap-2"
    >
      {darkMode ? <Sun size={20} /> : <Moon size={20} />}
      {darkMode ? "Light Mode" : "Dark Mode"}
    </button>
  );
};

export default ThemeToggle;

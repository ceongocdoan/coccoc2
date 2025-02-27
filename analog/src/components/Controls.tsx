import { Moon, Sun } from "lucide-react";

interface ControlsProps {
  darkMode: boolean;
  setDarkMode: (mode: boolean) => void;
}

const Controls: React.FC<ControlsProps> = ({ darkMode, setDarkMode }) => {
  return (
    <div className="p-4 mt-4 bg-white dark:bg-gray-800 shadow-md rounded-lg flex items-center gap-4">
      {/* Nút Chuyển đổi Chế độ Sáng/Tối */}
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="flex items-center gap-2 px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition"
      >
        {darkMode ? <Sun size={20} /> : <Moon size={20} />}
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>
    </div>
  );
};

export default Controls;

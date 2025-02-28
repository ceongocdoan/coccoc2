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
        className="flex items-center  rounded-lg transition duration-300 
          text-gray-900 dark:text-white 
          hover:bg-gray-300 dark:hover:bg-gray-600"
      >
        {darkMode ? <Sun size={24} className="text-yellow-400" /> : <Moon size={24} className="text-blue-400" />}
        {darkMode ? "" : ""}
      </button>
    </div>
  );
};

export default Controls;

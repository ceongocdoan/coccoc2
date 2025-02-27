import { useState } from "react";
import AnalogClock from "./components/AnalogClock";
import Controls from "./components/Controls";
import "./App.css";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [timeZone, setTimeZone] = useState("Asia/Ho_Chi_Minh");

  return (
    <div className={`${darkMode ? "dark" : ""} min-h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white p-4`}>
      <h1 className="text-3xl font-bold mb-6">Đồng hồ của Ngọc</h1>

      {/* Đồng hồ */}
      <AnalogClock timeZone={timeZone} />

      {/* Bảng Điều Khiển */}
      <Controls darkMode={darkMode} setDarkMode={setDarkMode} />

      {/* Chọn Múi Giờ */}
      <select
        value={timeZone}
        onChange={(e) => setTimeZone(e.target.value)}
        className="mt-4 p-2 border rounded"
      >
        <option value="Asia/Ho_Chi_Minh">Hà Nội (Asia/Ha Noi)</option>
        <option value="Europe/London">London (Europe/London)</option>
        <option value="Asia/Seoul">Seoul (Asia/Seoul)</option>
      </select>
    </div>
  );
}

export default App;

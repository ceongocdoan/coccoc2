import { useState } from "react";
import AnalogClock from "./components/AnalogClock";
import Controls from "./components/Controls";
import "./App.css";
import bgImage from "./assets/bg.jpg";
export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [timeZone, setTimeZone] = useState("Asia/Ho_Chi_Minh");

  return (
    <div
      className={`${
        darkMode ? "dark" : ""
      } w-screen h-screen fixed top-0 left-0 flex flex-col items-center bg-cover bg-center justify-center dark:bg-gray-900 text-gray-900 dark:text-white p-4`}
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* <h1
        className="text-3xl font-bold mb-6 text-pink-500"
        style={{ textShadow: "0 0 10px #ff00ff, 0 0 20px #ff00ff" }} // Neon Effect
      >
        Đồng hồ của Ngọc
      </h1> */}

      {/* Đồng hồ */}
      <AnalogClock timeZone={timeZone} />

      {/* Bảng Điều Khiển */}
      <Controls darkMode={darkMode} setDarkMode={setDarkMode} />

      {/* Chọn Múi Giờ */}
      <select
        value={timeZone}
        onChange={(e) => setTimeZone(e.target.value)}
        className="mt-4 animate-pulse p-2 border rounded text-[#a2164e]"
        style={{
          boxShadow: "0 0 10px #a2164e",
          borderColor: "#a2164e",
        }}
      >
        <option value="Asia/Ho_Chi_Minh">Hà Nội (Asia/Ha Noi)</option>
        <option value="Europe/London">London (Europe/London)</option>
        <option value="Asia/Seoul">Seoul (Asia/Seoul)</option>
      </select>
    </div>
  );
}

import { useState } from "react";
import AnalogClock from "./components/AnalogClock";
import Controls from "./components/Controls";
import "./App.css";
import bgMain from "./assets/bg.jpg"; // Background luôn hiển thị
import bgLight from "./assets/bg-light.png"; // Background có mặt trời
import bgDark from "./assets/bg-dark.png"; // Background có mặt trăng
import DigitalClock from "./components/DigitalClock";
export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [timeZone, setTimeZone] = useState("Asia/Ho_Chi_Minh");

  return (
    <div className=" w-full  h-full flex flex-col items-center justify-center transition-all duration-500">
      {/* Background chính */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-50"
        style={{ backgroundImage: `url(${bgMain})` }}
      />

      {/* Background thay đổi theo darkMode */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-500"
        style={{
          backgroundImage: `url(${darkMode ? bgDark : bgLight})`,
          opacity: darkMode ? 1 : 0.7,
        }}
      />

      {/* Nội dung chính */}
      <div className="relative z-10 pt-10 flex flex-col items-center text-gray-900 dark:text-white w-full max-w-screen-lg px-4 sm:px-6 md:px-8 lg:px-12">
        

        {/* Đồng hồ */}
        <div className="w-full flex justify-center">
          <AnalogClock timeZone={timeZone} />
        </div>
        <div className="w-full flex flex-col items-center">
  
  <DigitalClock timeZone={timeZone} />
</div>
        {/* Điều khiển */}
        <div className="mt-4 w-full flex justify-center">
          <Controls darkMode={darkMode} setDarkMode={setDarkMode} />
        </div>

        {/* Chọn múi giờ */}
        <select
          value={timeZone}
          onChange={(e) => setTimeZone(e.target.value)}
          className="mt-4 p-2 border rounded text-[#a2164e] w-full max-w-[200px] text-left"
          style={{
            boxShadow: "0 0 10px #a2164e",
            borderColor: "#a2164e",
          }}
        >
          <option value="Asia/Ho_Chi_Minh">Hà Nội (Asia/Ho_Chi_Minh)</option>
          <option value="Europe/London">London (Europe/London)</option>
          <option value="Asia/Seoul">Seoul (Asia/Seoul)</option>
        </select>
      </div>
    </div>
  );
}

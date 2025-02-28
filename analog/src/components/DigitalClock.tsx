import { useEffect, useState } from "react";

interface DigitalClockProps {
  timeZone: string;
}

const DigitalClock: React.FC<DigitalClockProps> = ({ timeZone }) => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date(new Date().toLocaleString("en-US", { timeZone })));
    }, 1000);
    return () => clearInterval(interval);
  }, [timeZone]);

  const formattedTime = time.toLocaleTimeString("vi-VN", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

  const formattedDate = time.toLocaleDateString("vi-VN", {
    weekday: "long",
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });

  return (
    <div className="mt-4 text-center text-xl font-bold text-[#C13346] shadow-md p-2 rounded-lg w-full max-w-xs">
      <div className="text-2xl sm:text-4xl">{formattedTime}</div>
      <div className="text-lg sm:text-xl text-gray-600">{formattedDate}</div>
    </div>
  );
};

export default DigitalClock;

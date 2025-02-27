import { useState, useEffect } from "react";

const useClock = (timeZone: string) => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      const formattedTime = now.toLocaleString("en-US", { timeZone });

      // Chuyển đổi chuỗi thời gian thành đối tượng Date
      const updatedTime = new Date(formattedTime);
      setTime(updatedTime);
    };

    updateClock(); // Cập nhật ngay lập tức
    const interval = setInterval(updateClock, 1000); // Cập nhật mỗi giây

    return () => clearInterval(interval);
  }, [timeZone]);

  return time;
};

export default useClock;

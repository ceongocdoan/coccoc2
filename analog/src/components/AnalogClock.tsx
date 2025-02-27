import useClock from "../hooks/useClock";

interface AnalogClockProps {
  timeZone: string;
}

const AnalogClock: React.FC<AnalogClockProps> = ({ timeZone }) => {
  const time = useClock(timeZone);

  const hourRotation = (time.getHours() % 12) * 30 + time.getMinutes() * 0.5;
  const minuteRotation = time.getMinutes() * 6;
  const secondRotation = time.getSeconds() * 6;

  // Danh sách số từ 1 đến 12
  const numbers = Array.from({ length: 12 }, (_, i) => i + 1);

  return (
    <div className="relative w-90 h-90 flex items-center justify-center rounded-full border-8 border-[#C13346] bg-gray-100 shadow-[0_0_20px_5px_#C13346]">


      {/* Hiển thị các số trên đồng hồ */}
      {numbers.map((num) => {
        const angle = (num * 30) * (Math.PI / 180); // Chuyển đổi độ thành radian
        const x = Math.sin(angle) * 100; // Điều chỉnh vị trí số theo hình tròn
        const y = -Math.cos(angle) * 100;

        return (
          <div
            key={num}
            className="absolute text-lg font-bold text-[#f3159e] drop-shadow-lg"
            style={{
              transform: `translate(${x}px, ${y}px)`,
            }}
          >
            {num}
          </div>
        );
      })}

      {/* Chấm trung tâm */}
      <div className="absolute w-3 h-3 bg-[#C13346] rounded-full shadow-md" />

 {/* Kim giờ */}
<div
  className="absolute w-2 h-24 bg-black origin-center rounded-full"
  style={{ transform: `rotate(${hourRotation}deg) translateY(-12px)` }}
/>

{/* Kim phút */}
<div
  className="absolute w-1.5 h-32 bg-gray-700 origin-center rounded-full"
  style={{ transform: `rotate(${minuteRotation}deg) translateY(-16px)` }}
/>

{/* Kim giây */}
<div
  className="absolute w-1 h-40 bg-[#B9D6F3] origin-center rounded-full"
  style={{ transform: `rotate(${secondRotation}deg) translateY(-20px)` }}
/>

 

      {/* Vòng tròn tiến trình */}
      <svg className="absolute w-90 h-90" viewBox="0 0 200 200">
        <circle
          cx="100" cy="100" r="90"
          stroke="#EFB0C9" strokeWidth="3" fill="none"
          strokeDasharray="565"
          strokeDashoffset={565 - (hourRotation / 360) * 565}
          strokeLinecap="round"
          transform="rotate(-90 100 100)"
          style={{ filter: "drop-shadow(0 0 10px #f3159e)" }} 
        />
        <circle
          cx="100" cy="100" r="80"
          stroke="#F4C2D7" strokeWidth="2" fill="none"
          strokeDasharray="502"
          strokeDashoffset={502 - (minuteRotation / 360) * 502}
          strokeLinecap="round"
          transform="rotate(-90 100 100)"
        />
        <circle
          cx="100" cy="100" r="70"
          stroke="#F8DAE9" strokeWidth="1" fill="none"
          strokeDasharray="440"
          strokeDashoffset={440 - (secondRotation / 360) * 440}
          strokeLinecap="round"
          transform="rotate(-90 100 100)"
        />
      </svg>
    </div>
  );
};

export default AnalogClock;

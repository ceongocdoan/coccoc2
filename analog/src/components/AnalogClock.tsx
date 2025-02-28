import useClock from "../hooks/useClock";

interface AnalogClockProps {
  timeZone: string;
}

const AnalogClock: React.FC<AnalogClockProps> = ({ timeZone }) => {
  const time = useClock(timeZone);

  const hourRotation = (time.getHours() % 12) * 30 + time.getMinutes() * 0.5;
  const minuteRotation = time.getMinutes() * 6;
  const secondRotation = time.getSeconds() * 6;

  const numbers = Array.from({ length: 12 }, (_, i) => i + 1);

  return (
    <div className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 flex items-center justify-center rounded-full border-8 border-[#C13346] bg-gray-100 shadow-[0_0_20px_5px_#C13346]">
      {numbers.map((num) => {
        const angle = (num * 30) * (Math.PI / 180);
        const x = Math.sin(angle) * 100;
        const y = -Math.cos(angle) * 100;

        return (
          <div
            key={num}
            className="absolute text-sm sm:text-base md:text-lg font-bold text-[#f3159e] drop-shadow-lg"
            style={{ transform: `translate(${x}px, ${y}px)` }}
          >
            {num}
          </div>
        );
      })}

      <div className="absolute w-3 h-3 bg-[#C13346] rounded-full shadow-md" />

      <div
        className="absolute w-2 h-24 sm:h-18 md:h-24 bg-black origin-center rounded-full"
        style={{ transform: `rotate(${hourRotation}deg) translateY(-18px)` }}
      />
      <div
        className="absolute w-1.5 h-32 sm:h-22 md:h-32 bg-gray-700 origin-center rounded-full"
        style={{ transform: `rotate(${minuteRotation}deg) translateY(-32px)` }}
      />
      <div
        className="absolute w-1 h-36 sm:h-24 md:h-36 bg-[#B9D6F3] origin-center rounded-full"
        style={{ transform: `rotate(${secondRotation}deg) translateY(-38px)` }}
      />

      <svg className="absolute w-full h-full" viewBox="0 0 200 200">
  <circle
    cx="100" cy="100" r="95" // Đặt bán kính là 95
    stroke="#EFB0C9" strokeWidth="4" fill="none"
    strokeDasharray="597" // 2 * π * 95
    strokeDashoffset={597 - (hourRotation / 360) * 597}
    strokeLinecap="round"
    transform="rotate(-90 100 100)"
    style={{ filter: "drop-shadow(0 0 10px #f3159e)" }}
  />
  <circle
    cx="100" cy="100" r="90" // Đặt bán kính là 90
    stroke="#F4C2D7" strokeWidth="3" fill="none"
    strokeDasharray="565" // 2 * π * 90
    strokeDashoffset={565 - (minuteRotation / 360) * 565}
    strokeLinecap="round"
    transform="rotate(-90 100 100)"
  />
  <circle
    cx="100" cy="100" r="85" // Đặt bán kính là 85
    stroke="#F8DAE9" strokeWidth="2" fill="none"
    strokeDasharray="534" // 2 * π * 85
    strokeDashoffset={534 - (secondRotation / 360) * 534}
    strokeLinecap="round"
    transform="rotate(-90 100 100)"
  />
</svg>

    </div>
  );
};

export default AnalogClock;

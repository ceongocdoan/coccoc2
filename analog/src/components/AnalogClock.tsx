import useClock from "../hooks/useClock";

interface AnalogClockProps {
  timeZone: string;
}

const AnalogClock: React.FC<AnalogClockProps> = ({ timeZone }) => {
  const time = useClock(timeZone);

  const hourRotation = (time.getHours() % 12) * 30 + time.getMinutes() * 0.5;
  const minuteRotation = time.getMinutes() * 6;
  const secondRotation = time.getSeconds() * 6;

  return (
    
    <div className="relative w-64 h-64 flex items-center justify-center rounded-full border-4 border-gray-400 bg-gray-100 shadow-lg">
    {/* Chấm trung tâm */}
    <div className="absolute w-4 h-4 bg-black rounded-full" />
  
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
      className="absolute w-1 h-40 bg-red-500 origin-center rounded-full"
      style={{ transform: `rotate(${secondRotation}deg) translateY(-20px)` }}
    />
  </div>
  


  
  );
};

export default AnalogClock;

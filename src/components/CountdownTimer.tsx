import React, { useState, useEffect } from 'react';

interface CountdownTimerProps {
  targetDate: string;
  size?: 'small' | 'large';
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ targetDate, size = 'large' }) => {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        Days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        Hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        Mins: Math.floor((difference / 1000 / 60) % 60),
        Secs: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const timerComponents: JSX.Element[] = [];
  
  const textSize = size === 'large' ? 'text-3xl' : 'text-xl';
  const labelSize = size === 'large' ? 'text-xs' : 'text-[10px]';
  const padding = size === 'large' ? 'p-2' : 'p-1';


  Object.keys(timeLeft).forEach((interval) => {
    const value = timeLeft[interval as keyof typeof timeLeft];
    
    timerComponents.push(
      <div key={interval} className={`text-center ${padding} bg-white/50 rounded-lg shadow-inner`}>
        <span className={`${textSize} font-bold text-brand-brown`}>{String(value).padStart(2, '0')}</span>
        <span className={`block uppercase ${labelSize} text-brand-brown/80`}>{interval}</span>
      </div>
    );
  });

  return (
    <div className="text-center">
      <h3 className={`${size === 'large' ? 'text-xl' : 'text-sm'} font-bold text-brand-brown mb-2`}>Launching Soon!</h3>
      <div className="flex items-center gap-2">
        {timerComponents.length ? timerComponents : <span>Loading...</span>}
      </div>
    </div>
  );
};

export default CountdownTimer; 
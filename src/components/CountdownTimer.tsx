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
  
  const textSize = size === 'large' ? 'text-xl md:text-3xl' : 'text-sm md:text-xl';
  const labelSize = size === 'large' ? 'text-xs' : 'text-[8px] md:text-[10px]';
  const padding = size === 'large' ? 'p-1 md:p-2' : 'p-1';
  const gap = size === 'large' ? 'gap-1 md:gap-2' : 'gap-1';

  // Mobile-specific overrides
  const mobileTextSize = 'text-2xl xs:text-3xl sm:text-4xl';
  const mobileLabelSize = 'text-xs xs:text-sm';
  const mobileHeading = 'text-lg xs:text-xl sm:text-2xl';

  Object.keys(timeLeft).forEach((interval) => {
    const value = timeLeft[interval as keyof typeof timeLeft];
    
    timerComponents.push(
      <div
        key={interval}
        className={`text-center ${padding} bg-white/50 rounded-lg shadow-inner 
          md:inline-block inline-block`}
      >
        <span className={`font-bold text-brand-brown 
          md:${textSize} ${mobileTextSize}`}>{String(value).padStart(2, '0')}</span>
        <span className={`block uppercase text-brand-brown/80 
          md:${labelSize} ${mobileLabelSize}`}>{interval}</span>
      </div>
    );
  });

  return (
    <div className="w-full flex flex-col items-center justify-center">
      <h3 className={`font-bold text-brand-brown mb-1 md:mb-2 md:${textSize} ${mobileHeading} text-center`}>Launching Soon!</h3>
      <div className={`flex items-center justify-center w-full ${gap}`}>
        {timerComponents.length ? timerComponents : <span>Loading...</span>}
      </div>
    </div>
  );
};

export default CountdownTimer; 
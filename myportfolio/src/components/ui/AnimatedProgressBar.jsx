import React, { useRef, useState, useEffect } from 'react';

const AnimatedProgressBar = ({ percent = 100, duration = 1200 }) => {
  const [width, setWidth] = useState('0%');
  const barRef = useRef(null);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setWidth(`${percent}%`), 100);
        }
      },
      { threshold: 0.3 }
    );
    if (barRef.current) observer.observe(barRef.current);
    return () => {
      if (barRef.current) observer.unobserve(barRef.current);
    };
  }, [percent]);

  return (
    <div className="w-full h-1.5 bg-[#2e3842] rounded-full mt-4" ref={barRef}>
      <div
        className="h-1.5 rounded-full bg-emerald-400 transition-all"
        style={{
          width,
          transition: `width ${duration}ms cubic-bezier(0.4,0,0.2,1)`
        }}
      />
    </div>
  );
};

export default AnimatedProgressBar;

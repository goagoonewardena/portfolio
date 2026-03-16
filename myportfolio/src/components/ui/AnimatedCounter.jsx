import React, { useEffect, useRef, useState } from 'react';

const AnimatedCounter = ({ end, duration = 700, suffix = '', className = '' }) => {
  const [count, setCount] = useState(0);
  const ref = useRef();
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          let start = 0;
          const increment = end / (duration / 16);
          const animate = () => {
            start += increment;
            if (start < end) {
              setCount(Math.floor(start));
              requestAnimationFrame(animate);
            } else {
              setCount(end);
            }
          };
          animate();
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [end, duration]);

  return (
    <span ref={ref} className={className}>
      {count}{suffix}
    </span>
  );
};

export default AnimatedCounter;

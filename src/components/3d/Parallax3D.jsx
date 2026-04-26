import React, { useEffect, useRef, useState } from 'react';

export default function Parallax3D({ children, intensity = 0.5, className = "" }) {
  const elementRef = useRef(null);
  const [scrollY, setScrollY] = useState(0);
  const [elementTop, setElementTop] = useState(0);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const updateElementTop = () => {
      const rect = element.getBoundingClientRect();
      setElementTop(rect.top + window.scrollY);
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    updateElementTop();
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', updateElementTop);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', updateElementTop);
    };
  }, []);

  const parallaxOffset = (scrollY - elementTop) * intensity;
  const rotationX = (scrollY - elementTop) * 0.02;
  const rotationY = (scrollY - elementTop) * 0.01;

  return (
    <div 
      ref={elementRef}
      className={`transform-gpu ${className}`}
      style={{
        transform: `
          translate3d(0, ${parallaxOffset}px, 0) 
          rotateX(${rotationX}deg) 
          rotateY(${rotationY}deg)
        `,
        transformStyle: 'preserve-3d',
        transition: 'transform 0.1s ease-out'
      }}
    >
      {children}
    </div>
  );
}

import React, { useState, useEffect } from 'react';

export default function Avatar3D({ mousePos }) {
  const [time, setTime] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(prev => prev + 0.1);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative mb-12 inline-block">
      {/* Outer rotating ring */}
      <div 
        className="absolute -inset-8 rounded-full border-2 border-purple-500/30 animate-spin-slow"
        style={{
          transform: `perspective(1000px) rotateX(${mousePos.y * 5}deg) rotateY(${mousePos.x * 5}deg)`,
          transition: 'transform 0.1s ease-out',
          animationDuration: '20s'
        }}
      >
        {/* Orbital particles */}
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-purple-400 rounded-full"
            style={{
              top: '50%',
              left: '50%',
              transform: `
                translate(-50%, -50%) 
                rotate(${(360 / 8) * i + time * 50}deg) 
                translateX(80px) 
                translateZ(${Math.sin(time + i) * 10}px)
              `,
              boxShadow: '0 0 10px rgba(147, 51, 234, 0.8)',
              opacity: 0.7 + Math.sin(time + i) * 0.3
            }}
          />
        ))}
      </div>

      {/* Middle ring */}
      <div 
        className="absolute -inset-6 rounded-full border border-cyan-500/40"
        style={{
          transform: `perspective(1000px) rotateX(${mousePos.y * 8}deg) rotateY(${-mousePos.x * 8}deg) rotateZ(${time * 30}deg)`,
          transition: 'transform 0.1s ease-out'
        }}
      >
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1.5 h-1.5 bg-cyan-400 rounded-full"
            style={{
              top: '50%',
              left: '50%',
              transform: `
                translate(-50%, -50%) 
                rotate(${(360 / 6) * i - time * 40}deg) 
                translateX(60px)
              `,
              boxShadow: '0 0 8px rgba(59, 130, 246, 0.8)'
            }}
          />
        ))}
      </div>

      {/* Main avatar container */}
      <div 
        className="w-40 h-40 rounded-full relative transform-gpu"
        style={{
          transform: `
            perspective(1000px) 
            rotateX(${mousePos.y * 10}deg) 
            rotateY(${mousePos.x * 10}deg)
            translateZ(${Math.sin(time) * 5}px)
          `,
          transition: 'transform 0.1s ease-out'
        }}
      >
        {/* Animated gradient background */}
        <div 
          className="absolute inset-0 rounded-full animate-spin-slow"
          style={{
            background: `conic-gradient(from ${time * 50}deg, 
              rgba(147, 51, 234, 0.6) 0deg, 
              rgba(236, 72, 153, 0.6) 120deg, 
              rgba(59, 130, 246, 0.6) 240deg, 
              rgba(147, 51, 234, 0.6) 360deg)`,
            animationDuration: '12s'
          }}
        />
        
        {/* Inner container */}
        <div className="absolute inset-2 bg-black rounded-full flex items-center justify-center overflow-hidden">
          {/* Animated letter */}
          <span 
            className="text-6xl font-black bg-gradient-to-br from-purple-400 to-pink-400 bg-clip-text text-transparent relative z-10"
            style={{
              transform: `rotateY(${Math.sin(time * 0.3) * 5}deg) scale(${1 + Math.sin(time * 0.2) * 0.05})`,
              filter: `hue-rotate(${Math.sin(time * 0.5) * 30}deg)`,
              textShadow: '0 0 20px rgba(147, 51, 234, 0.3)'
            }}
          >
            S
          </span>
          
          {/* Inner glow effect */}
          <div 
            className="absolute inset-0 rounded-full"
            style={{
              background: `radial-gradient(circle at ${50 + mousePos.x * 15}% ${50 + mousePos.y * 15}%, 
                rgba(147, 51, 234, 0.2) 0%, 
                transparent 70%)`,
              opacity: 0.5 + Math.sin(time * 0.3) * 0.2
            }}
          />
        </div>
        
        {/* Outer glow */}
        <div 
          className="absolute -inset-4 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full blur-xl"
          style={{
            opacity: 0.3 + Math.sin(time * 0.2) * 0.1
          }}
        />
        
        {/* Floating energy particles */}
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              top: '50%',
              left: '50%',
              transform: `
                translate(-50%, -50%) 
                rotate(${(360 / 12) * i + time * 60}deg) 
                translateX(${70 + Math.sin(time + i) * 20}px)
                translateZ(${Math.cos(time + i) * 15}px)
              `,
              opacity: 0.4 + Math.sin(time * 1.5 + i) * 0.4,
              boxShadow: '0 0 6px rgba(255, 255, 255, 0.8)'
            }}
          />
        ))}
      </div>
      
      {/* Holographic effect overlay */}
      <div 
        className="absolute inset-0 rounded-full pointer-events-none"
        style={{
          background: `linear-gradient(${time * 100}deg, 
            transparent 30%, 
            rgba(255, 255, 255, 0.1) 50%, 
            transparent 70%)`,
          transform: `perspective(1000px) rotateX(${mousePos.y * 10}deg) rotateY(${mousePos.x * 10}deg)`
        }}
      />
    </div>
  );
}

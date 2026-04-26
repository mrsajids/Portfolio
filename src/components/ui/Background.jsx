import React, { useRef, useEffect } from 'react';
import AnimatedBackground3D from './AnimatedBackground3D';
import FloatingShapes from './FloatingShapes';

export default function Background({ mousePos }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = [];
    for (let i = 0; i < 100; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 2 + 1,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        opacity: Math.random() * 0.5 + 0.2
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;
        
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
        
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(147, 51, 234, ${p.opacity})`;
        ctx.fill();
      });

      requestAnimationFrame(animate);
    };
    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <AnimatedBackground3D />
      <FloatingShapes />
      
      {/* Animated Canvas Background */}
      <canvas 
        ref={canvasRef}
        className="fixed inset-0 pointer-events-none z-0"
      />

      {/* Gradient Overlays */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div 
          className="absolute w-[800px] h-[800px] rounded-full opacity-30 blur-3xl"
          style={{
            background: 'radial-gradient(circle, rgba(147,51,234,0.6) 0%, transparent 70%)',
            left: `${50 + mousePos.x * 20}%`,
            top: `${30 + mousePos.y * 20}%`,
            transform: 'translate(-50%, -50%)',
            transition: 'all 0.3s ease-out'
          }}
        />
        <div 
          className="absolute w-[600px] h-[600px] rounded-full opacity-30 blur-3xl"
          style={{
            background: 'radial-gradient(circle, rgba(59,130,246,0.6) 0%, transparent 70%)',
            right: `${30 - mousePos.x * 15}%`,
            bottom: `${40 - mousePos.y * 15}%`,
            transform: 'translate(50%, 50%)',
            transition: 'all 0.3s ease-out'
          }}
        />
      </div>
    </>
  );
}

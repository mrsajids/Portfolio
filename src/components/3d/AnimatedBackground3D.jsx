import React, { useEffect, useRef } from 'react';

export default function AnimatedBackground3D() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Create animated 3D grid
    const createGridLines = () => {
      const gridSize = 20;
      const lineCount = 15;
      
      for (let i = 0; i < lineCount; i++) {
        // Vertical lines
        const vLine = document.createElement('div');
        vLine.className = 'grid-line vertical';
        vLine.style.cssText = `
          position: absolute;
          width: 1px;
          height: 100vh;
          background: linear-gradient(to bottom, transparent, rgba(147, 51, 234, 0.3), transparent);
          left: ${(i / lineCount) * 100}%;
          top: 0;
          transform-origin: center;
          animation: gridPulse ${3 + Math.random() * 4}s ease-in-out infinite;
          animation-delay: ${i * 0.2}s;
        `;
        container.appendChild(vLine);

        // Horizontal lines
        const hLine = document.createElement('div');
        hLine.className = 'grid-line horizontal';
        hLine.style.cssText = `
          position: absolute;
          width: 100vw;
          height: 1px;
          background: linear-gradient(to right, transparent, rgba(59, 130, 246, 0.3), transparent);
          left: 0;
          top: ${(i / lineCount) * 100}%;
          transform-origin: center;
          animation: gridPulse ${3 + Math.random() * 4}s ease-in-out infinite;
          animation-delay: ${i * 0.15}s;
        `;
        container.appendChild(hLine);
      }
    };

    // Create floating orbs
    const createFloatingOrbs = () => {
      for (let i = 0; i < 5; i++) {
        const orb = document.createElement('div');
        orb.className = 'floating-orb';
        orb.style.cssText = `
          position: absolute;
          width: ${Math.random() * 100 + 50}px;
          height: ${Math.random() * 100 + 50}px;
          border-radius: 50%;
          background: radial-gradient(circle at 30% 30%, rgba(147, 51, 234, 0.8), rgba(59, 130, 246, 0.4));
          left: ${Math.random() * 100}%;
          top: ${Math.random() * 100}%;
          filter: blur(20px);
          animation: floatOrb${i} ${15 + Math.random() * 10}s ease-in-out infinite;
          transform-style: preserve-3d;
        `;
        
        // Create unique animation for each orb
        const orbKeyframes = `
          @keyframes floatOrb${i} {
            0%, 100% {
              transform: translate3d(0, 0, 0) scale(1);
              opacity: 0.3;
            }
            25% {
              transform: translate3d(${Math.random() * 200 - 100}px, ${Math.random() * 200 - 100}px, ${Math.random() * 50}px) scale(1.2);
              opacity: 0.6;
            }
            50% {
              transform: translate3d(${Math.random() * 200 - 100}px, ${Math.random() * 200 - 100}px, ${Math.random() * 50}px) scale(0.8);
              opacity: 0.4;
            }
            75% {
              transform: translate3d(${Math.random() * 200 - 100}px, ${Math.random() * 200 - 100}px, ${Math.random() * 50}px) scale(1.1);
              opacity: 0.7;
            }
          }
        `;
        
        const style = document.createElement('style');
        style.textContent = orbKeyframes;
        document.head.appendChild(style);
        
        container.appendChild(orb);
      }
    };

    // Create DNA helix
    const createDNAHelix = () => {
      const helix = document.createElement('div');
      helix.className = 'dna-helix';
      helix.style.cssText = `
        position: absolute;
        right: 10%;
        top: 20%;
        width: 200px;
        height: 400px;
        transform-style: preserve-3d;
        animation: rotateDNA 20s linear infinite;
      `;

      for (let i = 0; i < 20; i++) {
        const strand1 = document.createElement('div');
        const strand2 = document.createElement('div');
        
        strand1.style.cssText = `
          position: absolute;
          width: 8px;
          height: 8px;
          background: rgba(147, 51, 234, 0.8);
          border-radius: 50%;
          top: ${i * 20}px;
          left: ${Math.cos(i * 0.5) * 50 + 50}px;
          animation: pulse 2s ease-in-out infinite;
          animation-delay: ${i * 0.1}s;
          box-shadow: 0 0 20px rgba(147, 51, 234, 0.5);
        `;
        
        strand2.style.cssText = `
          position: absolute;
          width: 8px;
          height: 8px;
          background: rgba(59, 130, 246, 0.8);
          border-radius: 50%;
          top: ${i * 20}px;
          left: ${Math.cos(i * 0.5 + Math.PI) * 50 + 50}px;
          animation: pulse 2s ease-in-out infinite;
          animation-delay: ${i * 0.1 + 1}s;
          box-shadow: 0 0 20px rgba(59, 130, 246, 0.5);
        `;
        
        helix.appendChild(strand1);
        helix.appendChild(strand2);
      }
      
      container.appendChild(helix);
    };

    // Add CSS animations
    const addAnimations = () => {
      const style = document.createElement('style');
      style.textContent = `
        @keyframes gridPulse {
          0%, 100% { opacity: 0.1; transform: scale(1); }
          50% { opacity: 0.4; transform: scale(1.02); }
        }
        
        @keyframes rotateDNA {
          0% { transform: rotateY(0deg) rotateX(0deg); }
          100% { transform: rotateY(360deg) rotateX(360deg); }
        }
        
        @keyframes pulse {
          0%, 100% { transform: scale(1); opacity: 0.8; }
          50% { transform: scale(1.5); opacity: 1; }
        }
      `;
      document.head.appendChild(style);
    };

    addAnimations();
    createGridLines();
    createFloatingOrbs();
    createDNAHelix();

    return () => {
      // Cleanup
      while (container.firstChild) {
        container.removeChild(container.firstChild);
      }
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
      style={{ 
        perspective: '1000px',
        transformStyle: 'preserve-3d'
      }}
    />
  );
}

import React, { useEffect, useRef } from 'react';

export default function FloatingShapes() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Create floating 3D shapes
    const shapes = [];
    const shapeTypes = ['cube', 'pyramid', 'sphere', 'torus'];
    
    for (let i = 0; i < 8; i++) {
      const shape = document.createElement('div');
      const shapeType = shapeTypes[Math.floor(Math.random() * shapeTypes.length)];
      
      shape.className = `floating-shape ${shapeType}`;
      shape.style.cssText = `
        position: absolute;
        width: ${Math.random() * 60 + 40}px;
        height: ${Math.random() * 60 + 40}px;
        left: ${Math.random() * 100}%;
        top: ${Math.random() * 100}%;
        animation: float-${i} ${Math.random() * 10 + 15}s infinite linear;
        transform-style: preserve-3d;
        opacity: 0.1;
      `;
      
      // Create CSS animation keyframes dynamically
      const keyframes = `
        @keyframes float-${i} {
          0% {
            transform: translate3d(0, 0, 0) rotateX(0deg) rotateY(0deg) rotateZ(0deg);
          }
          25% {
            transform: translate3d(${Math.random() * 200 - 100}px, ${Math.random() * 200 - 100}px, ${Math.random() * 100}px) 
                      rotateX(90deg) rotateY(90deg) rotateZ(90deg);
          }
          50% {
            transform: translate3d(${Math.random() * 200 - 100}px, ${Math.random() * 200 - 100}px, ${Math.random() * 100}px) 
                      rotateX(180deg) rotateY(180deg) rotateZ(180deg);
          }
          75% {
            transform: translate3d(${Math.random() * 200 - 100}px, ${Math.random() * 200 - 100}px, ${Math.random() * 100}px) 
                      rotateX(270deg) rotateY(270deg) rotateZ(270deg);
          }
          100% {
            transform: translate3d(0, 0, 0) rotateX(360deg) rotateY(360deg) rotateZ(360deg);
          }
        }
      `;
      
      // Add keyframes to document
      const style = document.createElement('style');
      style.textContent = keyframes;
      document.head.appendChild(style);
      
      container.appendChild(shape);
      shapes.push({ element: shape, style });
    }

    return () => {
      shapes.forEach(({ element, style }) => {
        if (element.parentNode) element.parentNode.removeChild(element);
        if (style.parentNode) style.parentNode.removeChild(style);
      });
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
      style={{ perspective: '1000px' }}
    />
  );
}

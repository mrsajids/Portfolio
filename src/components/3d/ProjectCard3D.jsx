import React, { useState, useRef } from 'react';
import { ExternalLink, Calendar, CheckCircle, GraduationCap, Folder } from 'lucide-react';

export default function ProjectCard3D({ project, index }) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const rotateX = (e.clientY - centerY) / 15;
    const rotateY = (centerX - e.clientX) / 15;
    
    setMousePos({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
    setIsHovered(false);
  };

  return (
    <div 
      ref={cardRef}
      className="group relative w-full h-auto"
      style={{ 
        perspective: '1000px',
        animationDelay: `${index * 200}ms`
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
    >
      <div 
        className="relative w-full h-full transition-all duration-500 transform-gpu"
        // style={{
        //   transformStyle: 'preserve-3d',
        //   transform: `rotateX(${mousePos.x}deg) rotateY(${mousePos.y}deg) ${isHovered ? 'translateZ(10px)' : 'translateZ(0px)'}`
        // }}
      >
        {/* Main Card */}
        <div className="relative rounded-3xl overflow-hidden border border-white/10 group-hover:border-purple-500/50 transition-all duration-500 bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm">
          
          {/* Header with Icon and Period */}
          <div className={`relative p-6 bg-gradient-to-br  flex items-center justify-between`}>
            <div className="flex items-center gap-4">
              <div className="relative">
              <div className="w-16 h-16 mb-6 rounded-2xl bg-gradient-to-br from-cyan-500 to-orange-500 flex items-center justify-center transform group-hover:rotate-6 group-hover:scale-110 transition-all duration-300">
                  <Folder className="w-8 h-8" />
                </div>
                {/* <div className="absolute -inset-2 bg-white/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div> */}
              </div>
              <div>
                <h3 className="text-2xl font-black text-white mb-1">
  {project.title}
</h3>

<h4 className="text-lg font-semibold text-white/90 mb-1">
  {project.subtitle}
</h4>

<h5 className="text-sm text-white/80 mb-2 flex items-center gap-2">
  <GraduationCap className="w-4 h-4" />
  <span className='italic'>{project.role}</span>
</h5>
                <div className="flex items-center gap-2 text-white/80">
                  <Calendar className="w-4 h-4" />
                  <span className="text-sm font-medium">{project.period}</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Content */}
          <div className="p-6 space-y-4">
            <p className="text-gray-300 leading-relaxed">{project.description}</p>
            
            {/* Key Features */}
            <div>
              <h4 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                Key Features
              </h4>
              <ul className="space-y-2">
                {project.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2 text-gray-400">
                    <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Tech Stack */}
            <div>
              <h4 className="text-lg font-bold text-white mb-3">Technologies Used</h4>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, i) => (
                  <span 
                    key={i}
                    className="px-3 py-1.5 bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm rounded-full text-sm font-medium border border-purple-500/30 hover:border-purple-400 transition-all hover:scale-105"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            
            {/* Action Button */}
            {/* <div className="pt-4">
              <button className="group/btn flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full font-bold text-white hover:from-purple-500 hover:to-pink-500 transition-all hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25">
                <span>View Details</span>
                <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
              </button>
            </div> */}
          </div>
        </div>

        {/* Subtle Shadow */}
        <div 
          className="absolute inset-0 rounded-3xl bg-black/30 blur-xl transition-all duration-500 -z-10"
          style={{
            transform: 'translateZ(-5px) scale(0.98)',
            opacity: isHovered ? 0.6 : 0.2
          }}
        />
      </div>
    </div>
  );
}

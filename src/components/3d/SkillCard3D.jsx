import React, { useState } from 'react';

export default function SkillCard3D({ skill, icon: Icon, delay = 0 }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="group relative w-full h-48 cursor-pointer"
      style={{ 
        perspective: '1000px',
        animationDelay: `${delay}ms`
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div 
        className={`
          relative w-full h-full transition-all duration-700 transform-gpu
          ${isHovered ? 'rotate-y-180' : ''}
        `}
        style={{ 
          transformStyle: 'preserve-3d',
          transform: isHovered ? 'rotateY(180deg)' : 'rotateY(0deg)'
        }}
      >
        {/* Front Face */}
        <div 
          className="absolute inset-0 w-full h-full rounded-2xl bg-gradient-to-br from-purple-600/20 to-pink-600/20 
                     border border-white/10 backdrop-blur-sm flex flex-col items-center justify-center
                     group-hover:border-purple-500/50 transition-all duration-300"
          style={{ backfaceVisibility: 'hidden' }}
        >
          <div className="relative mb-4">
            <div className="relative w-16 h-16 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full flex items-center justify-center border border-white/10">
              {skill.icon ? (
                <img src={skill.icon} alt={skill.name} className="w-10 h-10 object-contain" />
              ) : (
                <Icon className="w-8 h-8 text-purple-400" />
              )}
            </div>
          </div>
          <h3 className="text-xl font-bold text-white mb-2">{skill.name}</h3>
          <div className="w-full max-w-32 bg-white/10 rounded-full h-2 overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full transition-all duration-1000 ease-out"
              style={{ width: `${skill.level}%` }}
            />
          </div>
          <span className="text-purple-400 font-bold mt-2">{skill.level}%</span>
        </div>

        {/* Back Face */}
        <div 
          className="absolute inset-0 w-full h-full rounded-2xl bg-gradient-to-br from-cyan-600/20 to-blue-600/20 
                     border border-cyan-500/50 backdrop-blur-sm flex flex-col items-center justify-center p-6"
          style={{ 
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)'
          }}
        >
          <div className="text-center">
            <h4 className="text-lg font-bold text-cyan-400 mb-3">Experience</h4>
            <div className="space-y-2 text-sm text-gray-300">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                <span>{skill.experience || '3+ years'}</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                <span>{skill.projects || '15+ projects'}</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
                <span>{skill.certification || 'Certified'}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

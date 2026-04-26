import React from 'react';
import { Code, Zap, User, Sparkles, Briefcase, Users } from 'lucide-react';
import SkillCard3D from '../SkillCard3D';
import { technicalSkills, professionalSkills } from '../../data/constants';

export default function SkillsSection({ mousePos }) {
  return (
    <section id="skills" className="py-32 px-6 relative z-10">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-6xl md:text-8xl font-black text-center mb-20">
          <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
            SKILLS
          </span>
        </h2>

        {/* Technical Skills */}
        <div className="mb-20">
          <h3 className="text-4xl font-bold mb-12 flex items-center justify-center gap-3">
            <Code className="text-purple-400" />
            Technical Skills
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {technicalSkills.map((skill, idx) => (
              <SkillCard3D
                key={idx}
                skill={{
                  ...skill,
                  experience: `${Math.floor(skill.level / 20) + 1}+ years`,
                  projects: `${Math.floor(skill.level / 5)}+ projects`,
                  certification: skill.level > 90 ? 'Expert' : skill.level > 70 ? 'Advanced' : 'Intermediate'
                }}
                icon={Code}
                delay={idx * 100}
              />
            ))}
          </div>
        </div>

        {/* Professional Skills */}
        <div>
          <h3 className="text-4xl font-bold mb-12 flex items-center justify-center gap-3">
            <Sparkles className="text-pink-400" />
            Professional Skills
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {professionalSkills.map((skill, idx) => (
              <div 
                key={idx}
                className="group relative"
                style={{
                  transform: `perspective(1000px) rotateY(${mousePos.x * 2}deg)`,
                  transition: 'transform 0.1s ease-out'
                }}
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-500"></div>
                <div className="relative bg-gradient-to-br from-gray-900 to-black rounded-2xl p-6 border border-white/10 group-hover:border-white/30 transition-all">
                  <skill.icon className="w-10 h-10 mb-4 text-purple-400 group-hover:scale-110 transition-transform" />
                  <h4 className="font-bold text-lg">{skill.name}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

import React from 'react';
import { Briefcase } from 'lucide-react';
import { experience } from '../../data/constants';

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-32 px-6 relative z-10">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl md:text-7xl font-black mb-16 text-center">
          <span className="bg-gradient-to-r from-orange-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
            EXPERIENCE
          </span>
        </h2>

        <div className="space-y-8">
          {experience.map((exp, idx) => (
            <div 
              key={idx}
              className="group relative"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl blur opacity-0 group-hover:opacity-25 transition duration-500"></div>
              <div className="relative bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-sm rounded-3xl p-8 border border-white/10 group-hover:border-white/30 transition-all">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-black mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 group-hover:bg-clip-text transition-all">
                      {exp.role}
                    </h3>
                    <p className="text-xl text-purple-400 font-semibold mb-2">{exp.company}</p>
                  </div>
                  <div className="flex items-center gap-2 text-gray-400 font-medium">
                    <Briefcase className="w-5 h-5" />
                    {exp.period}
                  </div>
                </div>
                <p className="text-gray-400 mb-6 leading-relaxed">{exp.description}</p>
                <div className="space-y-2">
                  <p className="text-sm font-bold text-purple-400 uppercase tracking-wide mb-3">Key Achievements:</p>
                  {exp.achievements.map((achievement, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 mt-2"></div>
                      <p className="text-gray-300">{achievement}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import React from 'react';
import { GraduationCap, Award } from 'lucide-react';
import { education } from '../../data/constants';

export default function EducationSection() {
  return (
    <section id="education" className="py-32 px-6 relative z-10">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl md:text-7xl font-black mb-16 text-center">
          <span className="bg-gradient-to-r from-green-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
            EDUCATION
          </span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {education.map((edu, idx) => (
            <div 
              key={idx}
              className="group relative"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-3xl blur-lg opacity-25 group-hover:opacity-50 transition duration-500"></div>
              <div className="relative bg-gradient-to-br from-gray-900 to-black rounded-3xl p-8 border border-white/10 group-hover:border-white/30 transition-all h-full">
                <div className="w-16 h-16 mb-6 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  <GraduationCap className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold mb-2">{edu.degree}</h3>
                <p className="text-lg text-cyan-400 font-semibold mb-2">{edu.institution}</p>
                <p className="text-gray-400 font-medium mb-4">{edu.period}</p>
                <div className="inline-block px-4 py-2 bg-white/5 rounded-full mb-6">
                  <span className="text-sm font-bold">GPA: <span className="text-cyan-400">{edu.gpa}</span></span>
                </div>
                <div className="space-y-2">
                  {edu.achievements.map((achievement, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <Award className="w-4 h-4 text-cyan-400 mt-1 flex-shrink-0" />
                      <p className="text-sm text-gray-300">{achievement}</p>
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

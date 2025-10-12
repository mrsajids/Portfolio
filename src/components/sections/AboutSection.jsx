import React from 'react';

export default function AboutSection() {
  return (
    <section id="about" className="py-32 px-6 relative z-10">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl md:text-7xl font-black mb-16 text-center">
          <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
            ABOUT ME
          </span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl blur-2xl opacity-25 group-hover:opacity-50 transition duration-500"></div>
            <div className="relative aspect-square rounded-3xl overflow-hidden border-2 border-white/10">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600 via-pink-600 to-cyan-600 opacity-80"></div>
              <div className="absolute inset-0 flex items-center justify-center text-9xl">👨‍💻</div>
            </div>
          </div>

          <div className="space-y-6">
            <p className="text-xl text-gray-300 leading-relaxed">
              Hi! I'm <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Syed Sajeed</span>, an experienced React Lead with a strong background in building fast and user-friendly web applications. Skilled in React, JavaScript, and TypeScript.
            </p>
            <p className="text-lg text-gray-400 leading-relaxed">
              I lead frontend teams, help design clean and reusable code, and make sure the UI looks great and works well on all devices. I specialize in building scalable frontend architectures for high-traffic applications and have improved website performance by up to 40%.
            </p>
            <p className="text-lg text-gray-400 leading-relaxed">
              I work closely with designers to bring UI/UX designs to life, integrate APIs, handle state management with Redux/Context API, and mentor junior developers while following best practices for code quality and testing.
            </p>

            <div className="flex flex-wrap gap-4 pt-6">
              <div className="px-6 py-3 bg-white/5 rounded-full border border-white/10">
                <span className="text-purple-400 font-bold">2+</span> Years Experience
              </div>
              <div className="px-6 py-3 bg-white/5 rounded-full border border-white/10">
                <span className="text-pink-400 font-bold">40%</span> Performance Improvement
              </div>
              <div className="px-6 py-3 bg-white/5 rounded-full border border-white/10">
                <span className="text-cyan-400 font-bold">React</span> Team Lead
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

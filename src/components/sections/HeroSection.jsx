import React from 'react';
import { ChevronDown, Rocket } from 'lucide-react';
import CodeIcon3D from '../3d/CodeIcon3D';
import { personalData } from '../../data/constants';

export default function HeroSection({ mousePos, scrollY, scrollToSection }) {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center px-6">
      <div className="max-w-6xl mx-auto text-center relative z-20 space-y-8">
        {/* 3D Code Icon */}
        <CodeIcon3D />
        
        <div className="mb-8 space-y-4">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black leading-tight">
            <span className="inline-block animate-gradient bg-gradient-to-r from-purple-400 via-pink-400 via-cyan-400 to-purple-400 bg-[length:200%_auto] bg-clip-text text-transparent">
              SAJEED SYED
            </span>
          </h1>
          <h2 className="text-xl md:text-3xl lg:text-4xl font-bold text-gray-300 leading-tight">
            Full Stack Developer | Frontend Developer | Backend Developer
          </h2>
        </div>
        
        <p className="text-lg md:text-xl text-gray-400 mb-12 font-light tracking-wide max-w-4xl mx-auto leading-relaxed">
          To contribute <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 font-bold">clean, maintainable, and well-tested code</span> in a professional development team, while applying best practices in both frontend and backend development using JavaScript, TypeScript, and modern frameworks.
        </p>
        
        <div className="flex gap-6 justify-center flex-wrap">
          <button 
            onClick={() => window.open(personalData.resumeDriveLink, '_blank')}
            className="group relative px-10 py-4 overflow-hidden rounded-full font-bold text-lg"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 transition-transform group-hover:scale-105"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <span className="relative z-10 flex items-center gap-2">
              View Resume <Rocket className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </button>
          <button 
            onClick={() => scrollToSection('contact')}
            className="group relative px-10 py-4 overflow-hidden rounded-full font-bold text-lg border-2 border-white/20 hover:border-purple-500 transition-all"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <span className="relative z-10">Contact Me</span>
          </button>
        </div>

        <div className="mt-20 animate-bounce">
          <ChevronDown className="w-10 h-10 mx-auto text-purple-400" />
        </div>
      </div>
    </section>
  );
}

import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { menuItems } from '../data/constants';

export default function Navigation({ activeSection, scrollToSection }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-xl bg-black/30 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="relative group cursor-pointer" onClick={() => scrollToSection('home')}>
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-500"></div>
            <div className="relative text-xl font-black tracking-tight">
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                PORTFOLIO
              </span>
            </div>
          </div>
          
          <div className="hidden lg:flex gap-6">
            {menuItems.map((item, idx) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative group px-3 py-2 text-xs font-bold tracking-wide uppercase transition-all ${
                  activeSection === item.id ? 'text-purple-400' : ''
                }`}
                style={{ animationDelay: `${idx * 50}ms` }}
              >
                <span className="relative z-10 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 group-hover:bg-clip-text transition-all duration-300">
                  {item.name}
                </span>
                {activeSection === item.id && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400"></div>
                )}
              </button>
            ))}
          </div>

          <button 
            className="lg:hidden relative z-50"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden backdrop-blur-xl bg-black/95 border-b border-white/10">
          <div className="px-6 py-4 flex flex-col gap-3">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  scrollToSection(item.id);
                  setIsMenuOpen(false);
                }}
                className="text-left hover:text-purple-400 transition-colors font-bold"
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

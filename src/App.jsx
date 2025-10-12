import React, { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import Background from './components/Background';
import HeroSection from './components/sections/HeroSection';
import AboutSection from './components/sections/AboutSection';
import SkillsSection from './components/sections/SkillsSection';
import ExperienceSection from './components/sections/ExperienceSection';
import EducationSection from './components/sections/EducationSection';
import ProjectsSection from './components/sections/ProjectsSection';
import SocialMediaSection from './components/sections/SocialMediaSection';
import ContactSection from './components/sections/ContactSection';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [scrollY, setScrollY] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      
      // Update active section based on scroll
      const sections = ['home', 'about', 'skills', 'experience', 'education', 'projects', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 150 && rect.bottom >= 150;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    const handleMouseMove = (e) => {
      setMousePos({ 
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: -(e.clientY / window.innerHeight) * 2 + 1
      });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden relative">
      <Background mousePos={mousePos} />
      
      <Navigation 
        activeSection={activeSection} 
        scrollToSection={scrollToSection} 
      />
      
      <HeroSection 
        mousePos={mousePos} 
        scrollY={scrollY} 
        scrollToSection={scrollToSection} 
      />
      
      <AboutSection />
      
      <SkillsSection mousePos={mousePos} />
      
      <ExperienceSection />
      
      <EducationSection />
      
      <ProjectsSection />
      
      <SocialMediaSection />
      
      <ContactSection />
    </div>
  );
}

import React from 'react';
import ProjectCard3D from '../ProjectCard3D';
import { projects } from '../../data/constants';

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-32 px-6 relative z-10">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl md:text-7xl font-black mb-16 text-center">
          <span className="bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent">
            REALTIME PROJECTS
          </span>
        </h2>
        
        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <ProjectCard3D 
              key={idx}
              project={project}
              index={idx}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

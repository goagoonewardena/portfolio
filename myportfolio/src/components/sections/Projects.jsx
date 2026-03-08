import React from 'react';
import { projects } from '../../data/projects';
import FadeIn from '../animations/FadeIn';

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-black">
      <div className="max-w-5xl mx-auto px-4">
        <FadeIn delay={0}>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8">Projects</h2>
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map(project => (
            <FadeIn key={project.id} delay={project.id * 100}>
              <div className="bg-white/5 border border-primary/20 rounded-xl p-6 text-white flex flex-col h-full">
                <img src={project.image} alt={project.title} className="rounded-lg mb-4 w-full h-48 object-cover bg-black/20" />
                <h3 className="text-xl font-semibold mb-2 text-primary">{project.title}</h3>
                <p className="text-white/80 mb-2 flex-1">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-2">
                  {project.technologies.map((tech, idx) => (
                    <span key={idx} className="text-xs bg-primary/20 text-primary px-2 py-1 rounded-full">{tech}</span>
                  ))}
                </div>
                <div className="text-xs text-white/60 mb-2">{project.metrics}</div>
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-sm text-primary underline mt-auto">View on GitHub</a>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

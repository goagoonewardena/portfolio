import React from 'react';
import { skills } from '../../data/skills';
import FadeIn from '../animations/FadeIn';

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-black">
      <div className="max-w-5xl mx-auto px-4">
        <FadeIn delay={0}>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8">Skills</h2>
        </FadeIn>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {skills.map(skill => (
            <FadeIn key={skill.id} delay={skill.id * 100}>
              <div className="bg-white/5 border border-primary/20 rounded-xl p-6 text-white">
                <div className="text-lg font-semibold mb-2 flex items-center gap-2">
                  <span>{skill.icon}</span>
                  {skill.name}
                </div>
                <div className="text-sm text-primary mb-1">{skill.level}</div>
                <div className="text-xs text-white/60">{skill.experience}</div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

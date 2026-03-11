import React from 'react';
import { skills } from '../../data/skills';
import FadeIn from '../animations/FadeIn';
import { Shield, Bug, FileCode, Terminal, Search, AlertCircle, Activity, UserCheck, Code2, Palette, Server, GitBranch } from 'lucide-react';

const ICON_MAP = { Shield, Bug, FileCode, Terminal, Search, AlertCircle, Activity, UserCheck, Code2, Palette, Server, GitBranch };
const LEVEL_WIDTH = { Beginner: '35%', Intermediate: '65%', Expert: '92%' };
const LEVEL_COLOR = { Beginner: 'text-yellow-400', Intermediate: 'text-green-300', Expert: 'text-green-400' };

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-transparent">
      <div className="max-w-5xl mx-auto px-4">
        <FadeIn delay={0}>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8">Skills</h2>
        </FadeIn>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {skills.map(skill => {
            const Icon = ICON_MAP[skill.icon];
            return (
              <FadeIn key={skill.id} delay={skill.id * 80}>
                <div
                  className="skill-card group relative bg-white/5 border border-primary/20 rounded-xl p-6 text-white overflow-hidden cursor-default"
                  style={{ '--skill-level': LEVEL_WIDTH[skill.level] || '50%' }}
                >
                  {/* scan line */}
                  <div className="skill-scan" />

                  {/* icon + name */}
                  <div className="text-lg font-semibold mb-2 flex items-center gap-2">
                    {Icon && (
                      <Icon className="w-5 h-5 text-green-400 transition-transform duration-300 group-hover:scale-125 group-hover:drop-shadow-[0_0_6px_#8DFF69]" />
                    )}
                    {skill.name}
                  </div>

                  {/* level badge */}
                  <div className={`text-sm font-mono mb-3 ${LEVEL_COLOR[skill.level] ?? 'text-primary'}`}>
                    {skill.level}
                  </div>

                  {/* progress bar track */}
                  <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-green-400/10 rounded-b-xl overflow-hidden">
                    <div className="skill-bar-fill h-full bg-gradient-to-r from-green-400 to-green-300 rounded-b-xl" />
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;

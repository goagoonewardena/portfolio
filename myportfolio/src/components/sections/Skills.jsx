import React from 'react';
import { skills } from '../../data/skills';
import FadeIn from '../animations/FadeIn';
import { Shield, Bug, FileCode, Terminal, Search, AlertCircle, Activity, UserCheck, Code2, Palette, Server, GitBranch, Zap, Globe } from 'lucide-react';

const ICON_MAP = { Shield, Bug, FileCode, Terminal, Search, AlertCircle, Activity, UserCheck, Code2, Palette, Server, GitBranch, Zap, Globe };
const LEVEL_WIDTH = { Beginner: '35%', Intermediate: '65%', Expert: '92%' };
const LEVEL_COLOR = { Beginner: 'text-yellow-400', Intermediate: 'text-green-300', Expert: 'text-cyan-300' };
const LEVEL_ICON_COLOR = { Beginner: 'text-yellow-400', Intermediate: 'text-green-400', Expert: 'text-cyan-300' };
const LEVEL_ICON_HOVER = {
  Beginner: 'group-hover:drop-shadow-[0_0_6px_#facc1544]',
  Intermediate: 'group-hover:drop-shadow-[0_0_6px_#8DFF6944]',
  Expert: 'group-hover:drop-shadow-[0_0_6px_#67e8f944]',
};

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
            const iconColor = LEVEL_ICON_COLOR[skill.level] ?? 'text-green-400';
            const iconHover = LEVEL_ICON_HOVER[skill.level] ?? 'group-hover:drop-shadow-[0_0_6px_#8DFF6944]';
            return (
              <FadeIn key={skill.id} delay={skill.id * 80}>
                <div
                  className="skill-card group relative h-[200px] bg-white/5 border border-primary/20 rounded-xl p-6 text-white overflow-hidden cursor-default flex flex-col"
                  style={{ '--skill-level': LEVEL_WIDTH[skill.level] || '50%' }}
                >
                  {/* scan line */}
                  <div className="skill-scan" />

                  {/* icon + name */}
                  <div className="text-lg font-semibold mb-2 flex items-center gap-2 leading-tight">
                    {Icon && (
                      <Icon className={`w-5 h-5 transition-transform duration-300 group-hover:scale-125 ${iconColor} ${iconHover}`} />
                    )}
                    {skill.name}
                  </div>

                  <div className="flex-1" />

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

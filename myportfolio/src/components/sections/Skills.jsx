import React from 'react';
import { skills } from '../../data/skills';
import FadeIn from '../animations/FadeIn';
import { Shield, Bug, FileCode, Terminal, Search, AlertCircle, Activity, UserCheck, Code2, Palette, Server, GitBranch } from 'lucide-react';

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-transparent">
      <div className="max-w-5xl mx-auto px-4">
        <FadeIn delay={0}>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8">Skills</h2>
        </FadeIn>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {skills.map(skill => (
            <FadeIn key={skill.id} delay={skill.id * 100}>
              <div className="bg-white/5 border border-primary/20 rounded-xl p-6 text-white">
                <div className="text-lg font-semibold mb-2 flex items-center gap-2">
                  {skill.icon === 'Shield' && <Shield className="w-5 h-5 text-green-400" />}
                  {skill.icon === 'Bug' && <Bug className="w-5 h-5 text-green-400" />}
                  {skill.icon === 'FileCode' && <FileCode className="w-5 h-5 text-green-400" />}
                  {skill.icon === 'Terminal' && <Terminal className="w-5 h-5 text-green-400" />}
                  {skill.icon === 'Search' && <Search className="w-5 h-5 text-green-400" />}
                  {skill.icon === 'AlertCircle' && <AlertCircle className="w-5 h-5 text-green-400" />}
                  {skill.icon === 'Activity' && <Activity className="w-5 h-5 text-green-400" />}
                  {skill.icon === 'UserCheck' && <UserCheck className="w-5 h-5 text-green-400" />}
                  {skill.icon === 'Code2' && <Code2 className="w-5 h-5 text-green-400" />}
                  {skill.icon === 'Palette' && <Palette className="w-5 h-5 text-green-400" />}
                  {skill.icon === 'Server' && <Server className="w-5 h-5 text-green-400" />}
                  {skill.icon === 'GitBranch' && <GitBranch className="w-5 h-5 text-green-400" />}
                  {skill.name}
                </div>
                <div className="text-sm text-primary mb-1">{skill.level}</div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;


import { ChevronDown, Star, ShieldCheck, Lock, Network, Bug, Terminal, Github, Linkedin, Mail } from 'lucide-react';
import { SiReact, SiNextdotjs, SiTailwindcss, SiNodedotjs, SiMongodb } from 'react-icons/si';
import { PERSONAL_INFO, STATS } from '../../utils/constants';
import { scrollToSection } from '../../hooks/useScrollSpy';
import FadeIn from '../animations/FadeIn';
import RadialGradientBackground from '../backgrounds/RadialGradientBackground';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-black">
      {/* Security-themed background: green radial + network grid overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute -top-32 -left-32 w-[600px] h-[600px] bg-green-400/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 w-[700px] h-[700px] bg-green-400/20 rounded-full blur-2xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-green-400/10 rounded-full blur-2xl" />
        {/* Subtle network/circuit grid overlay */}
        <svg className="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 1440 900" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g stroke="#8DFF69" strokeWidth="0.5">
            {Array.from({length: 20}).map((_,i) => (
              <line key={i} x1={i*72} y1="0" x2={i*72} y2="900" />
            ))}
            {Array.from({length: 12}).map((_,i) => (
              <line key={i+20} x1="0" y1={i*75} x2="1440" y2={i*75} />
            ))}
          </g>
        </svg>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="text-left mt-10 md:mt-16">
            <FadeIn delay={0}>
              <div className="inline-flex items-center gap-2.5 px-6 py-2 mb-8 bg-green-400/10 border border-green-400/30 rounded-full">
                <Star className="w-4 h-4 text-green-300 fill-green-300"/>
                <span className="text-xs md:text-sm text-green-200 tracking-[1.2px]">
                  Network Security Intern | Cybersecurity Enthusiast
                </span>
              </div>
            </FadeIn>
            <FadeIn delay={100}>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight flex items-center gap-4 flex-wrap">
                <ShieldCheck className="w-12 h-12 text-green-300 inline-block" />
                Network Security Intern<br />Portfolio
              </h1>
            </FadeIn>
            <FadeIn delay={120}>
              <div className="flex items-center gap-4 mb-4">
                <Lock className="w-6 h-6 text-green-400" />
                <span className="text-green-200 text-lg font-mono tracking-wide">"Securing the digital world, one network at a time."</span>
                <Network className="w-6 h-6 text-green-400" />
              </div>
            </FadeIn>
            <FadeIn delay={300}>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 mb-12 max-w-2xl">
                <div className="text-center">
                  <div className="text-3xl font-extrabold" style={{ color: '#8DFF69' }}>200+</div>
                  <div className="text-lg text-white font-semibold">Code Commits</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-extrabold" style={{ color: '#8DFF69' }}>5+</div>
                  <div className="text-lg text-white font-semibold">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-extrabold" style={{ color: '#8DFF69' }}>15+</div>
                  <div className="text-lg text-white font-semibold">Technologies</div>
                </div>
              </div>
            </FadeIn>
            {/* Stats removed as requested */}
          </div>
          {/* Right Column - Image */}
          <FadeIn delay={200}>
            <div className="relative flex flex-col items-center">
              <div className="relative overflow-hidden rounded-full w-80 h-80 border-2 border-green-400 shadow-xl bg-black/80" style={{ boxShadow: '0 0 32px 4px #8DFF69, 0 0 64px 8px #19391a' }}>
                <img
                  src="/gethmi.jpg"
                  alt="Developer at work"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Technology Logos*/}
              <div className="flex items-center gap-12 bg-black/60 backdrop-blur-sm border border-green-400/20 rounded-full px-6 py-3 mt-8">
                <a href="https://github.com/goagoonewardena" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="w-7 h-7 flex items-center justify-center hover:scale-110 transition-transform duration-300 text-green-300">
                  <Github className="w-full h-full" />
                </a>
                <a href="https://www.linkedin.com/in/oshadhi-goonewardena" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="w-7 h-7 flex items-center justify-center hover:scale-110 transition-transform duration-300 text-green-300">
                  <Linkedin className="w-full h-full" />
                </a>
                <a href="mailto:oshadhigoon@gmail.com" aria-label="Email" className="w-7 h-7 flex items-center justify-center hover:scale-110 transition-transform duration-300 text-green-300">
                  <Mail className="w-full h-full" />
                </a>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
      {/* Scroll Indicator */}
      <button
        onClick={() => scrollToSection('about')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
      >
        <ChevronDown className="w-8 h-8 text-green-300"/>
      </button>
    </section>
  )
}

export default Hero
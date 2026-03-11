
import { ChevronDown, Star, ShieldCheck, Lock, Network, Bug, Terminal, Github, Linkedin, Mail } from 'lucide-react';
import { SiReact, SiNextdotjs, SiTailwindcss, SiNodedotjs, SiMongodb } from 'react-icons/si';
import { PERSONAL_INFO, STATS } from '../../utils/constants';
import { scrollToSection } from '../../hooks/useScrollSpy';
import FadeIn from '../animations/FadeIn';
import RadialGradientBackground from '../backgrounds/RadialGradientBackground';
import AnimatedCounter from '../ui/AnimatedCounter';
import { useState, useEffect } from 'react';

const TYPING_WORDS = [
  'Welcome to my portfolio',
  "I'm a...",
  'Computer Science Undergraduate',
  'Cybersecurity Enthusiast',
];

const useTypewriter = (words, typingSpeed = 70, deletingSpeed = 40, pauseMs = 1800) => {
  const [displayed, setDisplayed] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayed(current.slice(0, displayed.length + 1));
        if (displayed.length + 1 === current.length) {
          setTimeout(() => setIsDeleting(true), pauseMs);
        }
      } else {
        setDisplayed(current.slice(0, displayed.length - 1));
        if (displayed.length - 1 === 0) {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    }, isDeleting ? deletingSpeed : typingSpeed);
    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, wordIndex, words, typingSpeed, deletingSpeed, pauseMs]);

  return displayed;
};

const Hero = () => {
  const typedText = useTypewriter(TYPING_WORDS);

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-black">
      {/* Security-themed background: green radial + network grid overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute -top-32 -left-32 w-[600px] h-[600px] bg-green-400/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 w-[700px] h-[700px] bg-green-400/20 rounded-full blur-2xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-green-400/10 rounded-full blur-2xl" />
        {/* Radar / network scanner overlay */}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1440 900" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Concentric radar rings centered bottom-right */}
          <g stroke="#8DFF69" strokeWidth="0.6" opacity="0.12">
            <circle cx="1200" cy="700" r="150" />
            <circle cx="1200" cy="700" r="300" />
            <circle cx="1200" cy="700" r="450" />
            <circle cx="1200" cy="700" r="600" />
            <circle cx="1200" cy="700" r="750" />
            <circle cx="1200" cy="700" r="900" />
          </g>
          {/* Radial scan lines */}
          <g stroke="#8DFF69" strokeWidth="0.5" opacity="0.08">
            <line x1="1200" y1="700" x2="1200" y2="-200" />
            <line x1="1200" y1="700" x2="2000" y2="700" />
            <line x1="1200" y1="700" x2="500"  y2="-100" />
            <line x1="1200" y1="700" x2="-100" y2="200" />
            <line x1="1200" y1="700" x2="400"  y2="1400" />
          </g>
          {/* Blip dots — detected "hosts" on radar */}
          <circle cx="980"  cy="310" r="3" fill="#8DFF69" opacity="0.55" />
          <circle cx="750"  cy="480" r="2.5" fill="#8DFF69" opacity="0.4" />
          <circle cx="1050" cy="180" r="2" fill="#8DFF69" opacity="0.35" />
          <circle cx="580"  cy="560" r="2.5" fill="#8DFF69" opacity="0.4" />
          <circle cx="870"  cy="620" r="2" fill="#8DFF69" opacity="0.3" />
          <circle cx="1280" cy="250" r="2" fill="#8DFF69" opacity="0.3" />
          {/* Sweep gradient arc (faint) */}
          <path d="M1200 700 L1200 100 A600 600 0 0 1 1724 475 Z" fill="#8DFF69" opacity="0.02" />
        </svg>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="text-left mt-10 md:mt-16">
            <FadeIn delay={0}>
              <div className="relative inline-flex items-center bg-black/50 border border-green-400/30 rounded px-4 py-2 mb-8 overflow-hidden max-w-full">
                {/* scanline sweep */}
                <div className="scanline-sweep" />
                {/* typed text */}
                <span className="text-base md:text-lg font-mono text-green-300 tracking-wide neon-text">
                  {typedText}
                </span>
                {/* block cursor */}
                <span className="block-cursor text-base md:text-lg">█</span>
              </div>
            </FadeIn>
            <FadeIn delay={100}>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                <span className="text-green-300">Hi, I'm</span><br />
                Oshadhi<br />Goonewardena
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
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-12 mb-12 max-w-2xl">
                <div className="text-center">
                  <div className="text-3xl font-extrabold" style={{ color: '#8DFF69' }}>
                    <AnimatedCounter end={200} duration={2200} suffix="+" />
                  </div>
                  <div className="text-lg text-white font-semibold">Code Commits</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-extrabold" style={{ color: '#8DFF69' }}>
                    <AnimatedCounter end={5} duration={1800} suffix="+" />
                  </div>
                  <div className="text-lg text-white font-semibold">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-extrabold" style={{ color: '#8DFF69' }}>
                    <AnimatedCounter end={15} duration={1800} suffix="+" />
                  </div>
                  <div className="text-lg text-white font-semibold">Technologies</div>
                </div>
              </div>
            </FadeIn>
            {/* Stats removed as requested */}
          </div>
          {/* Right Column - Image */}
          <FadeIn delay={200}>
            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl w-full max-w-[240px] sm:max-w-[260px] md:max-w-[280px] lg:max-w-[300px] xl:max-w-[320px] mx-auto" style={{ height: 'auto' }}>
                {/* Spinning conic-gradient border */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div
                    className="w-full h-full rounded-2xl animate-spin-slow"
                    style={{
                      borderRadius: '1rem',
                      border: '4px solid transparent',
                      background: 'conic-gradient(from 90deg at 50% 50%, #8DFF69, #00FFD0, #8DFF69, #00FFD0, #8DFF69)',
                      WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                      WebkitMaskComposite: 'xor',
                      maskComposite: 'exclude',
                      padding: '0.15rem',
                    }}
                  />
                </div>
                <div className="relative rounded-2xl overflow-hidden m-[1px] h-[calc(100%-2px)]">
                  <img
                    src="/gethmi.jpg"
                    alt="Developer at work"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              {/* Social Icons - Separate cards under image */}
              <div className="flex justify-center gap-4 w-full mt-6">
                <a href="https://github.com/goagoonewardena" target="_blank" rel="noopener noreferrer" aria-label="GitHub"
                  className="w-14 h-14 flex items-center justify-center rounded-xl bg-black/60 backdrop-blur-sm border border-green-400/20 text-green-300 hover:border-green-400/60 hover:text-green-300 hover:shadow-[0_0_14px_#8DFF6944] hover:scale-110 transition-all duration-300">
                  <Github className="w-7 h-7" />
                </a>
                <a href="https://www.linkedin.com/in/oshadhi-goonewardena" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"
                  className="w-14 h-14 flex items-center justify-center rounded-xl bg-black/60 backdrop-blur-sm border border-green-400/20 text-green-300 hover:border-green-400/60 hover:text-green-300 hover:shadow-[0_0_14px_#8DFF6944] hover:scale-110 transition-all duration-300">
                  <Linkedin className="w-7 h-7" />
                </a>
                <a href="mailto:oshadhigoon@gmail.com" aria-label="Email"
                  className="w-14 h-14 flex items-center justify-center rounded-xl bg-black/60 backdrop-blur-sm border border-green-400/20 text-green-300 hover:border-green-400/60 hover:text-green-300 hover:shadow-[0_0_14px_#8DFF6944] hover:scale-110 transition-all duration-300">
                  <Mail className="w-7 h-7" />
                </a>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
      {/* Scroll Indicator */}
      <button
        onClick={() => scrollToSection('about')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce z-20"
      >
        <ChevronDown className="w-8 h-8 text-green-300"/>
      </button>
    </section>
  )
}

export default Hero
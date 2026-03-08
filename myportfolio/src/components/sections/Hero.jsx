
import { ChevronDown, Star } from 'lucide-react';
import { SiReact, SiNextdotjs, SiTailwindcss, SiNodedotjs, SiMongodb } from 'react-icons/si';
import { PERSONAL_INFO, STATS } from '../../utils/constants';
import { scrollToSection } from '../../hooks/useScrollSpy';
import FadeIn from '../animations/FadeIn';
import RadialGradientBackground from '../backgrounds/RadialGradientBackground';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-black">
      {/* Abstract green radial background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute -top-32 -left-32 w-[600px] h-[600px] bg-green-400/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 w-[700px] h-[700px] bg-green-400/20 rounded-full blur-2xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-green-400/10 rounded-full blur-2xl" />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="text-left">
            <FadeIn delay={0}>
              <div className="inline-flex items-center gap-2.5 px-6 py-2 mb-8 bg-green-400/10 border border-green-400/30 rounded-full">
                <Star className="w-4 h-4 text-green-300 fill-green-300"/>
                <span className="text-xs md:text-sm text-green-200 tracking-[1.2px]">
                  Network Security Intern | Based in Colombo, Sri Lanka
                </span>
              </div>
            </FadeIn>
            <FadeIn delay={100}>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                Network Security Intern<br />Portfolio
              </h1>
            </FadeIn>
            <FadeIn delay={200}>
              <p className="text-lg text-white/80 max-w-[550px] mb-8">
                Building modern, scalable web applications with React, JavaScript, and cutting-edge technologies. Transforming ideas into exceptional digital experiences.
              </p>
            </FadeIn>
            <FadeIn delay={300}>
              <button
                onClick={() => scrollToSection('contact')} 
                className="inline-flex items-center gap-0 mb-12 group"
              >
                <div className="relative z-10 bg-white text-black rounded-xl px-8 py-4 text-lg font-semibold border border-white shadow hover:bg-primary hover:text-black transition-all">
                  Get in Touch
                </div>
              </button>
            </FadeIn>
            <FadeIn delay={400}>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-10 max-w-full">
                <div className="text-left">
                  <div className="text-2xl font-bold text-green-300 mb-1 font-mono">3+</div>
                  <p className="text-sm text-white/80">Years Experience</p>
                </div>
                <div className="text-left">
                  <div className="text-2xl font-bold text-green-300 mb-1 font-mono">50+</div>
                  <p className="text-sm text-white/80">Projects Completed</p>
                </div>
                <div className="text-left">
                  <div className="text-2xl font-bold text-green-300 mb-1 font-mono">15+</div>
                  <p className="text-sm text-white/80">Technologies</p>
                </div>
                <div className="text-left">
                  <div className="text-2xl font-bold text-green-300 mb-1 font-mono">98%</div>
                  <p className="text-sm text-white/80">Client Satisfaction</p>
                </div>
              </div>
            </FadeIn>
          </div>
          {/* Right Column - Image */}
          <FadeIn delay={200}>
            <div className="relative flex flex-col items-center">
              <div className="relative overflow-hidden rounded-3xl aspect-[4/5] max-w-[400px] ml-auto border-4 border-green-400/30 shadow-lg">
                <img
                  src="/gethmi.jpg"
                  alt="Developer at work"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Technology Logos*/}
              <div className="flex items-center gap-4 bg-black/60 backdrop-blur-sm border border-green-400/20 rounded-full px-6 py-3 mt-8">
                <div className="w-7 h-7 flex items-center justify-center hover:scale-110 transition-transform duration-300">
                  <SiReact className="w-full h-full text-green-300"/>
                </div>
                <div className="w-7 h-7 flex items-center justify-center hover:scale-110 transition-transform duration-300">
                  <SiNextdotjs className="w-full h-full text-green-300"/>
                </div>
                <div className="w-7 h-7 flex items-center justify-center hover:scale-110 transition-transform duration-300">
                  <SiNodedotjs className="w-full h-full text-green-300"/>
                </div>
                <div className="w-7 h-7 flex items-center justify-center hover:scale-110 transition-transform duration-300">
                  <SiTailwindcss className="w-full h-full text-green-300"/>
                </div>
                <div className="w-7 h-7 flex items-center justify-center hover:scale-110 transition-transform duration-300">
                  <SiMongodb className="w-full h-full text-green-300"/>
                </div>
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
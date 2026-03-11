
import { PERSONAL_INFO, ABOUT_STATS } from '../../utils/constants';
import FadeIn from '../animations/FadeIn';
import AnimatedProgressBar from '../ui/AnimatedProgressBar';

const About = () => {
    return (
        <section id="about" className="py-20 bg-transparent">
            <div className="max-w-4xl mx-auto px-4">
                <FadeIn delay={0}>
                    <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">About Me</h2>
                </FadeIn>
                <FadeIn delay={100}>
                    <div className="text-lg text-white/80 mb-6">
                        {PERSONAL_INFO.bio.map((line, idx) => (
                            <p key={idx} className="mb-2">{line}</p>
                        ))}
                    </div>
                </FadeIn>
                                <FadeIn delay={200}>
                                    <div className="flex flex-row gap-10 mb-6 justify-between items-start mt-16">
                                        {/* Education Card 1 */}
                                        <div className="bg-black/70 border border-green-400/40 rounded-3xl p-6 shadow-[0_0_24px_2px_#8DFF69] h-[260px] w-[320px] flex flex-col justify-between">
                                            <div className="mb-2">
                                                <div className="text-lg font-semibold text-white">Informatics Institute of Technology</div>
                                                <div className="text-base text-white/80">BSc (Hons) in Computer Science</div>
                                                <div className="text-sm text-white/60 mt-1">2024 - Present</div>
                                            </div>
                                            {/* Animated Progress Bar */}
                                            <AnimatedProgressBar percent={70} duration={1200} />
                                        </div>
                                        {/* Education Card 2 */}
                                        <div className="bg-black/70 border border-green-400/40 rounded-3xl p-6 shadow-[0_0_24px_2px_#8DFF69] h-[260px] w-[320px] flex flex-col justify-between">
                                            <div className="mb-2">
                                                <div className="text-lg font-semibold text-white">St. Bridget's Convent</div>
                                                <div className="text-base text-white/80">A/L's Biological Science Stream</div>
                                                <div className="text-sm text-white/60 mt-1">2009 - 2022</div>
                                            </div>
                                            {/* Animated Progress Bar */}
                                            <AnimatedProgressBar percent={100} duration={1200} />
                                        </div>
                                           {/* Education Card 3 */}
                                           <div className="bg-black/70 border border-green-400/40 rounded-3xl p-6 shadow-[0_0_24px_2px_#8DFF69] h-[260px] w-[320px] flex flex-col justify-between">
                                               <div className="mb-2">
                                                   <div className="text-lg font-semibold text-white">Esoft Metro Campus</div>
                                                   <div className="text-base text-white/80">Diploma in Information Technology</div>
                                                   <div className="text-sm text-white/60 mt-1">2024 - 2025</div>
                                               </div>
                                               {/* Animated Progress Bar */}
                                               <AnimatedProgressBar percent={100} duration={1200} />
                                           </div>
                                    </div>
                                </FadeIn>
                {/* Stats removed as requested */}
            </div>
        </section>
    );
};

export default About;
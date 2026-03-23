
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
                                    <div className="flex flex-col gap-8 mb-6 items-center mt-16">
                                        {/* Education Card 1 */}
                                        <div className="bg-black/70 border border-green-400/40 rounded-[2.5rem] p-6 shadow-[0_0_24px_2px_#8DFF69] h-[260px] w-full max-w-2xl flex flex-col items-start justify-center transition-all duration-300 hover:shadow-[0_0_36px_4px_#8DFF69] hover:border-green-400">
                                            <div className="mb-6">
                                                <div className="text-lg font-semibold text-white">Informatics Institute of Technology</div>
                                                <div className="text-base text-white/80">BSc (Hons) in Computer Science</div>
                                                <div className="text-sm text-white/60 mt-1">2024 - Present</div>
                                            </div>
                                            <div className="w-full flex-1 flex items-center">
                                                <AnimatedProgressBar percent={70} duration={1200} />
                                            </div>
                                        </div>
                                        {/* Education Card 2 */}
                                        <div className="bg-black/70 border border-green-400/40 rounded-[2.5rem] p-6 shadow-[0_0_24px_2px_#8DFF69] h-[260px] w-full max-w-2xl flex flex-col items-start justify-center transition-all duration-300 hover:shadow-[0_0_36px_4px_#8DFF69] hover:border-green-400">
                                            <div className="mb-6">
                                                <div className="text-lg font-semibold text-white">St. Bridget's Convent</div>
                                                <div className="text-base text-white/80">A/L's Biological Science Stream</div>
                                                <div className="text-sm text-white/60 mt-1">2009 - 2022</div>
                                            </div>
                                            <div className="w-full flex-1 flex items-center">
                                                <AnimatedProgressBar percent={100} duration={1200} />
                                            </div>
                                        </div>
                                        {/* Education Card 3 */}
                                        <div className="bg-black/70 border border-green-400/40 rounded-[2.5rem] p-6 shadow-[0_0_24px_2px_#8DFF69] h-[260px] w-full max-w-2xl flex flex-col items-start justify-center transition-all duration-300 hover:shadow-[0_0_36px_4px_#8DFF69] hover:border-green-400">
                                            <div className="mb-6">
                                                <div className="text-lg font-semibold text-white">Esoft Metro Campus</div>
                                                <div className="text-base text-white/80">Diploma in Information Technology</div>
                                                <div className="text-sm text-white/60 mt-1">2024 - 2025</div>
                                            </div>
                                            <div className="w-full flex-1 flex items-center">
                                                <AnimatedProgressBar percent={100} duration={1200} />
                                            </div>
                                        </div>
                                    </div>
                                </FadeIn>
                {/* Stats removed as requested */}
            </div>
        </section>
    );
};

export default About;
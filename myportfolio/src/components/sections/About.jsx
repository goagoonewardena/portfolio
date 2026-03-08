
import { PERSONAL_INFO, ABOUT_STATS } from '../../utils/constants';
import FadeIn from '../animations/FadeIn';

const About = () => {
    return (
        <section id="about" className="py-20 bg-black">
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
                    <div className="flex flex-wrap gap-8 mb-6">
                        <div className="bg-white/5 border border-primary/20 rounded-xl p-6 min-w-[180px]">
                            <div className="text-base text-primary font-semibold mb-1">Name</div>
                            <div className="text-white">{PERSONAL_INFO.name}</div>
                        </div>
                        <div className="bg-white/5 border border-primary/20 rounded-xl p-6 min-w-[180px]">
                            <div className="text-base text-primary font-semibold mb-1">Location</div>
                            <div className="text-white">{PERSONAL_INFO.location}</div>
                        </div>
                        <div className="bg-white/5 border border-primary/20 rounded-xl p-6 min-w-[180px]">
                            <div className="text-base text-primary font-semibold mb-1">Email</div>
                            <div className="text-white">{PERSONAL_INFO.email}</div>
                        </div>
                    </div>
                </FadeIn>
                <FadeIn delay={300}>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                        {ABOUT_STATS.map((stat, idx) => (
                            <div key={idx} className="text-center">
                                <div className="text-2xl font-bold text-primary mb-1">{stat.value}</div>
                                <div className="text-sm text-white/70">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </FadeIn>
            </div>
        </section>
    );
};

export default About;
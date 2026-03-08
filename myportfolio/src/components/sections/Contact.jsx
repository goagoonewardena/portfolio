import React from 'react';
import { Mail, Linkedin } from 'lucide-react';
import { PERSONAL_INFO, SOCIAL_LINKS } from '../../utils/constants';

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-black">
      <div className="max-w-3xl mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Contact Me</h2>
        <p className="text-lg text-white/80 mb-10">
          I am currently looking for new opportunities.<br />
          Feel free to reach out if you’d like to discuss working together.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-8">
          {/* Email Button */}
          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            className="flex flex-col items-center justify-center px-10 py-6 bg-primary text-white font-semibold rounded-none text-lg border border-transparent hover:bg-primary/90 transition-all min-w-[180px] min-h-[90px] shadow-none"
            style={{ textDecoration: 'none' }}
          >
            <Mail className="w-7 h-7 mb-1" />
            <span className="text-lg font-semibold">Email Me</span>
          </a>
          {/* LinkedIn Button */}
          <a
            href={SOCIAL_LINKS.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center px-10 py-6 border border-primary text-primary font-semibold rounded-none text-lg hover:bg-primary/5 hover:text-primary transition-all min-w-[220px] min-h-[90px] shadow-none"
            style={{ textDecoration: 'none' }}
          >
            <Linkedin className="w-7 h-7 mb-1" />
            <span className="text-lg font-semibold">Connect on LinkedIn</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;

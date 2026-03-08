import React, { useState } from 'react';
import FadeIn from '../animations/FadeIn';
import { PERSONAL_INFO } from '../../utils/constants';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // Here you would typically send the form data to your backend or email service
  };

  return (
    <section id="contact" className="py-20 bg-black">
      <div className="max-w-2xl mx-auto px-4">
        <FadeIn delay={0}>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8">Contact Me</h2>
        </FadeIn>
        <FadeIn delay={100}>
          <p className="text-white/80 mb-8">Feel free to reach out for collaborations, project inquiries, or just to say hello!</p>
        </FadeIn>
        <FadeIn delay={200}>
          <form onSubmit={handleSubmit} className="space-y-6 bg-white/5 border border-primary/20 rounded-xl p-8">
            <div>
              <label className="block text-white mb-2" htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded-lg bg-black/60 border border-primary/30 text-white focus:outline-none focus:border-primary"
              />
            </div>
            <div>
              <label className="block text-white mb-2" htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded-lg bg-black/60 border border-primary/30 text-white focus:outline-none focus:border-primary"
              />
            </div>
            <div>
              <label className="block text-white mb-2" htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-2 rounded-lg bg-black/60 border border-primary/30 text-white focus:outline-none focus:border-primary"
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-primary text-black font-semibold rounded-lg hover:bg-primary/80 transition-all"
              disabled={submitted}
            >
              {submitted ? 'Message Sent!' : 'Send Message'}
            </button>
          </form>
        </FadeIn>
        <FadeIn delay={300}>
          <div className="mt-8 text-center text-white/70">
            Or email me directly at <a href={`mailto:${PERSONAL_INFO.email}`} className="text-primary underline">{PERSONAL_INFO.email}</a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default Contact;

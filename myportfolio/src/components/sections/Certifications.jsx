import React from 'react';
import FadeIn from '../animations/FadeIn';

// Example certifications data
const certifications = [
  {
    id: 1,
    title: 'Foundations of Cybersecurity',
    issuer: 'Coursera',
    date: '2025',
    image: '/images/certifications/Coursera_image.jpg',
  },
  {
    id: 2,
    title: 'Networking Basics',
    issuer: 'Cisco',
    date: '2025',
    image: '/images/certifications/Cisco.png',
  },
  {
    id: 3,
    title: 'Linux For Absolute Beginners',
    issuer: 'KodeKloud',
    date: '2026',
    image: '/images/certifications/kodekloud.jpg',
  },
  {
    id: 4,
    title: 'Innovate with Ballerina Coding Challenge',
    issuer: 'WSO2',
    date: '2025',
    image: '/images/certifications/WSO2_Certificate.jpg',
  },
  {
    id: 5,
    title: 'Level 3 Diploma in information Technology',
    issuer: 'Esoft Metro Campus',
    date: '2025',
    image: '/images/certifications/Esoft_certificate.jpg',
  },
  {
    id: 6,
    title: 'Postman API Fundamentals Student Expert',
    issuer: 'Postman',
    date: '2025',
    image: '/images/certifications/PostmanAPI_Certificate.jpg',
  },
  {
    id: 7,
    title: 'Python for Beginners',
    issuer: 'University of Moratuwa',
    date: '2024',
    image: '/images/certifications/python_moratuwa.jpg',
  }
];

const Certifications = () => {
  return (
    <section id="certifications" className="py-20 bg-transparent">
      <div className="max-w-5xl mx-auto px-4">
        <FadeIn delay={0}>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8">Certifications</h2>
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certifications.map(cert => (
            <FadeIn key={cert.id} delay={cert.id * 100}>
              <div className="bg-white/5 border border-primary/20 rounded-xl p-4 text-white flex flex-col items-center">
                {cert.image && (
                  <img src={cert.image} alt={cert.title + ' badge'} className="rounded-lg mb-4 w-full object-contain" style={{ maxHeight: '220px' }} />
                )}
                <h3 className="text-xl font-semibold mb-2 text-primary text-center">{cert.title}</h3>
                <div className="text-white/80 mb-1 text-center">{cert.issuer}</div>
                <div className="text-xs text-white/60 mb-2 text-center">Issued: {cert.date}</div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;

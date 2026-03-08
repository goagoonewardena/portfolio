import React from 'react';



const Footer = () => {
  return (
    <footer className="w-full bg-[#19391a] text-neutral-300 py-6 border-t border-neutral-800">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-6 gap-6">
        {/* Left: Name and Title */}
        <div className="flex flex-col items-start">
          <span className="text-xl font-semibold text-white">Oshadhi Goonewardena</span>
          <span className="text-base text-neutral-400 mt-1">Network Security Intern</span>
        </div>
        {/* Center: Social Icons */}
        <div className="flex gap-6">
          <a href="https://github.com/goagoonewardena" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-emerald-400 transition-colors">
            {/* GitHub outlined icon */}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
              <circle cx="12" cy="12" r="11" stroke="currentColor" strokeWidth="1.5" fill="none"/>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.5 20.5V18.5C15.5 17.67 15.17 17.09 14.5 16.5C16 16.33 17.5 15.83 17.5 13.5C17.5 12.83 17.23 12.33 16.75 11.92C16.82 11.72 17 11.09 16.68 10.17C16.68 10.17 16.18 10 15.5 10.5C15.06 10.37 14.56 10.31 14 10.31C13.44 10.31 12.94 10.37 12.5 10.5C11.82 10 11.32 10.17 11.32 10.17C11 11.09 11.18 11.72 11.25 11.92C10.77 12.33 10.5 12.83 10.5 13.5C10.5 15.83 12 16.33 13.5 16.5C12.83 17.09 12.5 17.67 12.5 18.5V20.5"/>
              <circle cx="9.5" cy="13" r=".5" fill="currentColor"/>
              <circle cx="14.5" cy="13" r=".5" fill="currentColor"/>
            </svg>
          </a>
          <a href="https://www.linkedin.com/in/oshadhi-goonewardena" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-emerald-400 transition-colors">
            {/* LinkedIn outlined icon */}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
              <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="1.5" fill="none"/>
              <path d="M7.75 17V10.75M7.75 7.75V7.76M12 17V13.25C12 12.0074 13.0074 11 14.25 11C15.4926 11 16.5 12.0074 16.5 13.25V17M9.5 7.75C9.5 8.44036 8.94036 9 8.25 9C7.55964 9 7 8.44036 7 7.75C7 7.05964 7.55964 6.5 8.25 6.5C8.94036 6.5 9.5 7.05964 9.5 7.75Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
          <a href="mailto:your.email@example.com" aria-label="Email" className="hover:text-emerald-400 transition-colors">
            {/* Email outlined icon */}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
              <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.5" fill="none"/>
              <path d="M3 7l9 6 9-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
        {/* Right: Copyright */}
        <div className="text-base text-neutral-400 font-medium">
          © {new Date().getFullYear()} All Rights Reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;
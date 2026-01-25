"use client";
import React from 'react';

const socials = [
  { href: 'https://github.com/orionlynn', label: 'GitHub', icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.53-1.34-1.3-1.7-1.3-1.7-1.06-.73.08-.72.08-.72 1.17.08 1.79 1.2 1.79 1.2 1.04 1.78 2.73 1.27 3.4.97.11-.75.41-1.27.74-1.56-2.56-.29-5.26-1.28-5.26-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .98-.31 3.2 1.18a11.1 11.1 0 0 1 2.92-.39c.99 0 1.99.13 2.92.39 2.22-1.49 3.2-1.18 3.2-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.43-2.7 5.41-5.27 5.7.42.36.79 1.09.79 2.2 0 1.59-.01 2.87-.01 3.26 0 .31.21.68.8.56C20.71 21.39 24 17.08 24 12c0-6.27-5.23-11.5-12-11.5z"/></svg>
    )
  },
  { href: 'https://linkedin.com/in/orionlynn', label: 'LinkedIn', icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.29c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm15.5 10.29h-3v-4.5c0-1.08-.02-2.47-1.5-2.47-1.5 0-1.73 1.17-1.73 2.39v4.58h-3v-9h2.89v1.23h.04c.4-.75 1.38-1.54 2.85-1.54 3.05 0 3.61 2.01 3.61 4.62v4.69z"/></svg>
    )
  },
  { href: 'mailto:orion@example.com', label: 'Email', icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 13.065l-8-6.065v12h16v-12l-8 6.065zm8-8.065h-16c-1.104 0-2 .896-2 2v.217l10 7.583 10-7.583v-.217c0-1.104-.896-2-2-2z"/></svg>
    )
  }
];

const Footer = () => {
  return (
    <footer className="w-full  py-10 px-4 mt-16  border-orange-200 dark:border-orange-900/40">
      <div className="max-w-6xl mx-auto flex flex-col gap-8 md:gap-0 md:flex-row items-center justify-between">
        {/* Left: Tagline and copyright */}
        <div className="flex flex-col items-center md:items-start gap-2">
          <span className="text-xl font-extrabold tracking-tight text-orange-700 dark:text-orange-300">Orion Lynn</span>
          <span className="text-md text-dark font-bold">Building creative digital experiences</span>
          <span className="text-xs mt-1 text-orange-700 dark:text-orange-300">&copy; {new Date().getFullYear()} All Rights Reserved</span>
        </div>
        {/* Center: Socials */}
        <div className="flex gap-4 mt-4 md:mt-0">
          {socials.map(({ href, label, icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="rounded-full bg-white/60 dark:bg-dark/60 backdrop-blur-md border border-orange-200 dark:border-orange-800 hover:bg-orange-500 hover:text-white dark:hover:bg-orange-600 transition p-3 shadow-lg"
            >
              {icon}
            </a>
          ))}
        </div>
        {/* Right: Back to Top */}
        <div className="mt-6 md:mt-0">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-2 px-5 py-2 bg-orange-500/90 text-white rounded-full font-semibold shadow-lg hover:bg-orange-600 transition border border-orange-200 dark:border-orange-800"
            aria-label="Back to top"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7"/>
            </svg>
            Top
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
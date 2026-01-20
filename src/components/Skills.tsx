'use client';
import { motion, useScroll, Variants } from 'framer-motion';
import React, { useRef } from 'react';

interface Skill {
  title: string;
  tags: string[];
}

const skills: Skill[] = [
  { title: 'Backend Development', tags: ['Node.js', 'MySQL', 'PostgreSQL', 'REST APIs'] },
  { title: 'Cloud & DevOps', tags: ['AWS ( SAA-C03 certified )', 'Kubernetes', 'CI/CD', 'Docker', 'Linux'] },
  { title: 'Frontend Development', tags: ['Next.js', 'Tailwind', 'Responsive UX', 'React', 'framer-motion', 'TypeScript'] },
  { title: 'Shopify/ Wix', tags: ['Liquid', 'Theme Customization', 'E-commerce'] },
];

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.4,
      duration: 0.8,
      ease: 'easeOut',
    },
  }),
};

export default function Skills() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  return (
    <div ref={containerRef} className="relative mx-auto max-w-6xl px-6 py-16 my-16">
      {/* Section Title */}
      <h2 className="-translate-y-16 text-center text-6xl font-bold text-dark">
        My Skills
      </h2>

      {/* Timeline line */}
      <motion.div 
        style={{ scaleY: scrollYProgress }} 
        className="absolute left-1/2 top-32 h-[calc(100%-8rem)] w-1 -translate-x-1/2 origin-top bg-dark shadow-[0_0_10px_2px_rgba(27,27,27,0.5)]"
      />

      <div className="space-y-16">
        {skills.map((skill, i) => (
          <motion.div
            key={skill.title}
            className={`relative flex ${
              i % 2 === 0 ? 'justify-start' : 'justify-end'
            }`}
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={cardVariants}
          >
            {/* Dot on timeline */}
            <div className="absolute left-1/2 top-6 h-5 w-5 -translate-x-1/2 rounded-full border-4 border-light bg-dark shadow-[0_0_15px_4px_rgba(27,27,27,0.5)] z-10" />

            {/* Card */}
            <div
              className={`w-[45%] ${
                i % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'
              }`}
            >
              {/* Gradient Card with Glassmorphism */}
              <div className={`rounded-2xl border border-light/40 bg-gradient-to-br from-light to-orange-600 backdrop-blur-lg p-6 shadow-lg hover:shadow-[0_0_25px_6px_rgba(234,88,12,0.3)] hover:scale-[1.02] transition-all duration-300`}>
                <h3 className="text-xl font-bold text-dark">
                  {skill.title}
                </h3>
                <ul
                  className={`mt-4 flex flex-wrap gap-2 ${
                    i % 2 === 0 ? 'justify-end' : 'justify-start'
                  }`}
                >
                  {skill.tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-full bg-light/70 backdrop-blur-sm px-3 py-1 text-sm font-medium text-dark border border-light/40 hover:bg-dark hover:text-light transition-colors duration-200"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

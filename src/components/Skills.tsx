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
  { title: 'Frontend Development', tags: ['Next.js', 'Tailwind', 'Responsive UI', 'React', 'framer-motion', 'TypeScript'] },
  { title: 'Shopify/ Wix', tags: ['Liquid', 'Theme Customization', 'E-commerce'] },
];

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.4,
      ease: 'easeInOut',
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
    <div ref={containerRef} className="relative mx-auto max-w-full sm:max-w-2xl md:max-w-3xl lg:max-w-6xl px-2 sm:px-4 md:px-6 py-8 sm:py-12 md:py-16 lg:py-16 my-8 sm:my-12 md:my-16 lg:my-16">
  
      <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-dark text-center mb-8 sm:mb-10 md:mb-12 lg:-translate-y-16">
        My Skills
      </h2>

    
      <motion.div 
        style={{ scaleY: scrollYProgress }} 
        className="hidden lg:block absolute left-1/2 top-32 h-[calc(100%-8rem)] w-1 -translate-x-1/2 origin-top bg-dark shadow-[0_0_10px_2px_rgba(27,27,27,0.5)]"
      />

      <div className="flex flex-col gap-8 sm:gap-10 md:gap-12 lg:space-y-16">
        {skills.map((skill, i) => (
          <motion.div
            key={skill.title}
            className={`
              relative flex flex-col 
              lg:flex-row 
              ${i % 2 === 0 ? 'lg:justify-start' : 'lg:justify-end'}
            `}
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={cardVariants}
          >
     
            <div className="hidden lg:block absolute left-1/2 top-6 h-5 w-5 -translate-x-1/2 rounded-full border-4 border-light bg-dark shadow-[0_0_15px_4px_rgba(27,27,27,0.5)] z-10" />

           
            <div
              className={`
                w-full 
                lg:w-[45%] 
                ${i % 2 === 0 ? 'lg:pr-8 lg:text-right' : 'lg:pl-8 lg:text-left'}
              `}
            >
             
              <div className="rounded-2xl border border-light/40 bg-gradient-to-br from-light to-gray/40 backdrop-blur-lg p-4 sm:p-5 md:p-6 lg:p-6 shadow-lg hover:shadow-[0_0_25px_6px_rgba(255,255,255,0.3)] hover:scale-[1.02] transition-all duration-300">
                <h3 className="text-lg sm:text-xl font-bold text-dark">
                  {skill.title}
                </h3>
                <ul
                  className={`
                    mt-3 sm:mt-4 flex flex-wrap gap-2 
                    ${i % 2 === 0 ? 'lg:justify-end' : 'lg:justify-start'}
                  `}
                >
                  {skill.tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-full bg-white/20 backdrop-blur-sm px-2 sm:px-3 py-1 text-xs sm:text-sm font-medium text-dark border border-light/40 hover:bg-dark hover:text-light transition-colors duration-200"
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

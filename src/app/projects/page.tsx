"use client";
import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import AnimatedText from '@/src/components/AnimatedText';
import ProjectCard from '@/src/components/ProjectCard';

// Project data
const projects = [
    {
        type: "Aesthetic Medical Clinic",
        title: "Eleva Clinic",
        summary: "Eleva Clinic is a cutting-edge medical aesthetics clinic. I took part in developing their website to enhance their online presence and provide information about their services.",
        img: "/images/eleva.png",
        link: "https://www.elevaclinic.com",
        github: "https://github.com/Sprouting-Tech/eleva-clinic",
        featured: true,
    },
    {
        type: "Three JS",
        title: "Crossy Road Car Game",
        img: "/images/cargame.png",
        link: "https://github.com/OrionLynn19/Car-game-with-three.js",
        github: "https://github.com/OrionLynn19/Car-game-with-three.js",
        featured: false,
    },
    {
        type: "Restaurant",
        title: "Bon Appetit",
        img: "/images/restaurant.png",
        link: "https://github.com/OrionLynn19/restaurant-bon-appetit",
        github: "https://github.com/OrionLynn19/restaurant-bon-appetit",
        featured: false,
    },
    {
        type: "Luxury Hotel",
        title: "Ananya Hotel and Resort",
        summary: "I took part in developing responsive glassmorphism UI and helped in writing Room API and DB helper functions.",
        img: "/images/hotel_3.png",
        link: "https://github.com/OrionLynn19/ananya_hotel",
        github: "https://github.com/OrionLynn19/ananya_hotel",
        featured: true,
    },
    {
        type: "Shopify E-commerce",
        title: "Jewelry Shop",
        img: "/images/shopify.png",
        link: "https://www.trinketco.com/",
        github: "https://www.trinketco.com/",
        featured: false,
    },
    {
        type: "Simple Project",
        title: "ToDo App",
        img: "/images/todolist.png",
        link: "https://github.com/aungthedev/team-todo-list",
        github: "https://github.com/aungthedev/team-todo-list",
        featured: false,
    },
];

// Parallax floating shapes component
const ParallaxShapes = () => {
    const { scrollYProgress } = useScroll();
    
    const y1 = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);
    const y2 = useTransform(scrollYProgress, [0, 1], ['0%', '60%']);
    const y3 = useTransform(scrollYProgress, [0, 1], ['0%', '40%']);
    const rotate1 = useTransform(scrollYProgress, [0, 1], [0, 360]);
    const rotate2 = useTransform(scrollYProgress, [0, 1], [0, -180]);

    return (
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
            {/* Large gradient orb - top right */}
            <motion.div
                className="absolute w-[700px] h-[700px] rounded-full"
                style={{
                    background: 'radial-gradient(circle, rgba(255, 255, 255, 0.15) 4%, transparent 90%)',
                    top: '-15%',
                    right: '-10%',
                    y: y1,
                }}
            />
            
            {/* Medium gradient orb - bottom left */}
            <motion.div
                className="absolute w-[500px] h-[500px] rounded-full"
                style={{
                    background: 'radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, transparent 70%)',
                    bottom: '10%',
                    left: '-10%',
                    y: y2,
                }}
            />

            {/* Floating square */}
            <motion.div
                className="absolute w-30 h-30 rounded-lg"
                style={{
                    top: '25%',
                    left: '8%',
                    y: y3,
                    rotate: rotate1,
                    border: '2px solid rgba(255, 255, 255, 0.5)',
                }}
            />

            {/* Floating circle */}
            <motion.div
                className="absolute w-20 h-20 rounded-full"
                style={{
                    top: '55%',
                    right: '12%',
                    y: y2,
                    rotate: rotate2,
                    border: '2px solid rgba(255, 255, 255, 0.4)',
                }}
            />

            {/* Small decorative dots */}
            {[...Array(8)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute w-2 h-2 rounded-full"
                    style={{
                        backgroundColor: 'rgba(255, 255, 255, 0.8)',
                        top: `${10 + i * 12}%`,
                        left: `${85 + (i % 3) * 4}%`,
                        y: useTransform(scrollYProgress, [0, 1], ['0%', `${30 + i * 15}%`]),
                    }}
                />
            ))}

            {/* Diagonal lines */}
            <motion.div
                className="absolute w-px h-40"
                style={{
                    background: 'linear-gradient(to bottom, transparent, rgba(255, 255, 255, 0.5), transparent)',
                    top: '35%',
                    right: '25%',
                    rotate: 45,
                    y: y3,
                }}
            />
        </div>
    );
};

// Page header with enhanced animations
const PageHeader = () => {
    return (
        <motion.div className="relative pt-16 sm:pt-20 md:pt-24 pb-8 text-center">
            {/* Background glow behind title */}
            <motion.div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-32 rounded-full blur-xl"
                style={{
                    background: 'radial-gradient(ellipse, rgba(255, 255, 255, 1) 1%, transparent 70%)',
                }}
                animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.5, 0.7, 0.5],
                }}
                transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: 'easeInOut',
                }}
            />
            
            <AnimatedText
                text="My Projects"
                className="relative z-10"
            />
            
            {/* Animated subtitle */}
            <motion.p
                className="mt-4 text-ligh text-lg max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
            >
                A collection of work showcasing my journey in web development
            </motion.p>

            {/* Animated scroll indicator */}
            <motion.div
                className="mt-12 flex flex-col items-center gap-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
            >
                <motion.span
                    className="text-dark text-sm tracking-widest uppercase"
                    animate={{ opacity: [0.4, 0.8, 0.4] }}
                    transition={{ duration: 2, repeat: Infinity }}
                >
                    Scroll to explore
                </motion.span>
                <motion.div
                    className="w-6 h-10 rounded-full border-2 border-dark/20 flex justify-center pt-2"
                    animate={{ y: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                >
                    <motion.div
                        className="w-1.5 h-1.5 rounded-full bg-white font-bold"
                        animate={{ y: [0, 12, 0], opacity: [1, 0, 1] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                    />
                </motion.div>
            </motion.div>
        </motion.div>
    );
};

const Projects = () => {
    return (
        <main className="relative min-h-screen w-full  overflow-hidden">
            {/* Parallax background shapes */}
            <ParallaxShapes />
            
            {/* Main content */}
            <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-8 md:px-12 lg:px-16">
                <PageHeader />
                
                {/* Projects grid */}
                <motion.div
                    className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 pb-20"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                >
                    {projects.map((project, index) => (
                        <ProjectCard
                            key={project.title}
                            type={project.type}
                            title={project.title}
                            summary={project.summary}
                            img={project.img}
                            link={project.link}
                            github={project.github}
                            index={index}
                            featured={project.featured}
                        />
                    ))}
                </motion.div>

                {/* Footer CTA section */}
                <motion.div
                    className="relative py-16 text-center"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.8 }}
                >
                    <motion.div
                        className="absolute inset-0 mx-auto w-full max-w-xl h-40 rounded-full blur-3xl"
                        style={{
                            background: 'radial-gradient(ellipse, rgba(251, 146, 60, 0.1) 0%, transparent 70%)',
                        }}
                    />
                    
                    <h3 className="relative text-2xl sm:text-3xl font-bold text-dark mb-4">
                        Interested in working together?
                    </h3>
                    <p className="relative text-dark mb-8 max-w-md mx-auto">
                        I&apos;m always open to discussing new projects and creative ideas.
                    </p>
                    
                    <motion.a
                        href="/contact"
                        className="relative inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-dark
                            bg-gradient-to-r from-dark/60 to-dark/20 
                            hover:bg-dark/90 hover:text-light
                            transition-all duration-300 hover:scale-110 hover:shadow-xl hover:shadow-dark/20"
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        Let&apos;s Connect
                        <motion.svg
                            className="w-5 h-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            animate={{ x: [0, 4, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </motion.svg>
                    </motion.a>
                </motion.div>
            </div>
        </main>
    );
};

export default Projects;
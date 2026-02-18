"use client";
import { motion, useInView } from 'framer-motion';
import { useRef, useState, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { GithubIcon } from './icon';

interface ProjectCardProps {
    type: string;
    title: string;
    summary?: string;
    img: string;
    link: string;
    github: string;
    index: number;
    featured?: boolean;
}

export const ProjectCard = ({
    type,
    title,
    summary,
    img,
    link,
    github,
    index,
    featured = false,
}: ProjectCardProps) => {
    const cardRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(cardRef, { once: true, margin: '-100px' });
    
    // 3D Tilt state
    const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0 });
    const [isHovering, setIsHovering] = useState(false);
    
    // Mouse position for spotlight
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

    const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        
        // Calculate tilt
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const maxTilt = 10;
        
        const rotateX = ((y - centerY) / centerY) * -maxTilt;
        const rotateY = ((x - centerX) / centerX) * maxTilt;
        
        setTilt({ rotateX, rotateY });
        setMousePos({ x, y });
    }, []);

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => {
        setIsHovering(false);
        setTilt({ rotateX: 0, rotateY: 0 });
    };

    // Stagger animation variants
    const cardVariants = {
        hidden: {
            opacity: 0,
            y: 80,
            rotateX: -15,
            scale: 0.9,
        },
        visible: {
            opacity: 1,
            y: 0,
            rotateX: 0,
            scale: 1,
            transition: {
                type: 'spring' as const,
                stiffness: 100,
                damping: 20,
                delay: index * 0.15,
            },
        },
    };

    // Image reveal animation
    const imageVariants = {
        hidden: { scale: 1.3, opacity: 0 },
        visible: {
            scale: 1,
            opacity: 1,
            transition: {
                duration: 0.8,
                delay: index * 0.15 + 0.3,
                ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number],
            },
        },
    };

    return (
        <motion.article
            ref={cardRef}
            variants={cardVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className={`relative group ${featured ? 'lg:col-span-12' : 'lg:col-span-6'}`}
            style={{
                perspective: '1000px',
            }}
        >
            <motion.div
                className={`relative ${featured ? 'flex flex-col lg:flex-row items-center' : 'flex flex-col'} 
                    rounded-3xl overflow-hidden bg-gradient-to-tr from-grey-100 via-light to-grey-500 
                    border border-gray-200`}
                style={{
                    transform: `perspective(1000px) rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg)`,
                    transition: 'transform 0.15s ease-out',
                    transformStyle: 'preserve-3d',
                }}
            >
                {/* Animated gradient border on hover */}
                <motion.div
                    className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                        backgroundImage: 'linear-gradient(90deg, #e5e7eb, #d1d5db, #9ca3af, #d1d5db, #e5e7eb)',
                        backgroundSize: '300% 100%',
                        backgroundPosition: '0% 50%',
                        padding: '2px',
                        WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                        WebkitMaskComposite: 'xor',
                        maskComposite: 'exclude',
                    }}
                    animate={{
                        backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                    }}
                    transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: 'linear',
                    }}
                />

                {/* Cursor spotlight effect */}
                <motion.div
                    className="absolute inset-0 rounded-3xl pointer-events-none z-10"
                    style={{
                        background: isHovering
                            ? `radial-gradient(450px circle at ${mousePos.x}px ${mousePos.y}px, rgba(255, 255, 255, 0.4), transparent 60%)`
                            : 'none',
                    }}
                />

                {/* Glow effect */}
                <motion.div
                    className="absolute -inset-1 rounded-3xl opacity-0 group-hover:opacity-40 transition-opacity duration-500 blur-xl -z-10"
                    style={{
                        background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.8), rgba(200, 200, 200, 0.5))',
                    }}
                />

                {/* Image Section */}
                <Link
                    href={link}
                    target="_blank"
                    className={`block overflow-hidden ${featured ? 'w-full lg:w-1/2' : 'w-full'}`}
                >
                    <div className={`relative overflow-hidden ${featured ? 'h-64 lg:h-80' : 'h-56'}`}>
                        {/* Image mask reveal animation */}
                        <motion.div
                            className="absolute inset-0 bg-dark-200 z-10"
                            initial={{ scaleX: 1 }}
                            animate={isInView ? { scaleX: 0 } : { scaleX: 1 }}
                            transition={{
                                duration: 0.8,
                                delay: index * 0.15 + 0.2,
                                ease: [0.77, 0, 0.175, 1],
                            }}
                            style={{ transformOrigin: 'right' }}
                        />
                        
                        <motion.div
                            variants={imageVariants}
                            initial="hidden"
                            animate={isInView ? 'visible' : 'hidden'}
                            className="w-full h-full"
                        >
                            <Image
                                src={img}
                                alt={title}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                        </motion.div>
                        
                        {/* Image overlay on hover */}
                        <motion.div
                            className="absolute inset-0 bg-gradient-to-t from-dark-200/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        />
                    </div>
                </Link>

                {/* Content Section */}
                <div
                    className={`relative z-10 p-6 lg:p-8 ${featured ? 'w-full lg:w-1/2' : 'w-full'}`}
                    style={{ transform: 'translateZ(30px)' }}
                >
                    {/* Type badge with animated underline */}
                    <motion.span
                        className="relative inline-block text-primary font-semibold text-lg tracking-wide"
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                        transition={{ delay: index * 0.15 + 0.4 }}
                    >
                        {type}
                        <motion.span
                            className="absolute -bottom-1 left-0 h-0.5"
                            style={{
                                background: 'linear-gradient(to right, #374151, #6b7280)',
                            }}
                            initial={{ width: 0 }}
                            animate={isInView ? { width: '100%' } : { width: 0 }}
                            transition={{ delay: index * 0.15 + 0.6, duration: 0.5 }}
                        />
                    </motion.span>

                    {/* Title with stagger animation */}
                    <Link href={link} target="_blank">
                        <motion.h2
                            className={`mt-3 font-bold text-dark hover:text-primary transition-colors duration-300
                                ${featured ? 'text-2xl sm:text-3xl lg:text-4xl' : 'text-xl sm:text-2xl'}`}
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                            transition={{ delay: index * 0.15 + 0.5 }}
                        >
                            {title}
                        </motion.h2>
                    </Link>

                    {/* Summary for featured projects */}
                    {summary && featured && (
                        <motion.p
                            className="mt-4 text-dark/70 text-sm sm:text-base leading-relaxed"
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                            transition={{ delay: index * 0.15 + 0.6 }}
                        >
                            {summary}
                        </motion.p>
                    )}

                    {/* CTAs */}
                    <motion.div
                        className="flex items-center gap-4 mt-6"
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ delay: index * 0.15 + 0.7 }}
                    >
                        {/* GitHub link with magnetic effect */}
                        <Link
                            href={github}
                            target="_blank"
                            className="relative group/btn w-10 h-10 flex items-center justify-center rounded-full 
                                border border-gray-300 hover:border-gray-500 transition-all duration-300
                                hover:scale-110"
                        >
                            <GithubIcon className="w-5 h-5 text-gray-600 group-hover/btn:text-gray-900 transition-colors" />
                        </Link>

                        {/* Visit button with animated background */}
                        <Link
                            href={link}
                            target="_blank"
                            className="relative overflow-hidden px-6 py-2.5 rounded-full font-semibold text-gray-800
                                bg-gradient-to-r from-gray-200 to-gray-300 hover:from-gray-300 hover:to-gray-200
                                transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-gray-400/25
                                border border-gray-300"
                        >
                            <span className="relative z-10">
                                {featured ? 'Visit Project' : 'Visit'}
                            </span>
                        </Link>
                    </motion.div>
                </div>
            </motion.div>
        </motion.article>
    );
};

export default ProjectCard;

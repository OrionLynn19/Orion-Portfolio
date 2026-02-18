"use client";
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

interface ParallaxBackgroundProps {
    className?: string;
}

export const ParallaxBackground = ({ className = '' }: ParallaxBackgroundProps) => {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start start', 'end start'],
    });

    const y1 = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
    const y2 = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
    const y3 = useTransform(scrollYProgress, [0, 1], ['0%', '70%']);
    const rotate1 = useTransform(scrollYProgress, [0, 1], [0, 180]);
    const rotate2 = useTransform(scrollYProgress, [0, 1], [0, -90]);

    return (
        <div ref={ref} className={`fixed inset-0 overflow-hidden pointer-events-none ${className}`}>
            {/* Gradient orb 1 */}
            <motion.div
                className="absolute w-[600px] h-[600px] rounded-full"
                style={{
                    backgroundImage: 'radial-gradient(circle, #ffffff 0%, transparent 70%)',
                    top: '-10%',
                    right: '-10%',
                    y: y1,
                    rotate: rotate1,
                    opacity: 0.3,
                }}
            />
            
            {/* Gradient orb 2 */}
            <motion.div
                className="absolute w-[400px] h-[400px] rounded-full"
                style={{
                    backgroundImage: 'radial-gradient(circle, #ffffff 0%, transparent 70%)',
                    bottom: '20%',
                    left: '-5%',
                    y: y2,
                    opacity: 0.25,
                }}
            />

            {/* Floating geometric shape 1 - white square */}
            <motion.div
                className="absolute w-20 h-20"
                style={{
                    top: '20%',
                    left: '10%',
                    y: y3,
                    rotate: rotate1,
                    border: '2px solid #ffffff',
                    backgroundColor: 'transparent',
                }}
            />

            {/* Floating geometric shape 2 - white circle */}
            <motion.div
                className="absolute w-16 h-16 rounded-full"
                style={{
                    top: '60%',
                    right: '15%',
                    y: y2,
                    rotate: rotate2,
                    border: '2px solid #ffffff',
                    backgroundColor: 'transparent',
                }}
            />

            {/* Small white dots */}
            {[...Array(6)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute w-2 h-2 rounded-full"
                    style={{
                        backgroundColor: '#ffffff',
                        top: `${15 + i * 15}%`,
                        left: `${80 + (i % 3) * 5}%`,
                        y: useTransform(scrollYProgress, [0, 1], ['0%', `${40 + i * 10}%`]),
                    }}
                />
            ))}
        </div>
    );
};

export default ParallaxBackground;

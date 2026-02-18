"use client";
import { motion } from 'framer-motion';

interface AnimatedBorderProps {
    children: React.ReactNode;
    className?: string;
    borderRadius?: string;
    gradientColors?: string[];
    animationDuration?: number;
}

export const AnimatedBorder = ({
    children,
    className = '',
    borderRadius = '1.5rem',
    gradientColors = [ '#ffffff', '#f5f5f5', '#eeeeee', '#e0e0e0', '#f5f5f5', '#ffffff' ],
    animationDuration = 3,
}: AnimatedBorderProps) => {
    const gradientString = gradientColors.join(', ');

    return (
        <div className={`relative group ${className}`}>
            {/* Animated border gradient */}
            <motion.div
                className="absolute -inset-[2px] opacity-50 group-hover:opacity-100 transition-opacity duration-500 blur-sm"
                style={{
                    borderRadius,
                    background: `linear-gradient(90deg, ${gradientString})`,
                    backgroundSize: '300% 100%',
                }}
                animate={{
                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                }}
                transition={{
                    duration: animationDuration,
                    repeat: Infinity,
                    ease: 'linear',
                }}
            />
            {/* Solid border */}
            <motion.div
                className="absolute -inset-[1px]"
                style={{
                    borderRadius,
                    background: `linear-gradient(90deg, ${gradientString})`,
                    backgroundSize: '300% 100%',
                }}
                animate={{
                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                }}
                transition={{
                    duration: animationDuration,
                    repeat: Infinity,
                    ease: 'linear',
                }}
            />
            {/* Content container */}
            <div
                className="relative bg-dark-200"
                style={{ borderRadius }}
            >
                {children}
            </div>
        </div>
    );
};

export default AnimatedBorder;

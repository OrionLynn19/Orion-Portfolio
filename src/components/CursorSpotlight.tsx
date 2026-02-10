"use client";
import { useState, useCallback, useRef } from 'react';
import { motion } from 'framer-motion';

interface CursorSpotlightProps {
    children: React.ReactNode;
    className?: string;
    spotlightColor?: string;
    spotlightSize?: number;
}

export const CursorSpotlight = ({
    children,
    className = '',
    spotlightColor = 'rgba(255, 165, 0, 0.15)',
    spotlightSize = 350,
}: CursorSpotlightProps) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);

    const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        setMousePosition({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
        });
    }, []);

    return (
        <div
            ref={containerRef}
            className={`relative overflow-hidden ${className}`}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
        >
            <motion.div
                className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition-opacity duration-300"
                style={{
                    background: `radial-gradient(${spotlightSize}px circle at ${mousePosition.x}px ${mousePosition.y}px, ${spotlightColor}, transparent 80%)`,
                    opacity: isHovering ? 1 : 0,
                }}
            />
            {children}
        </div>
    );
};

export default CursorSpotlight;

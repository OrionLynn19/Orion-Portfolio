"use client";
import { useRef, useState, useCallback } from 'react';

interface TiltValues {
    rotateX: number;
    rotateY: number;
    scale: number;
}

interface Use3DTiltReturn {
    ref: React.RefObject<HTMLDivElement | null>;
    style: React.CSSProperties;
    onMouseMove: (e: React.MouseEvent<HTMLDivElement>) => void;
    onMouseEnter: () => void;
    onMouseLeave: () => void;
}

export const use3DTilt = (
    maxTilt: number = 15,
    scale: number = 1.02,
    speed: number = 400
): Use3DTiltReturn => {
    const ref = useRef<HTMLDivElement>(null);
    const [tiltValues, setTiltValues] = useState<TiltValues>({
        rotateX: 0,
        rotateY: 0,
        scale: 1,
    });

    const onMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
        if (!ref.current) return;

        const rect = ref.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((y - centerY) / centerY) * -maxTilt;
        const rotateY = ((x - centerX) / centerX) * maxTilt;

        setTiltValues({ rotateX, rotateY, scale });
    }, [maxTilt, scale]);

    const onMouseEnter = useCallback(() => {
        setTiltValues(prev => ({ ...prev, scale }));
    }, [scale]);

    const onMouseLeave = useCallback(() => {
        setTiltValues({ rotateX: 0, rotateY: 0, scale: 1 });
    }, []);

    const style: React.CSSProperties = {
        transform: `perspective(1000px) rotateX(${tiltValues.rotateX}deg) rotateY(${tiltValues.rotateY}deg) scale(${tiltValues.scale})`,
        transition: `transform ${speed}ms cubic-bezier(0.03, 0.98, 0.52, 0.99)`,
        transformStyle: 'preserve-3d',
    };

    return { ref, style, onMouseMove, onMouseEnter, onMouseLeave };
};

export default use3DTilt;

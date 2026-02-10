"use client";
import { useRef, useState, useCallback } from 'react';

interface MagneticValues {
    x: number;
    y: number;
}

interface UseMagneticReturn {
    ref: React.RefObject<HTMLDivElement | null>;
    style: React.CSSProperties;
    onMouseMove: (e: React.MouseEvent<HTMLDivElement>) => void;
    onMouseLeave: () => void;
}

export const useMagnetic = (strength: number = 0.3): UseMagneticReturn => {
    const ref = useRef<HTMLDivElement>(null);
    const [magneticValues, setMagneticValues] = useState<MagneticValues>({ x: 0, y: 0 });

    const onMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
        if (!ref.current) return;

        const rect = ref.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        const x = (e.clientX - centerX) * strength;
        const y = (e.clientY - centerY) * strength;

        setMagneticValues({ x, y });
    }, [strength]);

    const onMouseLeave = useCallback(() => {
        setMagneticValues({ x: 0, y: 0 });
    }, []);

    const style: React.CSSProperties = {
        transform: `translate(${magneticValues.x}px, ${magneticValues.y}px)`,
        transition: 'transform 0.3s cubic-bezier(0.33, 1, 0.68, 1)',
    };

    return { ref, style, onMouseMove, onMouseLeave };
};

export default useMagnetic;

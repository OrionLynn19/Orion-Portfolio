"use client";
import gsap from 'gsap';
import { SplitText } from 'gsap/SplitText';
import { useRef } from 'react';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(SplitText);

interface AnimatedTextProps {
    text: string;
    className?: string;
}

const AnimatedText = ({ text = "", className = "" }: AnimatedTextProps) => {
    const textRef = useRef<HTMLHeadingElement>(null);
    const splitRef = useRef<SplitText | null>(null);
    const tlRef = useRef<gsap.core.Timeline | null>(null);
    const hasLoaded = useRef(false);

    // Initial load animation
    useGSAP(() => {
        if (!textRef.current) return;

        splitRef.current = new SplitText(textRef.current, { type: "chars" });

        splitRef.current.chars.forEach((char) => {
            gsap.set(char, {
                display: "inline-block",
                transformOrigin: "center bottom",
            });
        });

        gsap.from(splitRef.current.chars, {
            rotationX: -90,
            y: 50,
            opacity: 0,
            stagger: {
                each: 0.06,
                from: "start",
            },
            ease: "back.out(1.7)",
            duration: 0.8,
            onComplete: () => {
                hasLoaded.current = true;
            },
        });
    }, { scope: textRef });

    const handleMouseEnter = () => {
        if (!splitRef.current || !hasLoaded.current) return;

        // Kill previous animation
        if (tlRef.current) {
            tlRef.current.kill();
        }

        tlRef.current = gsap.timeline();

        tlRef.current.to(splitRef.current.chars, {
            rotationX: -360,
            y: -10,
            stagger: {
                each: 0.08,
                from: "start",
            },
            ease: "power4.inOut",
            duration: 0.4,
        });
    };

    const handleMouseLeave = () => {
        if (!splitRef.current || !hasLoaded.current) return;

        if (tlRef.current) {
            tlRef.current.kill();
        }

        // Reset characters back to normal
        gsap.to(splitRef.current.chars, {
            rotationX: 0,
            y: 0,
            stagger: {
                each: 0.03,
                from: "end",
            },
            ease: "power2.out",
            duration: 0.4,
        });
    };

    return (
        <div className="w-full mx-auto py-1 md:py-2 flex items-center justify-center text-center overflow-hidden perspective-500">
            <h1
                ref={textRef}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className={`inline-block w-full text-dark font-bold text-4xl sm:text-5xl xl:text-8xl cursor-crosshair ${className}`}
                style={{ perspective: "500px" }}
            >
                {text}
            </h1>
        </div>
    );
}

export default AnimatedText;
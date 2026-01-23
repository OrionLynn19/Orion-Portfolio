"use client";
import React, { useEffect, useRef } from "react";
import Head from "next/head";
import Holder from "../../components/Holder";
import { Andika } from "next/font/google";
import AnimatedText from "../../components/AnimatedText";
import Image from "next/image";
import pf from "../../../public/images/stacks3.png";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import Skills from "../../components/Skills";
import Experience from "../../components/Experience";
import Education from "../../components/Education";

interface numberprops {
    value: number;
}

const AnimatedNumbers = ({ value }: numberprops) => {
    const ref = useRef<HTMLSpanElement | null>(null);
    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, { duration: 3000 });
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
        if (isInView) {
            motionValue.set(value);
        }
    }, [isInView, motionValue, springValue, value]);

    useEffect(() => {
        springValue.on("change", (latest) => {
            if (ref.current && Number(latest.toFixed(0)) <= value) {
                ref.current.textContent = latest.toFixed(0);
            }
        });
    }, [springValue, value]);

    return (
        <span ref={ref}></span>
    );
};

export default function About() {
    return (
        <>
            <Head>
                <title>About ME</title>
                <meta name="description" content="About me page " />
            </Head>

            <main className="flex flex-col items-center justify-center w-full">
                <div className="relative pt-8 sm:pt-12 md:pt-16 w-full h-full inline-block z-0 p-4 sm:p-8 md:p-16 lg:p-32">
                    <AnimatedText text="About Me!" className="mb-8 sm:mb-12 md:mb-16" />

                    <div className="flex flex-col gap-8 sm:gap-12 md:gap-16 lg:grid lg:grid-cols-8 lg:gap-16 w-full">
                        {/* Profile and Text */}
                        <div className="flex flex-col gap-8 sm:gap-10 md:gap-12 lg:col-span-3 lg:gap-0">
                            <h2 className="mb-2 sm:mb-3 md:mb-4 text-base sm:text-lg font-bold uppercase text-dark/75">Profile</h2>
                            <p className="font-medium leading-relaxed text-dark text-justify text-sm sm:text-base">
                                I am a backend developer intern with hands‑on experience across full‑stack development, cloud infrastructure, and e‑commerce platforms. My technical toolkit includes PostgreSQL for database design, Next.js and Tailwind for responsive frontends, and AWS, Kubernetes, and Docker for scalable deployments and CI/CD automation. I lead code reviews with a focus on security and maintainability, and I’m currently preparing for the SAP‑C02 and CKA certifications to deepen my expertise in cloud architecture and Kubernetes troubleshooting. This mix of practical engineering, DevOps fluency, and certification‑driven growth reflects my commitment to building robust, modern systems that deliver real impact.
                            </p>
                        </div>

                        {/* Image */}
                        <div className="relative h-max rounded-2xl border-2 border-solid border-dark bg-gradient-to-br from-light to-orange-600 p-4 sm:p-6 md:p-8 lg:col-span-3 flex justify-center items-center">
                            <Image src={pf} alt="Orion Lynn" className="w-full h-auto rounded-2xl" />
                        </div>

                        {/* Stats */}
                        <div className="flex flex-row justify-between items-center gap-4 sm:gap-8 md:gap-12 lg:flex-col lg:col-span-2 lg:items-end lg:justify-between">
                            <div className="flex flex-col items-center lg:items-end justify-center">
                                <span className="inline-block font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
                                    <AnimatedNumbers value={5} />+
                                </span>
                                <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl font-medium capitalize text-dark/75 text-center lg:text-right">
                                    Satisfied Clients
                                </h2>
                            </div>
                            <div className="flex flex-col items-center lg:items-end justify-center">
                                <span className="inline-block font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
                                    <AnimatedNumbers value={4} />+
                                </span>
                                <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl font-medium capitalize text-dark/75 text-center lg:text-right">
                                    Projects Completed
                                </h2>
                            </div>
                            <div className="flex flex-col items-center lg:items-end justify-center">
                                <span className="inline-block font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
                                    <AnimatedNumbers value={3} />+
                                </span>
                                <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl font-medium capitalize text-dark/75 text-center lg:text-right">
                                    Languages Known
                                </h2>
                            </div>
                        </div>
                    </div>
                    <Skills />
                    <Experience />
                    <Education />
                </div>
            </main>
        </>
    );
}

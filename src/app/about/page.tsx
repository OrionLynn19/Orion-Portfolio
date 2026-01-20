"use client" ; 
import React, {useEffect, useRef} from "react";
import Head from "next/head";
import Holder from "../../components/Holder";
import { Andika } from "next/font/google";
import AnimatedText from "../../components/AnimatedText";
import Image from "next/image";
import pf from "../../../public/images/stacks3.png";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import Skills from "../../components/Skills";
import Experience from "../..//components/Experience";
import Education from "../../components/Education";

interface numberprops { 
    value : number ; 
}

const AnimatedNumbers = ({value} : numberprops) => {
    const ref  = useRef<HTMLSpanElement | null>(null) ;
    const motionValue = useMotionValue(0) ;
    const springValue = useSpring(motionValue, {duration: 3000}) ; 
    const isInView = useInView(ref, {once : true}); 

    useEffect ( () => {
        if (isInView) {
            motionValue.set(value);
        }
    } , [isInView, motionValue, springValue, value] ) ;

    useEffect ( () => {
        springValue.on("change", (latest) => {
            if (ref.current && Number(latest.toFixed(0)) <= value ) {
                ref.current.textContent = latest.toFixed(0) ;
            }
        } ) ;
    } , [springValue, value] ) ;

    return ( 
        <span ref ={ref} > 

        </span>
    )


} ;


export default function About() {
    return (
        <>
            <Head>
                <title> About ME  </title>
                <meta name="description" content="About me page " />
            </Head>

            <main className="flex flex-col items-center justify-center w-full ">
                <div className="pt-16 w-full h-full inline-block z-0 p-32 ">
                    <AnimatedText text="About Me!" className="mb-16" />


                    <div className="grid grid-cols-8 gap-16 w-full ">
                        <div className="col-span-3 flex flex-col items-start justify-start " >
                            <h2 className="mb-4 text-lg font-bold uppercase text-dark/75"> Profile  </h2>
                            <p className="my-4 font-medium leading-relaxed text-dark text-justify">
                               I am a backend developer intern with hands‑on experience across full‑stack development, cloud infrastructure, and e‑commerce platforms. My technical toolkit includes PostgreSQL for database design, Next.js  and Tailwind for responsive frontends, and AWS, Kubernetes, and Docker for scalable deployments and CI/CD automation. I lead code reviews with a focus on security and maintainability, and I’m currently preparing for the SAP‑C02 and CKA certifications to deepen my expertise in cloud architecture and Kubernetes troubleshooting. This mix of practical engineering, DevOps fluency, and certification‑driven growth reflects my commitment to building robust, modern systems that deliver real impact
                            </p>
                        </div>
                        <div className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-gradient-to-br from-light to-orange-600 p-8 ">
                            
                            <Image src={pf}  alt="Orion Lynn" className="w-full h-auto rounded-2xl" />
                        </div>

                        <div className="col-span-2 flex flex-col items-center justify-between items-end"> 
                            <div className="flex flex-col items-end justify-center"> 
                                <span className="inline-block font-bold text-7xl "> 
                                    <AnimatedNumbers value={5} />+
                                </span>
                                <h2 className="text-2xl font-medium capitalize text-dark/75"> 
                                    Satisfied Clients  
                                </h2>
                            </div>

                            <div className="flex flex-col items-end justify-center"> 
                                <span className="inline-block font-bold text-7xl "> 
                                    <AnimatedNumbers value={4} />+
                                </span>
                                <h2 className="text-2xl font-medium capitalize text-dark/75"> 
                                    Projects Completed  
                                </h2>
                            </div>

                            <div className="flex flex-col items-end justify-center"> 
                                <span className="inline-block font-bold text-7xl "> 
                                    <AnimatedNumbers value={3} />+
                                </span>
                                <h2 className="text-2xl font-medium capitalize text-dark/75"> 
                                    Languages Known  
                                </h2>
                            </div>

                        </div>

                    </div>
                    <Skills /> 
                    <Experience /> 
                    <Education /> 
                </div>

            </main >
        </>
    );

}

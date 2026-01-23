import React, { useRef } from 'react'; 
import { motion, useScroll } from 'framer-motion';
import Liicons from './Liicons';
import AnimatedText from './AnimatedText';

interface DetailsProps {
    position: string;
    company: string;
    companyLink: string;
    time: string;
    address: string;
    work: string;
}

const Details = ({ position, company, companyLink, time, address, work }: DetailsProps) => {
    const ref = useRef<HTMLLIElement>(null);
    return (
        <li ref={ref} className="my-6 sm:my-8 first:mt-0 last:mb-0 w-[90%] sm:w-[80%] md:w-[70%] lg:w-[60%] mx-auto flex flex-col items-start justify-center">
            <div className='hidden lg:block'> <Liicons reference={ref} /></div>
            <motion.div
                initial={{ y: 50 }}
                whileInView={{ y: 0 }}
                transition={{ duration: 0.5, type: 'spring' }}
            >
                <h3 className="capitalize font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl">
                    {position}&nbsp;
                    <a href={companyLink} target="_blank" className="text-primary capitalize">
                        @{company}
                    </a>
                </h3>
                <span className="capitalize font-medium text-dark/75 text-xs sm:text-sm md:text-base lg:text-lg">
                    {time} | {address}
                </span>
                <p className="font-medium w-full text-sm sm:text-base md:text-lg lg:text-xl">{work}</p>
            </motion.div>
        </li>
    );
};

const Experience = () => {
    const first = useRef(null);
    const { scrollYProgress } = useScroll({
        target: first,
        offset: ['start end', 'center start'],
    });
    return (
        <div className="my-16 sm:my-24 md:my-40 lg:my-64">
            <AnimatedText text="Experience" className="font-bold text-3xl sm:text-5xl md:text-7xl lg:text-8xl mb-8 sm:mb-16 md:mb-24 lg:mb-32 w-full text-center animate-pulse" />
            <div ref={first} className="w-[95%] sm:w-[85%] md:w-[80%] lg:w-[75%] mx-auto relative">
                <motion.div
                    style={{ scaleY: scrollYProgress }}
                    className="hidden lg:block absolute left-4 sm:left-7 md:left-8 lg:left-9 top-0 w-[2px] sm:w-[3px] md:w-[3.5px] lg:w-[4px] h-full bg-dark origin-top"
                />
                <ul className="w-full flex flex-col items-start justify-between ml-2 sm:ml-4">
                    <Details
                        position="Full Stack Developer"
                        company="Sprouting Tech"
                        companyLink="https://sproutingtech.com"
                        time="2025 August - December"
                        address="Remote/Intern"
                        work="Developing and maintaining web applications."
                    />
                    <Details
                        position="Frontend Developer"
                        company="Tech Solutions"
                        companyLink="https://techsolutions.com"
                        time="2024 June - 2024 August"
                        address="New York, NY"
                        work="Implemented responsive UI components using React.js and Tailwind CSS."
                    />
                    <Details
                        position="Web Developer Intern"
                        company="Innovatech"
                        companyLink="https://innovatech.com"
                        time="2023 January - 2023 May"
                        address="San Francisco, CA"
                        work="Assisted in the development of web applications and performed testing."
                    />
                </ul>
            </div>
        </div>
    );
};

export default Experience;
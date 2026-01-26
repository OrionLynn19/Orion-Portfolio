import React, { useRef } from 'react'; 
import { motion, useScroll } from 'framer-motion';
import Liicons from './Liicons';

interface DetailsProps {
    type: string;
    time: string;
    place: string;
    info: string;
}

const Details = ({ type, time, place, info }: DetailsProps) => {
    const ref = useRef<HTMLLIElement>(null);
    return (
        <li ref={ref} className="my-6 sm:my-8 first:mt-0 last:mb-0 w-[90%] sm:w-[80%] md:w-[75%] lg:w-[75%] mx-auto flex flex-col items-start justify-center">
            <div className='hidden lg:block'> <Liicons reference={ref} /></div>
            <motion.div
                initial={{ y: 50 }}
                whileInView={{ y: 0 }}
                transition={{ duration: 0.5, type: 'spring' }}
            >
                <h3 className="text-primary capitalize font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl">{type}</h3>
                <span className="italic capitalize font-medium text-dark/75 text-xs sm:text-sm md:text-base lg:text-lg">
                    {time} | {place}
                </span>
                <p className="font-medium w-full text-sm sm:text-base md:text-lg lg:text-xl">{info}</p>
            </motion.div>
        </li>
    );
};

const Education = () => {
    const first = useRef(null);
    const { scrollYProgress } = useScroll({
        target: first,
        offset: ['start end', 'center start'],
    });
    return (
        <div className="my-16 sm:my-24 md:my-40 lg:my-64">
            <h2 className="font-bold text-3xl sm:text-5xl md:text-7xl lg:text-8xl mb-8 sm:mb-16 md:mb-24 lg:mb-32 w-full text-center text-dark/80">
                Education
            </h2>
            <div ref={first} className="w-[95%] sm:w-[85%] md:w-[80%] lg:w-[75%] mx-auto relative">
                <motion.div
                    style={{ scaleY: scrollYProgress }}
                    className="hidden lg:block absolute left-4 sm:left-7 md:left-8 lg:left-9 top-0 w-[2px] sm:w-[3px] md:w-[3.5px] lg:w-[4px] h-full bg-dark origin-top"
                />
                <ul className="w-full flex flex-col items-start justify-between ml-2 sm:ml-4">
                    <Details
                        type="Bachelor of Science in ICT"
                        time="2022 - 2025"
                        place="Rangsit Internaion College, Thailand"
                        info="Learned fundamental and advanced concepts in information and communication technology, including programming, networking, and database management."
                    />
                    <Details
                        type="Bachelor of Electrical Engineering (Unfinished)"
                        time="2019 - 2022"
                        place="University of Technology, Mawlamyine"
                        info="Learned core engineering principles including circuit analysis, signal processing, and electromagnetics."
                    />
                    <Details
                        type="Parami Private High School"
                        time="2015 - 2019"
                        place="Mawlamyine, Myanmar"
                        info="Completed high school education with distinctions on science and mathematics."
                    />
                </ul>
            </div>
        </div>
    );
};

export default Education;
import React, { useRef } from 'react' ; 
import { motion, useScroll } from 'framer-motion';
import Liicons from './Liicons' ;
import AnimatedText from './AnimatedText';
interface DetailsProps {
    position : string ; 
    company : string ; 
    companyLink : string ; 
    time : string ; 
    address : string ; 
    work : string ; 
}

const Details = ({position, company, companyLink, time, address, work}: DetailsProps) => {
    const ref = useRef<HTMLLIElement>( null ) ; 
    return ( 
        <li ref={ref}  className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-start justify-center justify-between' >
            <Liicons reference={ref} /> 
            <motion.div 
            initial = {{y: 50}}
            whileInView={{y:0}}
            transition = {{duration: 0.5 , type: 'spring'}}
            >
                <h3 className='capitalize font-bold text-2xl'> {position}&nbsp;<a  href={companyLink} target='_blank'  className='text-primary  capitalize'> @{company}</a></h3>
                <span className='capitalize font-medium text-dark/75'> {time} | {address} </span>
                <p className='font-medium w-full '> {work} </p> 
             </motion.div> 
        </li>
    )
}

const Experience = () => {
    const first = useRef (null) ; 
    const { scrollYProgress} = useScroll(
        { target : first,
          offset : ["start end" , "center start" ]
         }
    ) ;
    return (
        <div className='my-64'> 
            <AnimatedText text='Experience' className='font-bold text-8xl mb-32 w-full text-center animate-pulse' /> 
            <div ref={first} className='w-[75%] mx-auto relative' > 
                <motion.div style={{scaleY: scrollYProgress}} className='absolute left-9 top-0 w-[4px] h-full bg-dark origin-top' /> 
               
                <ul className='w-full flex flex-col items-start justify-between ml-4'>
                   
                    <Details position='Full Stack Developer' company='Sprouting Tech' companyLink='https://sproutingtech.com' time='2025 August - December' address='Remote/Intern' work='Developing and maintaining web applications.' /> 
                    <Details position='Frontend Developer' company='Tech Solutions' companyLink='https://techsolutions.com' time='2024 June - 2024 August' address='New York, NY' work='Implemented responsive UI components using React.js and Tailwind CSS.' />
                    <Details position='Web Developer Intern' company='Innovatech' companyLink='https://innovatech.com' time='2023 January - 2023 May' address='San Francisco, CA' work='Assisted in the development of web applications and performed testing.' />
                </ul>

                
            </div>
        </div>
    )
}

export default Experience ; 
import React, { useRef } from 'react' ; 
import { motion, useScroll } from 'framer-motion';
import Liicons from './Liicons' ;
interface DetailsProps {
    type : string ; 
    time : string ; 
    place : string ; 
    info : string ; 
}

const Details = ({type, time, place, info }: DetailsProps) => {
    const ref = useRef<HTMLLIElement>( null ) ; 
    return ( 
        <li ref={ref}  className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-start justify-center justify-between' >
            <Liicons reference={ref} /> 
            <motion.div 
            initial = {{y: 50}}
            whileInView={{y:0}}
            transition = {{duration: 0.5 , type: 'spring'}}
            >
                <h3 className='capitalize font-bold text-2xl'> {type}</h3>
                <span className='capitalize font-medium text-dark/75'> {time} | {place} </span>
                <p className='font-medium w-full'> {info} </p> 
             </motion.div> 
        </li>
    )
}

const Education = () => {
    const first = useRef (null) ; 
    const { scrollYProgress} = useScroll(
        { target : first,
          offset : ["start end" , "center start" ]
         }
    ) ;
    return (
        <div className='my-64'> 
            <h2 className='font-bold text-8xl mb-32 w-full text-center text-dark/80'> Education   </h2>
            <div ref={first} className='w-[75%] mx-auto relative' > 
                <motion.div style={{scaleY: scrollYProgress}} className='absolute left-9 top-0 w-[4px] h-full bg-dark origin-top' /> 
               
                <ul className='w-full flex flex-col items-start justify-between ml-4  '>

                    <Details type='Bachelor of Science in ICT' time='2022 - 2025' place='Rangsit Internaion College, Thailand' info='Developing and maintaining web applications.' /> 
                    <Details  type='Bachelor of Electrical Engineering (Unfinished)' time='2019 - 2022' place='University of Technology, Mawlamyine' info='Implemented responsive UI components using React.js and Tailwind CSS.' />
                    <Details type='Parami Private High School' time='2015 - 2019' place='Mawlamyine, Myanmar' info='Completed high school education with distinctions on science and mathematics.' />
                </ul>

                
            </div>
        </div>
    )
}

export default Education; 
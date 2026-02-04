import React, { RefObject } from "react";
import { motion , useScroll} from "framer-motion";

interface LiiconsProps {    
    reference : RefObject<HTMLLIElement | null > ;
} ;

const Liicons = ({reference} : LiiconsProps) => {
    const {scrollYProgress} = useScroll(
        {target: reference , 
            offset: ["center end" , "center center"]
        }
    ) ; 

    return (
        <figure className="absolute left-0 stroke-dark "> 
            <svg  className="-rotate-90" width="75" height="75" viewBox="0 0 100 100"> 
                <circle cx="75" cy="50" r="20" className="stroke-primary stroke-1 fill-none"/>
                <motion.circle cx="75" cy="50" r="20" className="stroke-[5px] fill-light"
                style={ {
                    pathLength : scrollYProgress 

                }}
                initial = {{pathLength: 0 }}
                strokeDasharray="0 1 " />
                <circle cx="75" cy="50" r="10" className="stroke-1 animate-pulse fill-primary" />
            </svg>
        </figure>
    );
};

export default Liicons;

"use client";
import React from "react";
import { motion } from "framer-motion";
interface SkillProps { 
    name : string ; 
    x : string ; 
    y : string ; } ; 

const Skill = ({ name, x, y }: SkillProps    ) => {
    return (
        <motion.div className="flex items-center justify-center rounded-full font-semibold bg-dark text-light py-5 px-6 shadow-dark cursor-pointer select-none absolute"
            whileHover={{ scale: 1.3 }}
            initial={{ x: 0, y: 0 }}
            animate={{ x: x, y: y, transition: { duration: 1.5 } }}
            viewport={{ once: true }} 
        >
            {name} 
        </motion.div>
    )
};


const Skills = () => {
    return (
        <>
            <h2 className="font-bold text-8xl mt-64 w-full text-center" > My Skills </h2>
            <div className="w-full h-screen relative flex items-center justify-center rounded-full  "
                style={{
                    background: 'repeating-radial-gradient(rgba(0,0,0,0.4) 2px, #f5f5f5 5px, #f5f5f5 100px)'
                }} >
                <motion.div className="flex items-center justify-center rounded-full font-semibold bg-dark text-light p-8 shadow-dark cursor-pointer select-none "
                    whileHover={{ scale: 1.3 }}>
                    Web
                </motion.div>

                <Skill name="CSS" x="-5vw" y="-10vw" />
                <Skill name="HTML" x="20vw" y="6vw" />
                <Skill name="JavaScript" x="-20vw" y="-15vw" />
                <Skill name="ReactJS" x="0vw" y="15vw" />
                <Skill name="NextJS" x="15vw" y="-12vw" />
                <Skill name="TypeScript" x="-15vw" y="11vw" />
                <Skill name="TailwindCSS" x="32vw" y="-5vw" />
                <Skill name="Framer-Motion" x="0vw" y="-20vw" />
                <Skill name="Git" x="-25vw" y="18vw" />
                <Skill name="Figma" x="18vw" y="18vw" /> 



            </div>
        </>
    )
};


export default Skills; 
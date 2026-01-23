"use client";
import React, { useState } from "react";
import { Metadata } from 'next';
import AnimatedText from "@/src/components/AnimatedText";
import Holder from "@/src/components/Holder";
import Image from 'next/image';
import { motion } from 'framer-motion';
import { GithubIcon, TwitterIcon, LinkedInIcon } from "@/src/components/icon";

const Contact = () => {
    const [open, setOpen] = useState(false);

    return (
        <main className="w-full mb-8 sm:mb-12 md:mb-16 flex flex-col items-center justify-center">
            <div className="pt-8 sm:pt-12 md:pt-16 w-full h-full inline-block z-0 text-dark p-4 sm:p-8 md:p-16 lg:p-32">
                <AnimatedText 
                    text='Get In Touch' 
                    className='mb-8 sm:mb-12 md:mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl'
                />

                <div className="w-full flex flex-col lg:flex-row items-start justify-between gap-8 sm:gap-12 md:gap-16 lg:gap-16">
                    <motion.div 
                        className="w-full lg:w-1/2 flex flex-col items-start justify-start px-4"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="w-full">
                            <h3 className="text-2xl sm:text-3xl font-bold text-dark mb-3 sm:mb-4">
                                Let's Create Something Amazing!
                            </h3>
                            <p className="text-dark/75 font-medium text-base sm:text-lg leading-relaxed mb-4 sm:mb-6 text-left">
                                I'm a passionate full-stack developer with expertise in modern web technologies. 
                                Whether you have a project in mind or just want to connect, I'd love to hear from you.
                            </p>
                            <div className="space-y-3 sm:space-y-4">
                                <div className="flex items-center space-x-2 sm:space-x-3">
                                    <div className="w-7 h-7 sm:w-8 sm:h-8 bg-primary rounded-full flex items-center justify-center">
                                        <span className="text-white text-xs sm:text-sm">📧</span>
                                    </div>
                                    <span className="text-dark font-medium text-sm sm:text-base">lynn.orion19@gmail.com</span>
                                </div>
                                {/* Animated Circle and Social Icons */}
                               
                                {/* End Animated Circle and Social Icons */}
                                <div className="flex items-center space-x-2 sm:space-x-3">
                                    <div className="w-7 h-7 sm:w-8 sm:h-8 bg-primary rounded-full flex items-center justify-center">
                                        <span className="text-white text-xs sm:text-sm">📱</span>
                                    </div>
                                    <span className="text-dark font-medium text-sm sm:text-base">00 66 ( 9 275 49 280 )</span>
                                </div>
                                <div className="flex items-center space-x-2 sm:space-x-3">
                                    <div className="w-7 h-7 sm:w-8 sm:h-8 bg-primary rounded-full flex items-center justify-center">
                                        <span className="text-white text-xs sm:text-sm">📍</span>
                                    </div>
                                    <span className="text-dark font-medium text-sm sm:text-base">Bangkok, Thailand</span>
                                </div>
                                 <div className="relative flex  items-start">
                                    <motion.button
                                        className="w-7 h-7 rounded-full bg-primary flex items-center justify-center cursor-pointer outline-none border-2 border-dark shadow-lg"
                                        whileHover={{ scale: 1.1, rotate: 10 }}
                                        whileTap={{ scale: 0.6 }}
                                        animate={{ scale: open ? 1.2 : 1, rotate: open ? 45 : 0 }}
                                        transition={{ type: "spring", stiffness: 300, damping: 15 }}
                                        onClick={() => setOpen(v => !v)}
                                        aria-label="Show social links"
                                    >
                                        <span className="text-light text-xl">+</span>
                                    </motion.button>
                                    <motion.div
                                        initial={false}
                                        animate={open ? "open" : "closed"}
                                        variants={{
                                            open: { opacity: 1, height: "auto", transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
                                            closed: { opacity: 0, height: 0, transition: { staggerChildren: 0.1, staggerDirection: 1 },   }
                                        }}
                                        className="flex flex-row justify-between items-center  mx-2 overflow-hidden pl-2"
                                    >
                                        <motion.a
                                            href="https://github.com/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="mr-3"
                                            variants={{
                                                open: { x: 0, opacity: 1 },
                                                closed: { x: 30, opacity: 0 }
                                            }}
                                            transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                        >
                                            <GithubIcon className="!w-8 !h-8 fill-dark hover:fill-primary transition-colors" />
                                        </motion.a>
                                        <motion.a
                                            href="https://twitter.com/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="mr-3"
                                            variants={{
                                                open: { x: 0, opacity: 1 },
                                                closed: { x: 30, opacity: 0 }
                                            }}
                                            transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                        >
                                            <TwitterIcon className="!w-8 !h-8 fill-dark hover:fill-primary transition-colors" />
                                        </motion.a>
                                        <motion.a
                                            href="https://linkedin.com/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            variants={{
                                                open: { x: 0, opacity: 1 },
                                                closed: { y: 30, opacity: 0 }
                                            }}
                                            transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                        >
                                            <LinkedInIcon className="!w-8 !h-8 fill-dark hover:fill-primary transition-colors" />
                                        </motion.a>
                                    </motion.div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div 
                        className="w-full lg:w-1/2 px-1 py-1 "
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <div className="bg-gradient-to-br from-light to-orange-600 border border-solid border-dark rounded-xl p-4 sm:p-6 md:p-8 relative">
                            
                            <form className="space-y-4 sm:space-y-6">
                        
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <input
                                            id="name"
                                            name="name"
                                            type="text"
                                            placeholder="Your Name"
                                            required
                                            className="w-full border-2 border-solid border-dark/20 rounded-xl p-3 sm:p-4 text-dark font-medium focus:border-primary focus:outline-none transition-colors bg-transparent"
                                        />
                                    </div>
                                    <div>
                                        <input
                                            id="phone"
                                            name="phone"
                                            type="tel"
                                            placeholder="Phone Number"
                                            className="w-full border-2 border-solid border-dark/20 rounded-xl p-3 sm:p-4 text-dark font-medium focus:border-primary focus:outline-none transition-colors bg-transparent"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        placeholder="Your Email"
                                        required
                                        className="w-full border-2 border-solid border-dark/20 rounded-xl p-3 sm:p-4 text-dark font-medium focus:border-primary focus:outline-none transition-colors bg-transparent"
                                    />
                                </div>
                               
                                <div>
                                    <input
                                        id="subject"
                                        name="subject"
                                        type="text"
                                        placeholder="Subject"
                                        required
                                        className="w-full border-2 border-solid border-dark/20 rounded-xl p-3 sm:p-4 text-dark font-medium focus:border-primary focus:outline-none transition-colors bg-transparent"
                                    />
                                </div>
                              
                                <div>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows={6}
                                        placeholder="Your Message"
                                        required
                                        className="w-full border-2 border-solid border-dark/20 rounded-xl p-3 sm:p-4 text-dark font-medium focus:border-primary focus:outline-none transition-colors resize-none bg-transparent"
                                    />
                                </div>
                                <motion.button
                                    type="submit"
                                    className="w-full bg-dark text-light py-3 sm:py-4 px-6 sm:px-8 rounded-xl font-bold text-base sm:text-lg hover:bg-primary transition-colors border-2 border-solid border-transparent hover:border-dark hover:bg-light hover:text-dark"
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    Send Message
                                </motion.button>
                            </form>
                        </div>
                    </motion.div>
                </div>
            </div>
        </main>
    );
};

export default Contact;
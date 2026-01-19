"use client";
import React from "react";
import { Metadata } from 'next';
import AnimatedText from "@/src/components/AnimatedText";
import Holder from "@/src/components/Holder";
import Image from 'next/image';
import { motion } from 'framer-motion';



const Contact = () => {
    return (
        <main className="w-full mb-16 flex flex-col items-center justify-center">
            <div className="pt-16 w-full h-full inline-block z-0  text-dark p-32 ">
                <AnimatedText 
                    text='Get In Touch' 
                    className='mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl'
                />

                <div className="w-full flex lg:flex-row flex-col items-start justify-between gap-16">
                  
                    <motion.div 
                        className="lg:w-1/2 w-full flex flex-col items-start justify-start"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        

                        
                        <div className="w-full">
                            <h3 className="text-3xl font-bold text-dark mb-4">
                                Let's Create Something Amazing!
                            </h3>
                            <p className="text-dark/75 font-medium text-lg leading-relaxed mb-6 text-left">
                                I'm a passionate full-stack developer with expertise in modern web technologies. 
                                Whether you have a project in mind or just want to connect, I'd love to hear from you.
                            </p>
                            
                
                            <div className="space-y-4">
                                <div className="flex items-center space-x-3">
                                    <div className="w-8 h-8 bg-green-400 rounded-full flex items-center justify-center">
                                        <span className="text-white text-sm">📧</span>
                                    </div>
                                    <span className="text-dark font-medium">orion@example.com</span>
                                </div>
                                
                                <div className="flex items-center space-x-3">
                                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                                        <span className="text-white text-sm">📱</span>
                                    </div>
                                    <span className="text-dark font-medium">+1 (555) 123-4567</span>
                                </div>
                                
                                <div className="flex items-center space-x-3">
                                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                                        <span className="text-white text-sm">📍</span>
                                    </div>
                                    <span className="text-dark font-medium">Bangkok, Thailand</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                   
                    <motion.div 
                        className="lg:w-1/2 w-full"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <div className="bg-light border border-solid border-dark rounded-3xl p-8 relative">
                           
                            <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark"/>
                            
                            <form className="space-y-6">
                                {/* Name & Phone Row */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <input
                                            id="name"
                                            name="name"
                                            type="text"
                                            placeholder="Your Name"
                                            required
                                            className="w-full border-2 border-solid border-dark/20 rounded-xl p-4 text-dark font-medium focus:border-primary focus:outline-none transition-colors bg-transparent"
                                        />
                                    </div>
                                    <div>
                                        <input
                                            id="phone"
                                            name="phone"
                                            type="tel"
                                            placeholder="Phone Number"
                                            className="w-full border-2 border-solid border-dark/20 rounded-xl p-4 text-dark font-medium focus:border-primary focus:outline-none transition-colors bg-transparent"
                                        />
                                    </div>
                                </div>

                                {/* Email */}
                                <div>
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        placeholder="Your Email"
                                        required
                                        className="w-full border-2 border-solid border-dark/20 rounded-xl p-4 text-dark font-medium focus:border-primary focus:outline-none transition-colors bg-transparent"
                                    />
                                </div>

                                {/* Subject */}
                                <div>
                                    <input
                                        id="subject"
                                        name="subject"
                                        type="text"
                                        placeholder="Subject"
                                        required
                                        className="w-full border-2 border-solid border-dark/20 rounded-xl p-4 text-dark font-medium focus:border-primary focus:outline-none transition-colors bg-transparent"
                                    />
                                </div>

                                {/* Message */}
                                <div>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows={6}
                                        placeholder="Your Message"
                                        required
                                        className="w-full border-2 border-solid border-dark/20 rounded-xl p-4 text-dark font-medium focus:border-primary focus:outline-none transition-colors resize-none bg-transparent"
                                    />
                                </div>

                                {/* Submit Button */}
                                <motion.button
                                    type="submit"
                                    className="w-full bg-dark text-light py-4 px-8 rounded-xl font-bold text-lg hover:bg-primary transition-colors border-2 border-solid border-transparent hover:border-dark hover:bg-light hover:text-dark"
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
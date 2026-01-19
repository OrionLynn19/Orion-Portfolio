"use client";
import React from 'react'; 
import Link from 'next/link'; 
import Logo from './Logo'; 
import { usePathname } from 'next/navigation';
import { TwitterIcon, LinkedInIcon, GithubIcon, PinterestIcon, DribbbleIcon, SunIcon, MoonIcon } from './icon'; 
import { motion } from 'framer-motion'; 
import useThemeSwitcher from './hooks/useThemeSwitcher';

interface CustomLinkProps {
    href: string; 
    title: string; 
    className: string; 
}

const CustomLink = ({ href, title, className = "" }: CustomLinkProps) => {
    const pathname = usePathname(); 

    return (
        <Link href={href} className={`${className} relative group`}> 
            {title} 
            <span className={`
                h-[2px] 
                inline-block 
                bg-dark
                absolute 
                left-0 
                -bottom-0.5 
                transition-[width]
                ease 
                duration-300
                ${pathname === href 
                    ? 'w-full shadow-[0_0_15px_4px_rgba(27,27,27,0.6)]' 
                    : 'w-0 shadow-none group-hover:w-full group-hover:shadow-[0_0_15px_4px_rgba(27,27,27,0.6)]'
                }
            `}>
                &nbsp;
            </span>
        </Link>
    )
};

export const Navbar = () => {
    const [mode, setMode] = useThemeSwitcher();

    return (
        <header className="fixed top-0 z-50 w-full px-32 py-8 font-medium flex items-center justify-between  ">  
         <div className='bg-orange/65 backdrop-blur-lg border border-light/40 rounded-full shadow-lg px-8 py-4 flex items-center justify-between w-full'> 
            <nav className='flex items-center'> 
                <CustomLink href="/" className="mr-4" title="Home" />
                <CustomLink href="/about" className="mx-4" title="About" />
                <CustomLink href="/projects" className="mx-4" title="Projects" />
                <CustomLink href="/contact" className="ml-4" title="Contact" />
            </nav>
         
         
            <nav className="flex items-center "> 
                <motion.a href="/" target="_blank" whileHover={{ y: -2 }} className="w-7 mx-3" whileTap={{ scale: 0.9 }} aria-label="GitHub">
                    <GithubIcon />
                </motion.a>
                <motion.a href="/" target="_blank" whileHover={{ y: -2 }} className="w-7 mx-3" whileTap={{ scale: 0.9 }} aria-label="Twitter">
                    <TwitterIcon />
                </motion.a>
                <motion.a href="/" target="_blank" whileHover={{ y: -2 }} className="w-7 mx-3" whileTap={{ scale: 0.9 }} aria-label="LinkedIn">
                    <LinkedInIcon />
                </motion.a>
                <motion.a href="/" target="_blank" whileHover={{ y: -2 }} className="w-7 mx-3" whileTap={{ scale: 0.9 }} aria-label="Pinterest">
                    <PinterestIcon />
                </motion.a>
                <motion.a href="/" target="_blank" whileHover={{ y: -2 }} className="w-7 ml-3" whileTap={{ scale: 0.9 }} aria-label="Dribbble">
                    <DribbbleIcon />
                </motion.a>
                <button 
                    className='ml-3 flex items-center justify-center rounded-full p-1' 
                    onClick={() => setMode(mode === 'light' ? 'dark' : 'light')}
                    aria-label={mode === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
                    title={mode === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
                >
                    {mode === 'dark' ? <SunIcon className='fill-dark' /> : <MoonIcon className='fill-dark' />}
                </button>
            </nav>
        
            </div> 
        </header>
    )
}

export default Navbar;
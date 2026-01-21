"use client";
import React from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { TwitterIcon, LinkedInIcon, GithubIcon, PinterestIcon, DribbbleIcon, SunIcon, MoonIcon } from './icon';
import { motion } from 'framer-motion';
import useThemeSwitcher from './hooks/useThemeSwitcher';

interface CustomLinkProps {
    href: string;
    title: string;
    className?: string;
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

interface CustomMobileLinkProps {
    href: string;
    title: string;
    className?: string;
    toggle: () => void;
}

const CustomMobileLink = ({ href, title, className = "", toggle }: CustomMobileLinkProps) => {
    const pathname = usePathname();
    const router = useRouter();

    const handleClick = () => {
        toggle();
        router.push(href);
    }

    return (
        <button onClick={handleClick} className={`${className} relative group text-dark`}>
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
                    ? 'w-full shadow-[0_0_15px_4px_rgba(245,245,245,0.6)]'
                    : 'w-0 shadow-none group-hover:w-full group-hover:shadow-[0_0_15px_4px_rgba(245,245,245,0.6)]'
                }
            `}>
                &nbsp;
            </span>
        </button>
    )
};

export const Navbar = () => {
    const [mode, setMode] = useThemeSwitcher();
    const [isOpen, setIsOpen] = React.useState(false);

    const handleClick = () => {
        setIsOpen(!isOpen);
    }

    return (
        <header className="fixed top-0 z-50 w-full px-32 lg:px-16 md:px-8 max-[768px]:px-6 max-[640px]:px-6 max-[480px]:px-4 py-8 max-[768px]:py-6 max-[640px]:py-6 max-[480px]:py-4 font-medium flex items-center justify-start">

            {/* Desktop Navigation Container - Full width */}
            <div className='relative bg-orange/65 backdrop-blur-lg border border-light/40 rounded-full shadow-lg px-8 py-4 hidden md:flex items-center justify-between w-full'>
                <nav className='flex items-center'>
                    <CustomLink href="/" className="mr-4" title="Home" />
                    <CustomLink href="/about" className="mx-4" title="About" />
                    <CustomLink href="/projects" className="mx-4" title="Projects" />
                    <CustomLink href="/contact" className="ml-4" title="Contact" />
                </nav>

                <nav className="flex items-center">
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

            {/* Mobile Hamburger Button - Only visible on mobile */}
            <button
                className='md:hidden bg-orange/65 backdrop-blur-lg border border-light/40 rounded-full shadow-lg p-3 max-[640px]:p-2.5 max-[480px]:p-2 flex flex-col items-center justify-center gap-1'
                onClick={handleClick}
                aria-label="Toggle menu"
            >
                <span className={`w-6 h-0.5 bg-dark block transition-all duration-300 ease-out rounded-sm origin-center ${isOpen ? "rotate-45 translate-y-1.5 " : ""}`}></span>
                <span className={`w-6 h-0.5 bg-dark block transition-all duration-300 ease-out rounded-sm ${isOpen ? "opacity-0 scale-0" : "opacity-100"}`}></span>
                <span className={`w-6 h-0.5 bg-dark block transition-all duration-300 ease-out rounded-sm origin-center ${isOpen ? "-rotate-45 -translate-y-1.5 " : ""}`}></span>
            </button>

            {/* Mobile Menu Dropdown */}
            {isOpen && (
                <motion.div
                    className='min-w-[70vw] flex flex-col justify-between z-30 items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-light/60 backdrop-blur-md border border-light/40 rounded-lg shadow-lg py-12'
                    initial={{ opacity: 0, scale: 0}}
                    animate={{ opacity: 1, scale: 1}}
                    transition={{ duration: 0.3 }}
                >
                    <nav className='flex flex-col items-center justify-center gap-4 max-[640px]:gap-3 max-[480px]:gap-2 mb-6 max-[640px]:mb-4 max-[480px]:mb-3'>
                        <CustomMobileLink href="/" title="Home" toggle={handleClick} className="" />
                        <CustomMobileLink href="/about" title="About" toggle={handleClick} className="" />
                        <CustomMobileLink href="/projects" title="Projects" toggle={handleClick} className=" " />
                        <CustomMobileLink href="/contact" title="Contact" toggle={handleClick} className=" " />
                    </nav>

                    <nav className="flex items-center gap-3 sm:gap-2">
                        <motion.a href="/" target="_blank" whileHover={{ y: -2 }} className="w-6 " whileTap={{ scale: 0.9 }} aria-label="GitHub">
                            <GithubIcon className="fill-light" />
                        </motion.a>
                        <motion.a href="/" target="_blank" whileHover={{ y: -2 }} className="w-6 " whileTap={{ scale: 0.9 }} aria-label="Twitter">
                            <TwitterIcon className="fill-light" />
                        </motion.a>
                        <motion.a href="/" target="_blank" whileHover={{ y: -2 }} className="w-6 " whileTap={{ scale: 0.9 }} aria-label="LinkedIn">
                            <LinkedInIcon className="fill-light" />
                        </motion.a>
                        <motion.a href="/" target="_blank" whileHover={{ y: -2 }} className="w-6 " whileTap={{ scale: 0.9 }} aria-label="Pinterest">
                            <PinterestIcon className="fill-light" />
                        </motion.a>
                        <motion.a href="/" target="_blank" whileHover={{ y: -2 }} className="w-6 " whileTap={{ scale: 0.9 }} aria-label="Dribbble">
                            <DribbbleIcon className="fill-light" />
                        </motion.a>
                        <button
                            className='ml-2 max-[640px]:ml-1 flex items-center justify-center rounded-full p-1'
                            onClick={() => setMode(mode === 'light' ? 'dark' : 'light')}
                            aria-label={mode === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
                        >
                            {mode === 'dark' ? <SunIcon className='fill-light w-5' /> : <MoonIcon className='fill-light w-5 ' />}
                        </button>
                    </nav>
                </motion.div>
            )}
        </header>
    )
}

export default Navbar;
"use client" ; 
import React from 'react'; 
import Link from 'next/link'; 
import Logo from './Logo' ; 
import { usePathname } from 'next/navigation' ;
import {TwitterIcon,LinkedInIcon,GithubIcon,PinterestIcon,DribbbleIcon,SunIcon,MoonIcon,CircularText,LinkArrow } from './icon' ; 
import {motion} from 'framer-motion'; 

interface  CustomLinkProps {
    href : string ; 
    title : string ; 
    className : string ; 
}

const CustomLink = ({href, title, className=""}: CustomLinkProps) => {
    const pathname = usePathname() ; 

    return (
        <Link href={href} className = {`${className} relative group`} > 
        {title} 

        <span className={`h-[1px] inline-block w-0 bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${pathname === href ? 'w-full' : 'w-0'}`}>&nbsp; </span>
        </Link>
    )

};


export const Navbar = () => {
    return (
        <header className = "w-full px-32 py-8 font-medium flex items-center justify-between ">  
 
         <nav> 
            <CustomLink href = "/" className = "mr-4 " title="Home" />
            <CustomLink href = "/about" className = "mx-4" title="About" />
            <CustomLink href = "/projects" className = "mx-4" title="Projects" />
            <CustomLink href = "/contact" className = "ml-4" title="Contact" />
         </nav>
         
         <nav className= " flex items-center justify-center flex-wrap"> 
            <motion.a href="/" target = {"_blank"} whileHover={{y:-2}} className="w-7 mx-3" whileTap={{scale: 0.9}} > <GithubIcon/>  </motion.a>
            <motion.a href="/" target = {"_blank"} whileHover={{y:-2}} className="w-7 mx-3" whileTap={{scale: 0.9}} >  <TwitterIcon />  </motion.a>
            <motion.a href="/" target = {"_blank"} whileHover={{y:-2}} className="w-7 mx-3" whileTap={{scale: 0.9}} > <LinkedInIcon /> </motion.a>
            <motion.a href="/" target = {"_blank"} whileHover={{y:-2}} className="w-7 mx-3" whileTap={{scale: 0.9}} > <PinterestIcon /> </motion.a>
            <motion.a href="/" target = {"_blank"} whileHover={{y:-2}} className="w-7 ml-3" whileTap={{scale: 0.9}} > <DribbbleIcon /> </motion.a>
         </nav>
         <div className="absolute left-[50%] top-2 translate-x-[-50%]"> 
            
         </div>
        
        </header>
    )
    }


export default Navbar ; 
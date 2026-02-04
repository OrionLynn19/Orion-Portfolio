import React from 'react';
import Holder from '@/src/components/Holder';
import AnimatedText from '@/src/components/AnimatedText';
import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { GithubIcon } from '@/src/components/icon';

export const metadata: Metadata = {
    title: 'Lynn | Projects Page',
    description: 'Projects Page for Orion Portfolio',
};

interface FeaturedProjectProps { 
    type: string; 
    title: string; 
    summary: string; 
    img: string; 
    link: string; 
    github: string 
} 

interface ProjectProps { 
    type: string; 
    title: string; 
    img: string; 
    link: string; 
    github: string 
}    

const FeaturedProject = ({type, title, summary, img, link, github}: FeaturedProjectProps) => {
    return (
        <article className=' w-full  flex flex-col lg:flex-row  items-center justify-between rounded-3xl bg-gradient-to-tr from-orange-400 via-dark-200 to-primary-600   p-6 sm:p-8 md:p-10 lg:p-12 relative '> 
            <div className="absolute rounded-br-2xl  top-0 -right-2 -bottom-1 -z-10 w-[101%] h-[101%] rounded-[1rem] md:rounded-br-3xl  bg-dark/55 "/>
            <Link
                href={link}
                target='_blank'
                className='w-full lg:w-1/2 cursor-pointer overflow-hidden rounded-lg relative mb-6 lg:mb-0'
            >
                <div className="relative items-start w-full h-64"> 
                    <Image src={img} alt={title} fill className='object-fill rounded-lg' />
                </div>
            </Link>
            <div className='w-full lg:w-1/2 flex flex-col items-start justify-between lg:pl-6'>
                <span className='text-primary font-medium text-lg sm:text-xl'> {type} </span> 
                <Link href={link} target='_blank' className='hover:underline underline-offset-2' >
                    <h2 className='my-2 w-full text-dark text-2xl sm:text-3xl lg:text-4xl font-bold '> {title} </h2>
                </Link>
                <p className='italic font-bold my-2 font-medium text-dark text-sm sm:text-base'>  {summary} </p>
                <div className='flex items-center mt-2'>
                    <Link href={github} target='_blank' className='w-8 sm:w-10' > 
                        <GithubIcon /> 
                    </Link>
                    <Link href={link} target='_blank' 
                        className='hover:bg-light hover:text-dark ml-4 rounded-lg bg-dark text-light p-2 px-4 sm:px-6 text-base sm:text-lg font-semibold' >
                        Visit Project
                    </Link>
                </div>
            </div>
        </article>
    )
}

const ProjectsComponent = ({title, type, img, link, github}: ProjectProps) => {
    return ( 
        <article className='flex flex-col items-center justify-center rounded-3xl  bg-gradient-to-tr from-orange-400 via-dark-200 to-primary-600 p-4 sm:p-6 md:p-8 relative'> 
            <div className="absolute top-0 -right-2 -bottom-1  -z-10 w-[101%] h-[101%] rounded-[1rem] rounded-br-2xl md:rounded-[2rem] bg-dark/55 md:rounded-br-3xl"/>
            <Link href={link} target='_blank' className='w-full cursor-pointer overflow-hidden rounded-lg'>
                <div className="relative w-full h-54">
                    <Image src={img} alt={title} fill className='object-fill rounded-lg' />
                </div>
            </Link>
            <div className='w-full flex flex-col items-start justify-between mt-4'> 
                <span className='text-primary font-medium text-lg sm:text-xl'> {type} </span> 
                <Link href={link} target='_blank' className='hover:underline underline-offset-2' >
                    <h2 className='my-2 w-full text-black text-xl sm:text-2xl lg:text-3xl font-bold '> {title} </h2>
                </Link>
                <div className='flex items-center mt-2 justify-between w-full'>
                    <Link href={github} target='_blank' className='w-6 sm:w-8' > 
                        <GithubIcon />  
                    </Link>
                    <Link href={link} target='_blank' 
                        className='mr-2 text-base text-light hover:text-dark transition-colors sm:text-lg font-semibold hover:underline ' > Visit
                    </Link>
                </div>
            </div>
        </article>
    )
}

const Projects = () => {
    return ( 
        <main className="w-full mb-8 sm:mb-12 md:mb-16 flex flex-col items-center justify-center"> 
            <div className="pt-8 sm:pt-12 md:pt-16 w-full h-full inline-block z-0 text-dark p-4 sm:p-8 md:p-16 lg:p-22"> 
                <AnimatedText
                    text="My Projects"
                    className="mb-8 sm:mb-12 md:mb-16"
                />
                <div className='grid lg:grid-cols-12 gap-24 gap-y-16 mx-2 my-2  xl:gap-x-16 lg:gap-x-8 '>
                    <div className='lg:col-span-12 mb-8 lg:mb-0 '>
                        <FeaturedProject
                            type="Aesthetic Medical Clinic"
                            title="Eleva Clinic"
                            summary="Eleva Clinic is a cutting-edge medical aesthetics clinic. I took part in developing their website to enhance their online presence and provide information about their services."
                            img="/images/eleva.png"
                            link="https://www.elevaclinic.com"
                            github="https://github.com/Sprouting-Tech/eleva-clinic"
                        />
                    </div>
                    <div className='lg:col-span-6 mb-8 lg:mb-0'>
                        <ProjectsComponent
                            type="Three JS "
                            title="Crossy Road Car Game"
                            img="/images/cargame.png"
                            link="https://github.com/OrionLynn19/Car-game-with-three.js"
                            github="https://github.com/OrionLynn19/Car-game-with-three.js"
                        />
                    </div>
                    <div className='lg:col-span-6 mb-8 lg:mb-0'>
                        <ProjectsComponent
                            type="Restaurant"
                            title="Bon Appetit"
                            img="/images/restaurant.png"
                            link="https://github.com/OrionLynn19/restaurant-bon-appetit"
                            github="https://github.com/OrionLynn19/restaurant-bon-appetit"
                        />
                    </div>
                    <div className='lg:col-span-12 mb-8 lg:mb-0'>
                        <FeaturedProject
                            type="Luxury Hotel"
                            title="Ananya Hotel and Resort"
                            summary="I took part in developing responsive glassmorpism UI and helped in writing Room Api and db helper functions"
                            img="/images/hotel_3.png"
                            link="https://github.com/OrionLynn19/ananya_hotel"
                            github="https://github.com/OrionLynn19/ananya_hotel"
                        />
                    </div>
                    <div className='lg:col-span-6'>  
                        <ProjectsComponent
                            type="Shopify E-commerce"
                            title="Jewlery Shop"
                            img="/images/shopify.png"
                            link="https://www.trinketco.com/"
                            github="https://www.trinketco.com/"
                        />
                    </div>
                    <div className='lg:col-span-6'>  
                        <ProjectsComponent
                            type="Simple Project"
                            title="toDo App"
                            img="/images/todolist.png"
                            link="https://github.com/aungthedev/team-todo-list"
                            github="https://github.com/aungthedev/team-todo-list"
                        />
                    </div>
                </div>
            </div>
        </main> 
    )
}

export default Projects;
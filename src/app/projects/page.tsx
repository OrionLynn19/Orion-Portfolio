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
    github: string } 

interface ProjectProps { 
    type: string; 
    title: string; 
    img: string; 
    link: string; 
    github: string }    

const FeaturedProject = ({type, title, summary,img, link, github}: FeaturedProjectProps) => {
    return (
        <article className='w-full flex items-center justify-between rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12 relative rounded-br-2xl'> 
        <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-3xl"/>
         <Link href={link} target='_blank' className='w-1/2 cursor-pointer overflow-hidden rounded-lg relative' >
            <Image src={img} alt={title}  fill  className='w-full h-auto' />
        </Link>

        <div className='w-1/2 flex flex-col items-start justify-between pl-6'> 
            <span className='text-primary font-medium text-xl'> {type} </span> 
            <Link href={link} target='_blank' className='hover:underline underline-offset-2' >
                <h2 className='my-2 w-full text-black text-4xl font-bold '> {title} </h2>
            </Link>
            <p className='my-2 font-medium text-dark'>  {summary} </p>
            <div className='flex items-center mt-2'>
                <Link href={github} target='_blank' className='w-10' > 
                    <GithubIcon /> 
                </Link>
                <Link href={link} target='_blank' 
                className='ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold' >
                    Visit Project
                </Link>
            </div>

        </div>

        </article>
    )
}

const ProjectsComponent = ({title, type, img, link, github}: ProjectProps) => {
    return ( 
        <article className='w-full flex  flex-col items-center justify-center rounded-3xl border border-solid border-dark bg-light p-6 relative'> 
         <div className="absolute top-0 -right-3 -bottom-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl "/>
            <Link href={link} target='_blank' className='w-full cursor-pointer overflow-hidden rounded-lg ' >
            <Image src={img} alt={title} fill className='w-full h-auto' />
        </Link>

        <div className='w-full flex flex-col items-start justify-between mt-4'> 
            <span className='text-primary font-medium text-xl'> {type} </span> 
            <Link href={link} target='_blank' className='hover:underline underline-offset-2' >
                <h2 className='my-2 w-full text-black text-3xl font-bold '> {title} </h2>
            </Link>
            
            <div className='flex items-center mt-2 justify-between w-full'>
                <Link href={github} target='_blank' className='w-8' > 
                 {" "}   <GithubIcon />  {" "}
                </Link>
                <Link href={link} target='_blank' 
                className='mr-2 text-lg  font-semibold hover:underline' >Visit
                </Link>
            </div>

        </div>
           
        </article>
    )

}
 

const Projects = () => {
    return ( 
        <main className="w-full mb-16 flex flex-col items-center justify-center"> 
            <Holder className="pt-16"> 
                <AnimatedText
                    text="My Projects"
                    className="mb-16"
                />
                <div className='grid grid-cols-12 gap-24 gay-y-32'> 
                    <div className='col-span-12'>  
                        <FeaturedProject
                            type="Featured"
                            title="Featured Project"
                            summary="This is a summary of the featured project."
                            img="/"
                            link="/"
                            github="/"
                        />
                    </div>
                    <div className='col-span-6'>  
                        <ProjectsComponent
                            type="Featured"
                            title="Featured Project"
                            img="/"
                            link="/"
                            github="/"
                        />
                    </div>
                    <div className='col-span-6'>  
                          <ProjectsComponent
                            type="Featured"
                            title="Featured Project"
                            img="/"
                            link="/"
                            github="/"
                        />
                    </div>
                    <div className='col-span-12'>  
                        <FeaturedProject
                            type="Featured"
                            title="Featured Project"
                            summary="This is a summary of the featured project."
                            img="/"
                            link="/"
                            github="/"
                        />
                    </div>
                    <div className='col-span-6'>  
                        <ProjectsComponent
                            type="Featured"
                            title="Featured Project"
                            img="/"
                            link="/"
                            github="/"
                        />
                    </div>
                    <div className='col-span-6'>  
                          <ProjectsComponent
                            type="Featured"
                            title="Featured Project"
                            img="/"
                            link="/"
                            github="/"
                        />
                    </div>

                </div>
            </Holder>
        </main> 
    )
}

export default Projects;
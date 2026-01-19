import { Inter } from "next/font/google";
import Head from "next/head";
import Image from "next/image";
import Holder from "../components/Holder"; 

import AnimatedText from "../components/AnimatedText";
import Link from "next/link"; 
import { LinkArrow } from "../components/icon";
import Hireme from "../components/Hireme"; 
import profilepic from "../../public/images/developer-pic-1.png";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <> 
      <Head>
        <title>Orion Portfolio</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='flex items-center text-dark w-full min-h-screen '> 
        <div className="pt-0 w-full h-full inline-block z-0 p-32 ">
          <div className="flex flex-col items-center w-full">
            
            
            <div className="flex items-center justify-between w-full">
              
             
              <div className="w-1/3 flex flex-col items-start mx-6 -translate-y-8">
                <p className="text-dark font-bold translate-x-4 text-lg"> Yo, My name is</p>
                <AnimatedText 
                  text="Orion Lynn" 
                  className="!text-10xl !text-left leading-tight" 
                />
              </div>

             
              <div className="flex justify-center items-center">
                <Image 
                  src={profilepic} 
                  alt="Orion photo" 
                  width={600} 
                  height={500}
                  className="rounded-full"
                />
              </div>

             
              <div className="w-1/3 flex flex-col items-center ">
                <AnimatedText 
                  text="A Full-Stack Developer, System Architect, and Tech Enthusiast." 
                  className="!text-2xl !text-left justify-self-end leading-relaxed" 
                />
              </div>
            </div>

         
            {/*<div className="flex items-center justify-center mt-8 gap-4">
              <Link 
                href="/dummy.pdf" 
                target="_blank"
                className="flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border-2 border-transparent hover:border-dark transition-colors" 
                download={true}
              > 
                Resume <LinkArrow className="w-6 ml-1" /> 
              </Link>
              <Link 
                href="mailto:lynn.orion19@gmail.com" 
                target="_blank" 
                className="flex items-center bg-light text-dark p-2.5 px-6 rounded-lg text-lg font-semibold border-2 border-dark hover:bg-dark hover:text-light transition-colors"
              > 
                Contact 
              </Link>
            </div> */}

          </div> 
        </div>
        
        <Hireme />
        
       
      </main>
    </>
  )
}

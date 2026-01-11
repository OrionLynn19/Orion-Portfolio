import { Inter } from "next/font/google";
import Head from "next/head";
import Image from "next/image";
import Holder from "../components/Holder"; 
import profilepic from "../../public/images/developer-pic-1.png" ;
import AnimatedText from "../components/AnimatedText" ;
import Link from "next/link" ; 
import { LinkArrow } from "../components/icon";
import Hireme from "../components/Hireme" ; 

const inter = Inter ( {subsets: ['latin']})
export default function Home() {
  return (
    <> 
    <Head>
      <title>Orion Portfolio</title>
      <meta name="description" content="" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main className= 'flex items-center text-dark w-full min-h-screen' > 
      <Holder className="pt-0" > 
        <div className="flex items-center justify-between w-full " > 
          <div className= "w-1/2" > 
          <Image src={profilepic} alt="" className="w-full h-auto" />
        </div>
        <div className="w-1/2 flex flex-col items-center self-center"> 
          <AnimatedText text="Turning Vision Into Reality With Code And Design." className="!text-6xl !text-left" />
          <p className="my-4 text-base font-medium ">As a skilled full-stack developer, I am dedicated to turning ideas into innovative web applications. 
Explore my latest projects and articles, showcasing my expertise in React.js and web development.</p>

          <div className = "flex items-center self-start mt-2 "> 
            <Link href= "/dummy.pdf" target={"_blank"}
            className="flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border border-solid border-transparent hover:border-dark border-2" download={true} > 
             Resume <LinkArrow className="w-6 ml-1" /> 
             </Link>
            <Link href= "mailto: lynn.orion19@gmail.com" target={"_blank"} className="ml-4 text-lg font-medium capitalize text-dark underline" > Contact </Link>
          </div>
        </div>
      </div> 
      </Holder>
      <Hireme />
      <div className=" font-bold absolute right-8 bottom-8 inline-block underline  " > 
        Thanks for visiting! 
      </div>
    </main>
    
    </>
  )
}

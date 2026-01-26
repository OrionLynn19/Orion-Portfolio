"use client";
import { Inter } from "next/font/google";
import Head from "next/head";
import Image from "next/image";
import AnimatedText from "../components/AnimatedText";
import Link from "next/link"; 
import { LinkArrow, GithubIcon } from "../components/icon";
import Hireme from "../components/Hireme"; 
import profilepic from "../../public/images/dev-pic-1].png";
import aboutpic from "../../public/images/pf4.png";
import { motion, Variants } from "framer-motion";

const inter = Inter({ subsets: ['latin'] })

const skills = ["Next.js", "AWS", "Docker", "PostgreSQL", "Kubernetes","Git"];

const projects = [
  {
    title: "Eleva Medical Clinic",
    description: "Build a cutting-edge medical aesthetics clinic website to enhance online presence and provide information about services.",
    tags: ["TypeScript", "Next.js", "Tailwind CSS"],
    link: "https://www.elevaclinic.com",
    github: "https://github.com/Sprouting-Tech/eleva-clinic",
  },
  {
    title: "Bon Appetit Restaurant",
    description: "Design Menu DB Schema along with CRUD and develop a responsive restaurant website to showcase menu offerings and facilitate online reservations.",
    tags: ["Supabase", "Framer-motion", "Next.js", ],
    link: "https://github.com/OrionLynn19/restaurant-bon-appetit",
    github: "https://github.com/OrionLynn19/restaurant-bon-appetit",
  },
  {
    title: "Ananya Hotel and Resort",
    description: "Develop responsive glassmorphism UI and implement Room API and database helper functions for a luxury hotel website.",
    tags: ["Next.js", "Tailwind", "Framer","Supabase","Three.js"],
    link: "https://github.com/OrionLynn19/ananya_hotel",
    github: "https://github.com/OrionLynn19/ananya_hotel",
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const,
      staggerChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut" as const,
    },
  },
};

export default function Home() {
  return (
    <> 
      <Head>
        <title>Orion Portfolio</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='flex flex-col items-center text-dark w-full min-h-screen'> 
        <div className="pt-0 w-full h-full inline-block z-0 p-8 md:pt-12 lg:p-28 lg:pt-16">
          <div className="flex flex-col items-center w-full">
            
           
            <div className="flex flex-col md:flex-row items-center w-full">
              {/* LEFT: Text */}
              <div className="w-full md:w-1/2 flex flex-col items-center md:items-start md:pr-8">
                <p className="text-dark font-bold text-base md:text-2xl xl:text-4xl mb-2 md:mb-4">Hello, My name is</p>
                <AnimatedText 
                  text="Orion Lynn" 
                  className=" !text-center md:!text-left leading-tight "
                />
                <AnimatedText 
                  text="A Junior Full-Stack Developer, System Architect, and Tech Enthusiast." 
                  className="!text-base md:!text-lg lg:!text-3xl leading-relaxed !text-center md:!text-left pl-0 md:pr-10 mt-4"
                />
                <motion.div 
                  className="w-full flex items-center justify-center md:justify-start mt-4"
                  variants={itemVariants}
                >
                  <Link 
                    href="/resume.pdf"
                    className="
                      flex items-center gap-2
                      bg-dark text-light
                      px-4 py-2
                      sm:px-6 sm:py-3
                      xl:px-6 xl:py-4
                      rounded-full
                      text-xs sm:text-sm md:text-sm lg:text-base
                      font-semibold
                      hover:bg-light hover:text-dark
                      active:bg-light active:text-dark
                      border-2 border-dark
                      transition-all duration-300
                      shadow-[0_0_15px_4px_rgba(27,27,27,0.3)]
                      hover:shadow-[0_0_25px_6px_rgba(234,88,12,0.4)]
                      mt-4
                    "
                  >
                    View Resume
                  </Link>
                </motion.div>
              </div>
              {/* RIGHT: Image */}
              <div className="w-full h-auto md:w-1/2 xl:w-1/3 md:translate-x-12 flex justify-center items-center my-8 md:my-0 order-first md:order-none">
                <Image 
                  src={profilepic} 
                  alt="Orion photo" 
                  width={500} 
                  height={500}
                  className="rounded-full w-[250px] md:w-[350px] lg:w-[500px] h-auto"
                />
              </div>
            </div>

            {/* ===== ABOUT SUMMARY SECTION ===== */}
            <motion.div 
              className="w-full mt-16 lg:mt-24"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={containerVariants}
            >
              <motion.h2 
                className="text-3xl lg:text-5xl font-bold text-center mb-8 lg:mb-12"
                variants={itemVariants}
              >
                Who Am I?
              </motion.h2>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
                {/* About Card */}
                <motion.div 
                  className="col-span-1 lg:col-span-7 rounded-2xl border border-light/40 bg-gradient-to-br from-light to-orange-600 backdrop-blur-lg p-6 lg:p-8 shadow-lg hover:shadow-[0_0_30px_8px_rgba(234,88,12,0.3)] transition-all duration-300"
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                >
                  <h3 className="text-xl lg:text-2xl font-bold mb-3 lg:mb-4 text-dark">About Me</h3>
                  <p className="text-dark/90 leading-relaxed mb-4 lg:mb-6 text-sm lg:text-base">
                    I&apos;m a backend developer with hands-on experience across full-stack development, strong theoretical knowledge on
                    cloud infrastructure, and e-commerce platforms. Currently preparing for 
                    <span className="font-bold"> SAP-C02</span> and 
                    <span className="font-bold"> CKA</span> certifications.
                  </p>
                  
                  {/* Skills Pills */}
                  <div className="flex flex-wrap gap-2 mb-4 lg:mb-6">
                    {skills.map((skill) => (
                      <span 
                        key={skill}
                        className="px-3 lg:px-4 py-1.5 lg:py-2 rounded-full bg-dark text-light text-xs lg:text-sm font-medium shadow-[0_0_10px_2px_rgba(27,27,27,0.3)] hover:scale-105 transition-transform"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  <Link 
                    href="/about"
                    className="inline-flex items-center text-dark font-semibold hover:translate-x-2 transition-transform text-sm lg:text-base"
                  >
                    Learn more about me →
                  </Link>
                </motion.div>

                {/* Simple Photo Card */}
                <motion.div 
                  className="flex items-center justify-center lg:col-span-5 rounded-xl bg-transparent overflow-hidden mix-blend-multiply order-first lg:order-last"
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                >
                  <Image
                    src={aboutpic}
                    alt="Orion Lynn"
                    loading="eager"
                    className="px-auto sm:items-center lg:pl-14 w-70 lg:w-95 h-auto z-10 mix-blend-darken pb-4"
                  />
                </motion.div>
              </div>
            </motion.div>

            {/* ===== PROJECTS SUMMARY SECTION ===== */}
            <motion.div 
              className="w-full mt-20 lg:mt-32"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={containerVariants}
            >
              <motion.h2 
                className="text-3xl lg:text-5xl font-bold text-center mb-3 lg:mb-4"
                variants={itemVariants}
              >
                Featured Projects
              </motion.h2>
              <motion.p 
                className="text-center text-dark/75 mb-8 lg:mb-12 text-base lg:text-lg"
                variants={itemVariants}
              >
                Some things I&apos;ve built recently
              </motion.p>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
                {projects.map((project, i) => (
                  <motion.div
                    key={project.title}
                    className="group relative rounded-2xl border border-light/40 bg-gradient-to-br from-light via-light to-orange-400 backdrop-blur-lg p-5 lg:p-6 shadow-lg hover:shadow-[0_0_30px_8px_rgba(234,88,12,0.3)] transition-all duration-300 overflow-hidden"
                    variants={itemVariants}
                    whileHover={{ scale: 1.03, y: -10 }}
                  >
                    {/* Project Number */}
                    <span className="absolute -top-4 -right-4 text-[80px] lg:text-[100px] font-bold text-dark/5 group-hover:text-dark/10 transition-colors pr-6">
                      0{i + 1}
                    </span>

                    {/* Content */}
                    <div className="relative z-10">
                      <h3 className="text-lg lg:text-xl font-bold mb-2 lg:mb-3 text-dark">{project.title}</h3>
                      <p className="text-dark/80 mb-3 lg:mb-4 leading-relaxed text-sm lg:text-base">{project.description}</p>
                      
                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-4 lg:mb-6">
                        {project.tags.map((tag) => (
                          <span 
                            key={tag}
                            className="px-2 lg:px-3 py-0.5 lg:py-1 rounded-full bg-dark/10 text-dark text-[10px] lg:text-xs font-medium border border-dark/20"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Links */}
                      <div className="flex items-center gap-3 lg:gap-4">
                        <Link 
                          href={project.link}
                          className="flex items-center gap-1 text-dark font-semibold hover:translate-x-1 transition-transform text-sm lg:text-base"
                        >
                          View Project →
                        </Link>
                        <Link 
                          href={project.github}
                          className="w-7 h-7 lg:w-8 lg:h-8 flex items-center justify-center rounded-full bg-dark text-light hover:scale-110 transition-transform"
                        >
                          <GithubIcon className="w-4 h-4 lg:w-5 lg:h-5" />
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* View All Projects Button */}
              <motion.div 
                className="flex items-center justify-center mt-8 lg:mt-12 px-4"
                variants={itemVariants}
              >
                <Link 
                  href="/projects"
                  className="flex items-center gap-2 bg-dark text-light px-6 lg:px-8 py-3 lg:py-4 rounded-full text-xs lg:text-sm font-semibold hover:bg-light hover:text-dark active:bg-light active:text-dark border-2 border-dark transition-all duration-300 shadow-[0_0_15px_4px_rgba(27,27,27,0.3)] hover:shadow-[0_0_25px_6px_rgba(234,88,12,0.4)]"
                >
                  View Projects <LinkArrow className="!w-5 lg:!w-6" />
                </Link>
              </motion.div>
            </motion.div>

          </div> 
        </div>
        
        <Hireme />
      </main>
    </>
  )
}

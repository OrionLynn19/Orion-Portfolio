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

// Featured skills
const skills = ["Next.js", "AWS", "Docker", "PostgreSQL", "TypeScript", "Kubernetes"];

// Featured projects
const projects = [
  {
    title: "E-Commerce Platform",
    description: "Full-stack Shopify integration with custom Liquid themes",
    tags: ["Shopify", "Liquid", "Node.js"],
    link: "/projects",
    github: "#",
  },
  {
    title: "Cloud Infrastructure",
    description: "AWS deployment with Kubernetes orchestration and CI/CD",
    tags: ["AWS", "K8s", "Docker"],
    link: "/projects",
    github: "#",
  },
  {
    title: "Portfolio Website",
    description: "Responsive Next.js app with Framer Motion animations",
    tags: ["Next.js", "Tailwind", "Framer"],
    link: "/projects",
    github: "#",
  },
];

// Animation variants
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
        <div className="pt-0 w-full h-full inline-block z-0 p-32">
          <div className="flex flex-col items-center w-full">
            
            {/* Hero Section */}
            <div className="flex items-center justify-between w-full">
              <div className="w-1/3 flex flex-col items-start mx-6 -translate-y-8">
                <p className="text-dark font-bold translate-x-4 text-lg">Yo, My name is</p>
                <AnimatedText 
                  text="Orion Lynn" 
                  className="!text-10xl !text-left leading-tight" 
                />
              </div>

              <div className="flex justify-center items-center">
                <Image 
                  src={profilepic} 
                  alt="Orion photo" 
                  width={500} 
                  height={400}
                  className="rounded-full sm:w-full sm:h-auto"
                />
              </div>

              <div className="w-1/3 flex flex-col items-center text-justify">
                <AnimatedText 
                  text="A Full-Stack Developer, System Architect, and Tech Enthusiast." 
                  className="!text-2xl leading-relaxed !text-justify pl-12" 
                />
              </div>
            </div>

            {/* ===== ABOUT SUMMARY SECTION ===== */}
            <motion.div 
              className="w-full mt-24"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={containerVariants}
            >
              <motion.h2 
                className="text-5xl font-bold text-center mb-12"
                variants={itemVariants}
              >
                Who Am I?
              </motion.h2>

              <div className="grid grid-cols-12 gap-8 items-center">
                {/* About Card */}
                <motion.div 
                  className="col-span-7 rounded-2xl border border-light/40 bg-gradient-to-br from-light to-orange-600 backdrop-blur-lg p-8 shadow-lg hover:shadow-[0_0_30px_8px_rgba(234,88,12,0.3)] transition-all duration-300"
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                >
                  <h3 className="text-2xl font-bold mb-4 text-dark">About Me</h3>
                  <p className="text-dark/90 leading-relaxed mb-6">
                    I&apos;m a backend developer with hands-on experience across full-stack development, 
                    cloud infrastructure, and e-commerce platforms. Currently preparing for 
                    <span className="font-bold"> SAP-C02</span> and 
                    <span className="font-bold"> CKA</span> certifications.
                  </p>
                  
                  {/* Skills Pills */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {skills.map((skill) => (
                      <span 
                        key={skill}
                        className="px-4 py-2 rounded-full bg-dark text-light text-sm font-medium shadow-[0_0_10px_2px_rgba(27,27,27,0.3)] hover:scale-105 transition-transform"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  <Link 
                    href="/about"
                    className="inline-flex items-center text-dark font-semibold hover:translate-x-2 transition-transform"
                  >
                    Learn more about me →
                  </Link>
                </motion.div>

                {/* Simple Photo Card */}
                <motion.div 
                  className="col-span-5 rounded-xl  bg-transparent  overflow-hidden mix-blend-multiply"
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                >
                  <Image
                    src={aboutpic}
                    alt="Orion Lynn"
                    className="pl-14 w-95 h-auto z-10 mix-blend-darken pb-4"
                  />
                </motion.div>
              </div>
            </motion.div>

            {/* ===== PROJECTS SUMMARY SECTION ===== */}
            <motion.div 
              className="w-full mt-32"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={containerVariants}
            >
              <motion.h2 
                className="text-5xl font-bold text-center mb-4"
                variants={itemVariants}
              >
                Featured Projects
              </motion.h2>
              <motion.p 
                className="text-center text-dark/75 mb-12 text-lg"
                variants={itemVariants}
              >
                Some things I&apos;ve built recently
              </motion.p>

              <div className="grid grid-cols-3 gap-8">
                {projects.map((project, i) => (
                  <motion.div
                    key={project.title}
                    className="group relative rounded-2xl border border-light/40 bg-gradient-to-br from-light via-light to-orange-400 backdrop-blur-lg p-6 shadow-lg hover:shadow-[0_0_30px_8px_rgba(234,88,12,0.3)] transition-all duration-300 overflow-hidden"
                    variants={itemVariants}
                    whileHover={{ scale: 1.03, y: -10 }}
                  >
                    {/* Project Number */}
                    <span className="absolute -top-4 -right-4 text-[100px] font-bold text-dark/5 group-hover:text-dark/10 transition-colors pr-6">
                      0{i + 1}
                    </span>

                    {/* Content */}
                    <div className="relative z-10">
                      <h3 className="text-xl font-bold mb-3 text-dark">{project.title}</h3>
                      <p className="text-dark/80 mb-4 leading-relaxed">{project.description}</p>
                      
                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tags.map((tag) => (
                          <span 
                            key={tag}
                            className="px-3 py-1 rounded-full bg-dark/10 text-dark text-xs font-medium border border-dark/20"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Links */}
                      <div className="flex items-center gap-4">
                        <Link 
                          href={project.link}
                          className="flex items-center gap-1 text-dark font-semibold hover:translate-x-1 transition-transform"
                        >
                          View Project →
                        </Link>
                        <Link 
                          href={project.github}
                          className="w-8 h-8 flex items-center justify-center rounded-full bg-dark text-light hover:scale-110 transition-transform"
                        >
                          <GithubIcon className="w-5 h-5" />
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* View All Projects Button */}
              <motion.div 
                className="flex items-center justify-center mt-12 px-4"
                variants={itemVariants}
              >
                <Link 
                  href="/projects"
                  className="flex items-center gap-2 bg-dark text-light px-8 py-4 rounded-full text-sm font-semibold hover:bg-light hover:text-dark border-2 border-dark transition-all duration-300 shadow-[0_0_15px_4px_rgba(27,27,27,0.3)] hover:shadow-[0_0_25px_6px_rgba(234,88,12,0.4)]"
                >
                  View Projects <LinkArrow className="!w-6" />
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

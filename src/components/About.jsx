import React from 'react'
import '../styles/about.css'
import myimg from '../assets/IMG_20240510_125925.jpg'
import { motion } from 'framer-motion'
const sectionVariants= {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0 },
 
};
const sectionVariants1= {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { type: "spring", stiffness: 50, duration: 0.7 },
  },
};
const sectionVariants2= {
  hidden: { opacity: 0, x: 100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { type: "spring", stiffness: 50, duration: 0.7 },
  },
};

function About() {
  return (
    <div   className='h-full w-full flex flex-col gap-9 justify-center items-center mt-8 py-4 sm:px-7 px-5 ' id='about'>
      <motion.h1 initial="hidden"
    whileInView="visible"
    viewport={{ once: false}}
    transition={{ duration: 0.7 }}
    variants={sectionVariants} className='h-auto  w-auto px-8 py-4 text-[1.3rem] text-indigo-950 bg-blue-200 flex items-center justify-center text-center text-nowrap  heading-gradient hover:text-[#3a59b7]'>About Me</motion.h1> 
      <div className='sm:p-8 p-4 flex md:flex-row flex-col gap-4 items-center mt-4 justify-center'>
        <motion.img initial="hidden"
    whileInView="visible"
    viewport={{ once: false }} variants={sectionVariants1} src={myimg} alt="" className='sm:w-[25vw] w-[35vw] rounded-xl' />
        <motion.p initial="hidden"
    whileInView="visible"
    viewport={{ once: false }} variants={sectionVariants2} className='text-[1.1rem] text-justify sm:p-4 p-2 text-[#e0e0cc]'>Hello, I'm Sakshi, a dedicated frontend developer with an experience in building interactive web applications. I thrive on learning new technologies and refining my skills to create responsive designs. With a strong foundation in HTML, CSS, JavaScript and React.js . I bring clean, efficient code to life that creates a visually appealing user experience. I'm driven by a passion for innovation and committed to delivering exceptional web experiences.</motion.p>
     </div> 
      
    </div>
  )
}

export default About

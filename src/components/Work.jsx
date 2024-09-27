import React from 'react'
import '../styles/about.css'
import { motion } from 'framer-motion'
import { useState } from 'react';

function Work() {
  const [animationTrigger, setAnimationTrigger] = useState(false);
  const sectionVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
  };
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 1.1,
        duration:0.2 ,
        
      },
    },
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 50 ,scale:0.7},
    visible: { opacity: 1, y: 0 ,scale:1 },
    transition:{type:'spring',duration:0.2}
  };
    const item=[
        {
            title:"Shuttle Booking Application :",
            content:" Developed a car booking web app with real-time availability, and booking options . As the sole Frontend Developer, I built UI with React and Redux Toolkit for state management, deployed on IIS.This reduced booking time by 20%, boosting user engagement and booking frequency."

        },
        {
            title:"Gatepass Generation System :",
            content:" Developed an intuitive web app for generating gate passes, streamlining visitor entry. Led frontend development with React reducing manual effort by 40% and improving operational efficiency and visitor experience."
        },
        {
            title:"News Application and Image Analytics Platform :",
            content:" Contributed to a news app and image analytics platform using HTML, CSS, JavaScript, React, and Canvas API. Focused on building user-friendly interfaces, managing state with Context API, and handling API integrations for seamless functionality."   
        },
        {
            title:"PLM Version Upgrade Project :",
            content:" Contributed to upgrading a legacy PLM system by updating core functionalities using Java, JSPs, and Java Programming Objects. Optimized web services and refactored legacy code, improving scalability, maintainability, and reducing downtime. Worked closely with users and cross-functional teams to gather requirements, incorporate feedback, and ensure the development of solutions that meet user needs and enhance overall satisfaction."
        },
       

    ]

  return (
    <div className='mb-6 h-full w-full flex flex-col gap-9 justify-center items-center mt-8 py-4 sm:px-7 px-5' id='work'>
      <motion.h1  initial="hidden"
    whileInView="visible"
    viewport={{ once: false }}
    transition={{ duration: 0.7 }}
    variants={sectionVariants} className='h-auto w-auto  p-4 text-[1.3rem] text-indigo-950 bg-blue-200 flex items-center justify-center text-center text-nowrap  heading-gradient hover:text-[#3a59b7]'>Work Experience</motion.h1> 
      <div className='sm:p-8 p-4 flex flex-col gap-5'>
        <div className='flex flex-col sm:p-4 p-2'>
        <motion.h1 initial="hidden"
    whileInView="visible"
    viewport={{ once: false }}
    transition={{ duration: 0.7 }}
    variants={sectionVariants} className='text-[1.4rem] font-medium text-[#FB773C]'>Software Engineer  |  July 2023 - Present</motion.h1>
        <motion.h2 initial="hidden"
    whileInView="visible"
    viewport={{ once: false }}
    transition={{ duration: 0.7 }}
    variants={sectionVariants} className='text-[1.2rem] font-medium text-[#fb783ced]'>Larsen & Toubro</motion.h2>
        </div>
       
       <motion.ul initial="hidden"
      animate={animationTrigger ? 'visible' : 'hidden'}
      onViewportEnter={() => setAnimationTrigger(true)}
      onViewportLeave={() => setAnimationTrigger(false)}
      variants={containerVariants} className=' flex flex-col gap-3 items-center justify-center sm:p-4 p-2'>
        {
            item.map((work)=><motion.li variants={itemVariants} key={work.title} className='text-[#e0e0cc] list-disc text-[1.1rem] text-justify'><span className='font-bold text-[#FDDE6C]'>{work.title}</span><span>{work.content}</span></motion.li>)
        }
       </motion.ul>
      </div>
      
    </div>
  )
}

export default Work


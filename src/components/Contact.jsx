import React from 'react'
import '../styles/contact.css'
import phone from '../assets/phone.png'
import email from '../assets/email.png'
import location from '../assets/location.png'
import git from '../assets/github.png'
import linkedin from '../assets/linkedin.png'
import resume from '../assets/google-docs.png'
import { useState } from 'react'
import { delay, motion } from 'framer-motion'

function Contact() {
const [hover, sethover] = useState(false)
const [hover1, sethover1] = useState(false)
const [hover2, sethover2] = useState(false)
const [animationTrigger, setAnimationTrigger] = useState(false);

const sectionVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0 },
}; 

const heroTextVariants1 = {
  hidden: { opacity: 0, y: -100 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 50, duration: 0.8 },
  },
};
const heroTextVariants2 = {
  hidden: { opacity: 0, y: -200 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 50, duration: 0.8 },
  },
};
const heroTextVariants3 = {
  hidden: { opacity: 0, y: -300 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 50, duration: 0.8 },
  },
};
const heroTextVariants4 = {
  hidden: { opacity: 0, y: 300 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 50, duration: 0.8 ,delay:0.4},
  },
};
const heroTextVariants5 = {
  hidden: { opacity: 0, y: 300 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 50, duration: 0.8 ,delay:0.8 },
  },
};
const heroTextVariants6 = {
  hidden: { opacity: 0, y: 300 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 50, duration: 0.8 ,delay:1.2},
  },
};

  return (
    <div className=' h-full w-full flex flex-col gap-9 justify-center items-center mt-9 py-4 sm:px-7 px-5 overflow-hidden' id='contact'>
      <motion.h1 initial="hidden"
    whileInView="visible"
    viewport={{ once: false}}
    transition={{ duration: 0.7 }}
    variants={sectionVariants} className='h-auto sm:w-[20%] w-auto py-4 px-9 text-[1.3rem] text-indigo-950 bg-blue-200 flex items-center justify-center text-center text-nowrap  headingcontact hover:text-[#3a59b7]'>Contact Me</motion.h1> 
      <div className='flex justify-center sm:p-8 p-6 items-center  '>
      <div className=' box-container  flex flex-col justify-center items-center gap-5 '>
      <motion.a initial="hidden"
        animate={animationTrigger ? 'visible' : 'hidden'}
        onViewportEnter={() => setAnimationTrigger(true)}
        onViewportLeave={() => setAnimationTrigger(false)}
        variants={heroTextVariants1} href="tel:+918770095181" className='flex justify-center items-center'>
      <div className='box1 flex  items-center justify-center sm:p-4 p-2 rounded-lg gap-4'>
           <img src={phone} alt="phone" />
           <p >+91 8770095181</p>
         </div>
      </motion.a>

      <motion.a initial="hidden"
        animate={animationTrigger ? 'visible' : 'hidden'}
        onViewportEnter={() => setAnimationTrigger(true)}
        onViewportLeave={() => setAnimationTrigger(false)}
        variants={heroTextVariants2} href="mailto:sakshikesharwani14@gmail.com" className='flex justify-center items-center'>
      <div className='box1 flex  items-center justify-center sm:p-4 p-2 rounded-lg sm:gap-4 gap-3'>
           <img src={email} alt="phone" />
           <p>sakshikesharwani14@gmail.com</p>
         </div>
      </motion.a>
 
      <motion.a initial="hidden"
        animate={animationTrigger ? 'visible' : 'hidden'}
        onViewportEnter={() => setAnimationTrigger(true)}
        onViewportLeave={() => setAnimationTrigger(false)}
        variants={heroTextVariants3} href="https://www.google.com/maps?q=mumbai" target="_blank" className='flex justify-center items-center'>
      <div className='box1 flex  items-center justify-center sm:p-4 p-2 rounded-lg gap-4'>
           <img src={location} alt="phone" />
           <p>Mumbai , Maharashtra</p>
         </div>
      </motion.a>

         
      </div>
      </div>
      <div  className='flex gap-4 w-full items-center justify-center '>
        <motion.a initial="hidden"
        animate={animationTrigger ? 'visible' : 'hidden'}
        onViewportEnter={() => setAnimationTrigger(true)}
        onViewportLeave={() => setAnimationTrigger(false)}
        variants={heroTextVariants4} href="https://www.linkedin.com/in/sakshi-kesharwani-96567421a/" target='_blank'>
        <div className='flex justify-start gap-2 p-2 overflow-hidden  items-center  rounded-xl gitcontact ' onMouseEnter={()=>sethover(true)} onMouseLeave={()=>sethover(false)} >
            <img src={linkedin} alt='linkedin' />
            {hover && <span className='text-nowrap text-center mr-4'>Sakshi</span>
            }
        </div>
        </motion.a>
        <motion.a initial="hidden"
        animate={animationTrigger ? 'visible' : 'hidden'}
        onViewportEnter={() => setAnimationTrigger(true)}
        onViewportLeave={() => setAnimationTrigger(false)}
        variants={heroTextVariants5} href="https://github.com/Sakshii-14" target='_blank'>
        <div className='flex justify-start gap-2 p-2 overflow-hidden items-center bg-slate-200 rounded-xl gitcontact  ' onMouseEnter={()=>sethover1(true)} onMouseLeave={()=>sethover1(false)} >
            <img src={git} alt='git'  />
            {hover1 && <span className='text-nowrap text-center mr-4'>Sakshii-14</span>
            }
        </div>
        </motion.a>
        
        <motion.a href="https://drive.google.com/file/d/1zvEAW7a0rQrOnIU0zL78RRGwgtiWGIbB/view?usp=sharing" target="_blank" rel="noopener noreferrer" download="Sakshi_Kesharwani_Resume.pdf" initial="hidden"
        animate={animationTrigger ? 'visible' : 'hidden'}
        onViewportEnter={() => setAnimationTrigger(true)}
        onViewportLeave={() => setAnimationTrigger(false)}
        variants={heroTextVariants6} >
        <div className='flex justify-start gap-2 p-2 items-center bg-slate-200 overflow-hidden rounded-xl gitcontact ' onMouseEnter={()=>sethover2(true)} onMouseLeave={()=>sethover2(false)} >
            <img src={resume} alt='resume' />
            {hover2 && <span className='text-nowrap text-center mr-4'>Resume</span>
            }
        </div>
        </motion.a>
        
      </div>

    </div>
  )
}

export default Contact

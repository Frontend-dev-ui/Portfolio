import React from 'react'
import '../styles/home.css'
import { useState,useEffect } from 'react';
import { motion } from 'framer-motion';

function Home() {

const [animationTrigger, setAnimationTrigger] = useState(false);

useEffect(() => {
  const img = new Image();
  img.src = 'https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/People%20with%20activities/Woman%20Raising%20Hand%20Light%20Skin%20Tone.png'; 
}, []);

const text = "A Frontend Developer";
  
const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, 
    },
  },
};
const letter = {
  hidden: { opacity: 0, x: 50 }, 
  visible: {
    opacity: 1,
    x: 0, 
    transition: { type: 'spring', stiffness: 80, damping: 10, duration: 0.1},
  },
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
  hidden: { opacity: 0, y: -160 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 50, duration: 0.8,delay:0.2 },
  },
};
const heroimg = {
  hidden: { opacity: 0, x: 400 , scale:0.2 },
  visible: {
    opacity: 1,
    x: 0,
    scale:1,
    transition:{  type: 'spring',  
      stiffness: 150,  
      damping: 30,     
      duration: 0.8,   
      delay: 0.2  ,mass:0.5, bounce:0.5},
  },
};

  return (
    <div className='w-full h-full sm:py-8 sm:px-[5rem] py-6 px-8 flex flex-col gap-4 ' id='home'>
      <p className='text-slate-400 sm:text-[1.5rem] text-[1.1rem]'>Hey There , I'm</p>
      <div className=' flex items-center justify-between lg:flex-row flex-wrap  xl:gap-[9rem] lg:gap-[5rem] md:gap-[2rem]'>
      <motion.h1   className=' font-bold sm:text-[5.5rem] text-[3rem] flex flex-col text-[#faa64c] glowtext'><motion.span initial="hidden"
        animate={animationTrigger ? 'visible' : 'hidden'}
        onViewportEnter={() => setAnimationTrigger(true)}
        onViewportLeave={() => setAnimationTrigger(false)}
        variants={heroTextVariants1} className=' leading-10'>Sakshi</motion.span> <motion.span initial="hidden"
        animate={animationTrigger ? 'visible' : 'hidden'}
        onViewportEnter={() => setAnimationTrigger(true)}
        onViewportLeave={() => setAnimationTrigger(false)}
        variants={heroTextVariants2}>Kesharwani</motion.span></motion.h1>
      <motion.img initial="hidden"
        animate={animationTrigger ? 'visible' : 'hidden'}
        onViewportEnter={() => setAnimationTrigger(true)}
        onViewportLeave={() => setAnimationTrigger(false)}
        variants={heroimg} src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/People%20with%20activities/Woman%20Raising%20Hand%20Light%20Skin%20Tone.png" alt="Woman Raising Hand Light Skin Tone" className='lg:h-[18rem] lg:w-[25rem] md:h-[14rem] md:w-[20rem]'/>
      </div>
      
      <motion.div
        className="flex justify-start items-center"
        variants={container}
        initial="hidden"
        animate={animationTrigger ? 'visible' : 'hidden'}
        onViewportEnter={() => setAnimationTrigger(true)}
        onViewportLeave={() => setAnimationTrigger(false)}
      >
        {text.split('').map((char, index) => (
          <motion.span
            key={index}
            variants={letter}
            className="text-[ivory] sm:text-[2rem] text-[1.5rem] font-medium tracking-wide"
          >
            {char === ' ' ? '\u00A0' : char}
          </motion.span>
        ))}
      </motion.div>
      <p className='sm:text-[1.8rem] text-[1.5rem] text-indigo-500 font-medium'>I turn pixels into powerful user experiences.</p>
    </div>
  )
}

export default Home

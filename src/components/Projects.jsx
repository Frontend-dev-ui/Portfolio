import React from 'react'
import blog from'../assets/blog.png'
import '../styles/projects.css'
import git from '../assets/github.png'
import live from '../assets/turn.png'
import Tippy from '@tippyjs/react';
import world from '../assets/world.png'
import word from '../assets/word.png'
import { useState } from 'react'
import { motion } from "framer-motion";



function Projects() {
  const [animationTrigger, setAnimationTrigger] = useState(false);
  const [animationTrigger1, setAnimationTrigger1] = useState(false);
  const [animationTrigger2, setAnimationTrigger2] = useState(false);

  const sectionVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
  }; 
  const sectionVariants1 = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0 },
  }; 
  const sectionVariants2 = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
  }; 

  const projectcontent = {
    hidden: { opacity: 0,scale:0.5  },
    visible: {
      opacity: 1,
      
      scale:1,
      transition:{  type: 'spring',  
        stiffness: 150,  
        damping: 30,     
        duration: 1,   
        mass:0.5, bounce:0.5},
    },
  };
  const projectcontent1 = {
    hidden: { opacity: 0,scale:0.5  },
    visible: {
      opacity: 1,
      
      scale:1,
      transition:{  type: 'spring',  
        stiffness: 150,  
        damping: 30,     
        duration: 1,   
        mass:0.5, bounce:0.5},
    },
  };
  const projectcontent2 = {
    hidden: { opacity: 0,scale:0.5  },
    visible: {
      opacity: 1,
      
      scale:1,
      transition:{  type: 'spring',  
        stiffness: 150,  
        damping: 30,     
        duration: 1,   
        mass:0.5, bounce:0.5},
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

const [hovergit, sethovergit] = useState(false)
const [hoverlive, sethoverlive] = useState(false)

  return (
    <div className='h-full w-full flex  flex-col gap-9 justify-center items-center mt-8 py-4 sm:px-10 px-5 ' id='projects'>
     <motion.h1 initial="hidden"
    whileInView="visible"
    viewport={{ once: false}}
    transition={{ duration: 0.7 }}
    variants={sectionVariants} className="h-auto sm:w-[21%] w-auto p-4  text-[1.3rem] text-indigo-950 bg-blue-200 flex items-center justify-center text-center text-nowrap headinggradient hover:text-[#3a59b7] transition-all duration-150">
     My Projects
      </motion.h1>
      <div className='flex flex-col justify-center items-center gap-10'>
        {/* start */}
      <motion.div initial="hidden"
    whileInView="visible"
    viewport={{ once: false}}
    transition={{ duration: 0.8 }}
    variants={sectionVariants} className='sm:p-6 p-4 flex flex-col gap-4 mt-6 items-center justify-center project relative'>
      <div className='absolute  h-[8px] w-full overlay'></div>
       <motion.div   initial="hidden"
      animate={animationTrigger ? 'visible' : 'hidden'}
      onViewportEnter={() => setAnimationTrigger(true)}
      onViewportLeave={() => setAnimationTrigger(false)}
      variants={projectcontent}
      
       className='flex  sm:p-4 flex-col justify-center items-center p-2 gap-4'>
       <h1 className='text-[2.5rem] font-semibold glowtxt '>SoulScribe</h1>
        
        <div className='flex gap-8 items-center justify-center sm:flex-row flex-col'>
        <img src={blog} alt="" className='sm:w-[50%] rounded-xl blogimg' />
          <p className='text-[1.1rem]  font-semibold z-10 blogcontent'>
            Built a fully-featured, dynamic blog platform that empowers users to log in or sign up, seamlessly create, update, and delete blog posts, and explore blogs from other users. The platform provides an intuitive experience for content sharing within a vibrant blogging community.
          </p>
          
        </div>
         
     </motion.div>
     <motion.div initial="hidden"
      animate={animationTrigger ? 'visible' : 'hidden'}
      onViewportEnter={() => setAnimationTrigger(true)}
      onViewportLeave={() => setAnimationTrigger(false)}
      variants={projectcontent} className='w-full sm:p-4 flex-wrap p-2 flex gap-6 justify-center items-center '>
          <div className='flex  gap-7  flex-1 justify-center items-center '>
            
             <motion.a initial="hidden"
        animate={animationTrigger ? 'visible' : 'hidden'}
        onViewportEnter={() => setAnimationTrigger(true)}
        onViewportLeave={() => setAnimationTrigger(false)}
        variants={heroTextVariants4}  href="https://github.com/Sakshii-14/SoulScribe.git" target='_blank' className='z-10'>
              <div className='flex justify-start gap-2 p-2 overflow-hidden items-center  rounded-xl gitContact z-10 ' onMouseEnter={()=>sethovergit(true)} onMouseLeave={()=>sethovergit(false)} >
            <img src={git} alt='git'  />
            {hovergit && <span className='text-nowrap text-center mr-4 font-medium'>Github</span>
            }
           </div>
           </motion.a>
           <motion.a initial="hidden"
        animate={animationTrigger ? 'visible' : 'hidden'}
        onViewportEnter={() => setAnimationTrigger(true)}
        onViewportLeave={() => setAnimationTrigger(false)}
        variants={heroTextVariants5}  href="https://soul-scribe.vercel.app" target='_blank' className='z-10'>
              <div className='flex justify-start gap-2 p-2 overflow-hidden items-center  rounded-xl gitContact z-10 ' onMouseEnter={()=>sethoverlive(true)} onMouseLeave={()=>sethoverlive(false)} >
            <img src={live} alt='live'  />
            {hoverlive && <span className='text-nowrap text-center mr-4 font-medium'>Live</span>
            }
        </div>
        </motion.a>
          </div>
            
          <div className='flex skill gap-4 justify-center items-center flex-wrap  sm:px-4 px-1'>
          <Tippy  content='HTML' theme="light"  animation="scale-extreme"  placement="bottom">
            
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/512px-HTML5_logo_and_wordmark.svg.png" alt="html" />
            </Tippy>
            <Tippy  content='React'  animation="scale-extreme"  placement="bottom">
            
            <img src="https://www.svgrepo.com/show/452092/react.svg" alt="react" />
            </Tippy>
            <Tippy  content='Tailwind'   animation="scale-extreme"  placement="bottom">
            
            <img src="https://cdn.icon-icons.com/icons2/2699/PNG/512/tailwindcss_logo_icon_170649.png" alt="tailwindcss" />
            </Tippy>
            <Tippy  content='Appwrite'   animation="scale-extreme"  placement="bottom">
            
            <img src="https://raw.githubusercontent.com/GodotNuts/appwrite-sdk/3dbcd3ea1f55e3afc8fb7ad6bd8ecb78176f74bb/addons/appwrite-sdk/icon.svg" alt="appwrite" />
            </Tippy>
            <Tippy  content='RTK'   animation="scale-extreme"  placement="bottom">
            
            <img src="https://cdn-images-1.medium.com/max/480/1*2YG993b8WrHwvmAe7WckAA.png" alt="rtk" />
            </Tippy>
            <Tippy  content='Vercel'   animation="scale-extreme"  placement="bottom">
            
            <img src="https://www.svgrepo.com/show/354512/vercel.svg" alt="vercel" />
            </Tippy>
            <Tippy  content='CSS'   animation="scale-extreme"  placement="bottom">
            
            <img src="https://cdn.worldvectorlogo.com/logos/css-3.svg" alt="css" />
            </Tippy>
          </div>
          </motion.div>

    
    
      </motion.div>
    {/* end */}
    {/* start */}
    <motion.div initial="hidden"
    whileInView="visible"
    viewport={{ once: false}}
    transition={{ duration: 0.8 }}
    variants={sectionVariants1} className='sm:p-6 p-4 flex flex-col gap-4 mt-6 items-center justify-center project relative'>
      <div className='absolute  h-[8px] w-full overlay'></div>
       <motion.div initial="hidden"
      animate={animationTrigger1 ? 'visible' : 'hidden'}
      onViewportEnter={() => setAnimationTrigger1(true)}
      onViewportLeave={() => setAnimationTrigger1(false)}
      variants={projectcontent1} className='flex  sm:p-4 flex-col justify-center items-center p-2 gap-4'>
       <h1 className='text-[2.5rem] font-semibold glowtxt '>WorldWhiz</h1>
        
        <div className='flex gap-8 items-center justify-center sm:flex-row flex-col'>
        <img src={world} alt="" className='sm:w-[50%] rounded-xl blogimg' />
          <p className='text-[1.1rem]  font-semibold z-10 blogcontent'>
          Developed a dynamic country website that serves as a gateway to global exploration. It features a rich repository of country information, an engaging quiz to test knowledge, and an innovative translation app. This platform offers users an immersive experience, fostering curiosity and a deeper understanding of the world.
          </p>
          
        </div>
         
     </motion.div>
     <motion.div initial="hidden"
      animate={animationTrigger1 ? 'visible' : 'hidden'}
      onViewportEnter={() => setAnimationTrigger1(true)}
      onViewportLeave={() => setAnimationTrigger1(false)}
      variants={projectcontent1} className='w-full sm:p-4 flex-wrap p-2 flex gap-6 justify-center items-center '>
          <div className='flex  gap-7  flex-1 justify-center items-center '>
            
            <motion.a initial="hidden"
        animate={animationTrigger1 ? 'visible' : 'hidden'}
        onViewportEnter={() => setAnimationTrigger1(true)}
        onViewportLeave={() => setAnimationTrigger1(false)}
        variants={heroTextVariants4}  href="https://github.com/Sakshii-14/WorldWhiz.git" target='_blank' className='z-10'>
              <div className='flex justify-start gap-2 p-2 overflow-hidden items-center  rounded-xl gitContact z-10 ' onMouseEnter={()=>sethovergit(true)} onMouseLeave={()=>sethovergit(false)} >
            <img src={git} alt='git'  />
            {hovergit && <span className='text-nowrap text-center mr-4 font-medium'>Github</span>
            }
            </div>
           </motion.a>
            
            <motion.a initial="hidden"
        animate={animationTrigger1 ? 'visible' : 'hidden'}
        onViewportEnter={() => setAnimationTrigger1(true)}
        onViewportLeave={() => setAnimationTrigger1(false)}
        variants={heroTextVariants5}  href="https://world-whiz-koz7oxekx-sakshi-kesharwanis-projects.vercel.app" target='_blank' className='z-10'>
              <div className='flex justify-start gap-2 p-2 overflow-hidden items-center  rounded-xl gitContact z-10 ' onMouseEnter={()=>sethoverlive(true)} onMouseLeave={()=>sethoverlive(false)} >
            <img src={live} alt='live'  />
            {hoverlive && <span className='text-nowrap text-center mr-4 font-medium'>Live</span>
            }
            </div>
           </motion.a>
          </div>
            
          <div className='flex skill gap-4 justify-center items-center flex-wrap  sm:px-4 px-1'>
          <Tippy  content='HTML' theme="light"  animation="scale-extreme"  placement="bottom">
            
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/512px-HTML5_logo_and_wordmark.svg.png" alt="html" />
            </Tippy>
            <Tippy  content='React'  animation="scale-extreme"  placement="bottom">
            
            <img src="https://www.svgrepo.com/show/452092/react.svg" alt="react" />
            </Tippy>
            <Tippy  content='Tailwind'   animation="scale-extreme"  placement="bottom">
            
            <img src="https://cdn.icon-icons.com/icons2/2699/PNG/512/tailwindcss_logo_icon_170649.png" alt="tailwindcss" />
            </Tippy>
            
            <Tippy  content='RTK'   animation="scale-extreme"  placement="bottom">
            
            <img src="https://cdn-images-1.medium.com/max/480/1*2YG993b8WrHwvmAe7WckAA.png" alt="rtk" />
            </Tippy>
            <Tippy  content='Vercel'   animation="scale-extreme"  placement="bottom">
            
            <img src="https://www.svgrepo.com/show/354512/vercel.svg" alt="vercel" />
            </Tippy>
            <Tippy  content='CSS'   animation="scale-extreme"  placement="bottom">
            
            <img src="https://cdn.worldvectorlogo.com/logos/css-3.svg" alt="css" />
            </Tippy>
          </div>
          </motion.div>

    
    
      </motion.div>
      {/* end */}
      {/* start */}
      <motion.div initial="hidden"
    whileInView="visible"
    viewport={{ once: false}}
    transition={{ duration: 0.8 }}
    variants={sectionVariants2} className='sm:p-6 p-4 flex flex-col gap-4 mt-6 items-center justify-center project relative'>
      <div className='absolute  h-[8px] w-full overlay'></div>
       <motion.div initial="hidden"
      animate={animationTrigger2 ? 'visible' : 'hidden'}
      onViewportEnter={() => setAnimationTrigger2(true)}
      onViewportLeave={() => setAnimationTrigger2(false)}
      variants={projectcontent2} className='flex  sm:p-4 flex-col justify-center items-center p-2 gap-4'>
       <h1 className='text-[2.5rem] font-semibold glowtxt '>WordScramble</h1>
        
        <div className='flex gap-8 items-center justify-center sm:flex-row flex-col'>
        <img src={word} alt="" className='sm:w-[50%] rounded-xl blogimg' />
          <p className='text-[1.1rem]  font-semibold z-10 blogcontent'>
          Developed a word scramble website where players can enjoy the challenge of decoding jumbled words. The game offers limited chances to guess the correct words, providing an engaging experience.Perfect for honing vocabulary skills while having fun!
          </p>
          
        </div>
         
     </motion.div>
     <motion.div initial="hidden"
      animate={animationTrigger2 ? 'visible' : 'hidden'}
      onViewportEnter={() => setAnimationTrigger2(true)}
      onViewportLeave={() => setAnimationTrigger2(false)}
      variants={projectcontent2} className='w-full sm:p-4 flex-wrap p-2 flex gap-6 justify-center items-center '>
          <div className='flex  gap-7  flex-1 justify-center items-center '>
            
              
            
            <motion.a initial="hidden"
        animate={animationTrigger2 ? 'visible' : 'hidden'}
        onViewportEnter={() => setAnimationTrigger2(true)}
        onViewportLeave={() => setAnimationTrigger2(false)}
        variants={heroTextVariants4}  href="https://github.com/Sakshii-14/WordScramble.git" target='_blank' className='z-10'>
              <div className='flex justify-start gap-2 p-2 overflow-hidden items-center  rounded-xl gitContact z-10 ' onMouseEnter={()=>sethovergit(true)} onMouseLeave={()=>sethovergit(false)} >
            <img src={git} alt='git'  />
            {hovergit && <span className='text-nowrap text-center mr-4 font-medium'>Github</span>
            }
            </div>
           </motion.a>
            
            <motion.a initial="hidden"
        animate={animationTrigger2 ? 'visible' : 'hidden'}
        onViewportEnter={() => setAnimationTrigger2(true)}
        onViewportLeave={() => setAnimationTrigger2(false)}
        variants={heroTextVariants5}  href="https://word-scramble.vercel.app" target='_blank' className='z-10'>
              <div className='flex justify-start gap-2 p-2 overflow-hidden items-center  rounded-xl gitContact z-10 ' onMouseEnter={()=>sethoverlive(true)} onMouseLeave={()=>sethoverlive(false)} >
            <img src={live} alt='live'  />
            {hoverlive && <span className='text-nowrap text-center mr-4 font-medium'>Live</span>
            }
            </div>
           </motion.a>
          </div>
            
          <div className='flex skill gap-4 justify-center items-center flex-wrap  sm:px-4 px-1'>
          <Tippy  content='HTML'   animation="scale-extreme"  placement="bottom">
            
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/512px-HTML5_logo_and_wordmark.svg.png" alt="html" />
            </Tippy>
            <Tippy  content='JS'   animation="scale-extreme"  placement="bottom">
            
            <img src="https://cdn.worldvectorlogo.com/logos/javascript-1.svg" alt="js" />
            </Tippy>
            
            <Tippy  content='Tailwind'   animation="scale-extreme"  placement="bottom">
            
            <img src="https://cdn.icon-icons.com/icons2/2699/PNG/512/tailwindcss_logo_icon_170649.png" alt="tailwindcss" />
            </Tippy>
            
            
            <Tippy  content='Vercel'   animation="scale-extreme"  placement="bottom">
            
            <img src="https://www.svgrepo.com/show/354512/vercel.svg" alt="vercel" />
            </Tippy>
            <Tippy  content='CSS'   animation="scale-extreme"  placement="bottom">
            
            <img src="https://cdn.worldvectorlogo.com/logos/css-3.svg" alt="css" />
            </Tippy>
          </div>
          </motion.div>

    
    
      </motion.div>
      {/* end */}
     
    </div>
    
    </div>
    
  )
}

export default Projects
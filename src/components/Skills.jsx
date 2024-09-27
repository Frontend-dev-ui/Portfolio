import React from 'react';
import '../styles/skills.css';
import Tippy from '@tippyjs/react';
import { motion } from 'framer-motion';
import { useState } from 'react';



function Skills() {
  const [animationTrigger, setAnimationTrigger] = useState(false);

  const sectionVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
  };

  const skillimg = {
    hidden: { opacity: 0 , scale:0.3 },
    visible: {
      opacity: 1,
      
      scale:1,
      transition:{  type: 'spring',  
        stiffness: 150,  
        damping: 30,     
        duration: 0.8,   
        mass:0.5, bounce:0.5},
    },
  };

  const logos = [
    {
      title:'HTML',
      img:'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/512px-HTML5_logo_and_wordmark.svg.png'
    },

    {
      title:'CSS',
      img:'https://cdn.worldvectorlogo.com/logos/css-3.svg'
    },
    {
      title:'JavaScript',
      img:'https://cdn.worldvectorlogo.com/logos/javascript-1.svg'
    },
    {
      title:'React',
      img:'https://www.svgrepo.com/show/452092/react.svg'
    },
    {
      title:'Tailwind CSS',
      img:'https://cdn.icon-icons.com/icons2/2699/PNG/512/tailwindcss_logo_icon_170649.png',
    },
    {
      title:'Appwrite',
      img:'https://raw.githubusercontent.com/GodotNuts/appwrite-sdk/3dbcd3ea1f55e3afc8fb7ad6bd8ecb78176f74bb/addons/appwrite-sdk/icon.svg'
    },
    {
      title:'Node js',
      img:'https://www.svgrepo.com/show/376337/node-js.svg'
    },
    {
      title:'Express.js',
      img:'https://www.svgrepo.com/show/330398/express.svg'
    },
    {
      title:'Redux Toolkit',
      img:'https://cdn-images-1.medium.com/max/480/1*2YG993b8WrHwvmAe7WckAA.png'
    },
    {
      title:'Github',
      img:'https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg'
    },
    {
      title:'Vercel',
      img:'https://www.svgrepo.com/show/354512/vercel.svg'
    },
    {
      title:'Bootstrap',
      img:'https://cdn-icons-png.flaticon.com/512/5968/5968672.png'
    },
    {
      title:'Chakra UI',
      img:'https://img.icons8.com/?size=512&id=r9QJ0VFFrn7T&format=png'
    },

    {
      title:'Java',
      img:'https://cdn-icons-png.flaticon.com/512/226/226777.png'
    }

  ]

  return (
    <div  className="h-full w-full flex flex-col gap-9 justify-center items-center mt-10 py-4 sm:px-7 px-5" id='skills'>
      <motion.h1 initial="hidden"
    whileInView="visible"
    viewport={{ once: false}}
    transition={{ duration: 0.7 }}
    variants={sectionVariants} className="h-auto sm:w-[20%] w-auto py-4 px-9 text-[1.3rem] text-indigo-950 bg-blue-200 flex items-center justify-center text-center text-nowrap headinggradient hover:text-[#3a59b7] transition-all duration-150">
        Skills
      </motion.h1>
     

      <motion.div initial="hidden"
      animate={animationTrigger ? 'visible' : 'hidden'}
      onViewportEnter={() => setAnimationTrigger(true)}
      onViewportLeave={() => setAnimationTrigger(false)}
      variants={skillimg} className='grid sm:p-8 p-6 mt-4 sm:grid-cols-4 grid-cols-3 lg:gap-[8rem] md:gap-[7rem] sm:gap-[6.5rem] gap-[5rem]  place-items-center'>
        {
          logos.map((logo)=><div className="coin-container " key={logo.title}>
         
          <div className="coin-side front ">
          <Tippy  content={logo.title}   animation="scale-extreme"  placement="bottom">
            <img
              src={logo.img}
              alt={logo.title}
              className="h-[9vh]"
            />
            </Tippy>
          </div>
  
          <div className="coin-side back ">
          <Tippy  content={logo.title}   animation="scale-extreme"  placement="bottom">
            <img
              src={logo.img}
              alt={logo.title}
              className="h-[9vh]"
            />
            </Tippy>
          </div>
          
          
        </div>)
        }
      </motion.div>
      
    </div>
  );
}

export default Skills;

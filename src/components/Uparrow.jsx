import React from 'react'
import '../styles/up.css'
import { useEffect,useState } from 'react';

function Uparrow() {
const [scrolled, setscrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
          const scrollTop = window.scrollY;
          if (scrollTop < 500) { 
            setscrolled(false);
          } else {
            setscrolled(true);
          }
        };
      
        window.addEventListener('scroll', handleScroll);
      
        
        return () => window.removeEventListener('scroll', handleScroll);
      }, []);

  return (
    <a href="/#home" className={`fixed bottom-[2rem] z-20 right-5 p-1 rounded-full h-[8vh] w-[8vh]  flex items-center justify-center bg-[#e1cff5] transition-all duration-150 uparrow hover:bg-[#d5b7fa] ${scrolled ? 'block' : 'hidden'}`}>
        <button className='h-full w-full flex items-center justify-center' ><img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Telegram-Animated-Emojis/main/Symbols/Top%20Arrow.webp" alt="Top Arrow" className=' invert w-full h-full object-contain' /></button>
    </a>
  )
}

export default Uparrow

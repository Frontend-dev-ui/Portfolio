import React from 'react'
import '../styles/nav.css'
import { useState ,useEffect } from 'react';
import menu from '../assets/menu.png'
import cross from '../assets/cross.png'



function Navbar() {
const [scrolled, setscrolled] = useState(false)
const [showmenu, setshowmenu] = useState(false)


useEffect(() => {
  const handleScroll = () => {
    const scrollTop = window.scrollY;
    if (scrollTop > 70) { 
      setscrolled(true);
    } else {
      setscrolled(false);
    }
  };

  window.addEventListener('scroll', handleScroll);

  
  return () => window.removeEventListener('scroll', handleScroll);
}, []);
    const navItems = [
    {
      name: "Home",
      id: "#",
      
    },
    {
      name: "About",
      id: "#about",
      
    },
    {
      name: "Work",
      id: "#work",
      
    },
    {
        name: "Skills",
        id: "#skills",
        
      },
    {
      name: "Projects",
      id: "#projects",
      
    },
    {
      name: "Contact",
      id: "#contact",
      
    },
  ];
  return (
    
      <div  className={`w-full h-[4rem] fixed top-0 flex justify-between items-center z-30 sm:px-6 px-3 transition-colors duration-300 ${scrolled ? 'navscrolled' : 'bg-[#0c1551]'}`}>
     <div className=' bg-blue-900 px-4 py-1 rounded-xl'>
      <p className='text-transparent bg-clip-text bg-gradient-to-r from-pink-500  to-purple-400 text-[1.8rem] font-bold tracking-widest text-shadow-lg'>
       SK
       </p>
        
     </div>




    <div className=' md:block hidden '>
    <ul className='flex gap-3 items-center justify-center  '>
    {navItems.map((item)=><a href={item.id} key={item.id}>
      <li  className='text-[#9299e6] tracking-wide font-medium text-[1.2rem] p-2 flex items-center hover:text-[#c6aefa] justify-center cursor-pointer  navitem'>{item.name}</li>
    </a>
  )}
   <a href="https://drive.google.com/file/d/1uGTDX9g7UAAXcJ4HI8bQ5I3KNNtTFbmU/view?usp=sharing" target="_blank" rel="noopener noreferrer" download="Sakshi_Kesharwani_Resume.pdf">
   <li className='text-[#9299e6]  tracking-wide font-medium text-[1.2rem] p-2 flex items-center hover:text-[#c6aefa] justify-center cursor-pointer  navitem'>Resume</li>
  </a>
  
  </ul>
    </div>
    <div className='menubar md:hidden block'>
      <button onClick={()=>setshowmenu(!showmenu)}>
     <img src={menu} alt="" className='h-[58px] w-[58px]' />
      </button>
    </div>
    <div className={`menu  fixed top-0 w-full h-full ${showmenu ? 'left-[0]' : 'left-[-100%]'} transition-all ease-in duration-200  bg-[#2b1e3b] flex flex-col px-4 py-6 gap-[4rem] items-center z-50 `}>
      <button className='w-full flex justify-end' onClick={()=>setshowmenu(false)}>
        <img src={cross} alt="" className='h-[32px] w-[32px]' />
      </button>
    <ul className='flex flex-col gap-3 items-center justify-center  '>
    {navItems.map((item)=><a href={item.id} key={item.id} onClick={()=>setshowmenu(false)}>
      <li  className='text-[#9299e6] tracking-wide font-medium text-[1.2rem] p-2 flex items-center hover:text-[#c6aefa] justify-center cursor-pointer  navitem'>{item.name}</li>
    </a>
  )} 
  <a href="https://drive.google.com/file/d/1uGTDX9g7UAAXcJ4HI8bQ5I3KNNtTFbmU/view?usp=sharing" target="_blank" rel="noopener noreferrer" download="Sakshi_Kesharwani_Resume.pdf">
    <li className='text-[#9299e6]  tracking-wide font-medium text-[1.2rem] p-2 flex items-center hover:text-[#c6aefa] justify-center cursor-pointer  navitem' onClick={()=>setshowmenu(false)}>Resume</li>
  </a>
    
  </ul>
    </div>
</div>

    
  )
}

export default Navbar


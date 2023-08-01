/* eslint-disable react/jsx-no-undef */
import React, {useState} from 'react'
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'
import { motion, useScroll } from "framer-motion";
import "./../index.css";
import "react-toggle/style.css" //
import Toggle from 'react-toggle';


const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "-100%" },
  }
  

const Navbar = () => {
    const { scrollYProgress } = useScroll();
    const [nav, setNav] = useState(false)
    const handleNav = () => {
        setNav(!nav)
    }
    const [isOpen, setIsOpen] = useState(false)
    
  return (
    
    
    <div className='w-full h-[90px] bg-black'>
    <motion.div
        className="progress-bar"
        style={{ scaleX: scrollYProgress }}
      />
  
        <div className='max-w-[1240px] mx-auto px-4 flex justify-between items-center h-full'>
            <div>
                <h1 className='text-[#00d8ff]'>DEFI</h1>
            </div>
            <div className='hidden md:flex'>
                <ul className='flex text-white items-center'>
                    <li className='cursor-pointer hover:text-2xl'>Platform</li>
                    <li className='cursor-pointer hover:text-2xl'>Developer</li>
                    <li className='cursor-pointer hover:text-2xl'>Community</li>
                    <li className='cursor-pointer hover:text-2xl'>About</li>
                    <button className='ml-4 cursor-pointer hover:text-2xl'>Use Defi</button>
                </ul>
                
            </div>
            {/* hamburger */}
            <div onClick={handleNav} className='block md:hidden'>
                {
                    nav ? <AiOutlineClose size={30} className='text-white cursor-pointer'  />  :   <AiOutlineMenu size={30} className='text-white cursor-pointer' /> 
                }
               
               
            </div>
            {/* mobile */}
           
            <div className={nav ? 'bg-black w-full text-white absolute top-[90px] left-0 transition-all' : "absolute left-[-100%] bg-black w-full text-white top-[90px] transition-all"}>
    
            
                <ul> 
                <li className='text-2xl'>Platform</li>
                    <li className='text-2xl'>Developer</li>
                    <li className='text-2xl'>Community</li>
                    <li className='text-2xl'>About</li>
                    <button className='m-8 px-8'>Use Defi</button>
                </ul>
            </div>

            {/* new mobile */}
           
        </div>
        

    </div>
  )
}

export default Navbar
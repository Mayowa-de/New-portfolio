import React, { useEffect, useRef, useState } from 'react'
import { FaMoon, FaTimes } from 'react-icons/fa'
import { createRoutesFromElements, Link } from 'react-router-dom'

export default function Header() {
  const [showNavBar, setShowNavBar] = useState(false);
  const [darkMode, setDarkMode] = useState(true)
  const ref =useRef(null)

  const handleShowNavBar = ()=>{
    setShowNavBar(!showNavBar)
  };

  const handleCanelNavBar = () =>{
    if(showNavBar === showNavBar){
      setShowNavBar(!showNavBar)
    }
  };

  const handleToggleButton = () =>{
    setDarkMode(!darkMode)
  };

  const handleClickOutside = ()=>{
    if(ref.current && !ref.current.contains(event.target)){
      setShowNavBar(showNavBar)
    }
  }

  const handleLinkClicked = () =>{
    setShowNavBar(!showNavBar)
  }

  useEffect(()=>{
    document.addEventListener('mousedown', handleClickOutside);

   

    return ()=>{
      document.removeEventListener('mousedown', handleClickOutside)
     
    };
 
  }, [])

  return (
    <header className='flex justify-between p-4 bg-blue-950 text-center h-16 shadow-xl relative'>
      <h1 className='text-white text-2xl font-bold'>OM</h1>
      <nav className='md:flex justify-around text-center text-white list-none gap-7 text-xl font-bold hidden'>
        <Link to='/'> <li className='hover:text-blue-700 cursor-pointer'>Home</li></Link>
       <Link to='/about'> <li className='hover:text-blue-700 cursor-pointer'>About</li></Link>
         <li className='hover:text-blue-700 cursor-pointer'>Work</li>
        <li className='hover:text-blue-700 cursor-pointer'>Contact Me</li>
      </nav>
      <span className='text-3xl font-bold text-white cursor-pointer md:hidden' aria-label='nav-button' onClick={handleShowNavBar}>&#9776;</span>
      {showNavBar &&(
        <ul className='flex flex-col bg-[#0d1117]  p-4 w-full pt-7  justify-center gap-7 absolute text-white transition-all shadow-xl pb-7 z-50' ref={ref}>
          <FaTimes className='text-xl font-bold cursor-pointer' aria-label='cancel-button' onClick={handleCanelNavBar}/>
        <Link to='/' onClick={handleLinkClicked}><li className='text-2xl font-bold hover:text-blue-700 cursor-pointer'>Home</li></Link>
        <Link to='/about' onClick={handleLinkClicked}><li className='text-2xl font-bold hover:text-blue-700 cursor-pointer'>About</li></Link>
        <li className='text-2xl font-bold hover:text-blue-700 cursor-pointer' onClick={handleLinkClicked}>Work</li>
        <li className='text-2xl font-bold hover:text-blue-700 cursor-pointer' onClick={handleLinkClicked}>Skill</li>
        <div className='flex justify-center gap-3'>
          <FaMoon className={`${darkMode ? 'text-blue-700' : 'text-white' } text-2xl font-bold cursor-pointer ' aria-label='toggle-button`} onClick={handleToggleButton}/>
          {darkMode ? (
        <span className='text-xl font-bold cursor-pointer'>Dark Mode</span>
        ) : (

             <span className='text-xl font-bold cursor-pointer'>Light Mode</span>
        )}
        </div>
        </ul>
        )}
    </header>
  )
}

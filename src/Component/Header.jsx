import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header className='flex justify-between p-4 bg-blue-950 text-center h-16 shadow-xl'>
      <h1 className='text-white text-2xl font-bold'>OM</h1>
      <nav className='md:flex justify-around text-center text-white list-none gap-7 text-xl font-bold hidden'>
        <Link to='/'> <li className='hover:text-blue-700 cursor-pointer'>Home</li></Link>
        <li className='hover:text-blue-700 cursor-pointer'>About</li>
        <Link to='/about'> <li className='hover:text-blue-700 cursor-pointer'>Work</li></Link>
        <li className='hover:text-blue-700 cursor-pointer'>Contact Me</li>
      </nav>
    </header>
  )
}

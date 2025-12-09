import React from 'react'

export default function Header() {
  return (
   <header className='flex justify-between p-4 bg-blue-950 text-center h-16'>
    <h1 className='text-white text-2xl font-bold'>OM</h1>
        <nav className='flex justify-around text-center text-white list-none gap-7 text-xl font-bold'>
            <li>Home</li>
            <li>About</li>
            <li>Contact Me</li>
        </nav>
   </header>
  )
}

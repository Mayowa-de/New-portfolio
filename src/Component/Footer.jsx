import React from 'react'
import { FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className='flex fixed justify-center text-center text-gray-400/50'>
        <FaTwitter className='mx-4 hover:text-blue-500 cursor-pointer'/>
        <FaLinkedin className='mx-4 hover:text-blue-700 cursor-pointer'/>
        <FaGithub className='mx-4 hover:text-white cursor-pointer'/>
        <p className=' font-bold absolute bottom-0 left-0 w-full'> &copy; All right Reserved, created by Mayortech </p>
    </footer>
  )
}

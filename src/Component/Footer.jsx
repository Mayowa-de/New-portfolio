import React from 'react'
import { FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <footer className='flex fixed w-full bottom-0 justify-center text-center text-gray-400/50 flex-col'>
            <div className='flex mt-2 mb-6 text-2xl justify-center'>
                <FaTwitter className='mx-4 hover:text-blue-500 cursor-pointer' />
                <FaLinkedin className='mx-4 hover:text-blue-700 cursor-pointer' />
                <Link to='https://github.com/Mayowa-de/' target='_blank'><FaGithub className='mx-4 hover:text-white cursor-pointer' /></Link>
            </div>
            <p className=' font-bold absolute bottom-0 left-0 w-full'> &copy; All right Reserved, created by Mayortech </p>
        </footer>
    )
}

import React, { useEffect, useState } from 'react'
import Button from '@mui/material/Button'
import {Typewriter} from 'react-simple-typewriter';

export default function Home() {
    return (
        <div data-aos="fade-up" className='flex flex-col gap-4 text-center justify-center  min-h-screen'>
            <main className='flex justify-center flex-col gap-4 text-center w-full'>
            <h1 className='text-white font-bold text-4xl'>Mayowa Ojomu</h1>
            <span className="text-blue-700 text-2xl font-bold relative">
            <Typewriter 
            words={['Frontend Developer', 'Web designer', 'Backend Developer']}
             loop={5}
             cursor
             cursorStyle="|"
             cursorColor='white'
             typeSpeed={70}
             deleteSpeed={50}
             delaySpeed={1000}
             />
             </span>
            <article className='flex justify-center text-gray-400 md:w-full   text-justify  '>
                <p className='text-center flex '>I specialize in creating beautiful, high-performance user interfaces with React, Nextjs and Tailwind CSS</p>
            </article>
            </main>
            <div className='flex justify-center mt-12'>
            <Button variant='contained' className='bg-blue-600 text-white w-44 p-4 h-12 justify-center text-center flex'>View work</Button>
            </div>
        </div>
    )
}

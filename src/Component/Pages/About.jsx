import React from 'react'
import Profile from '../../assets/profile.png'
import Button from '@mui/material/Button'

export default function About() {
    return (
        <main data-aos="fade-up" className='flex flex-col justify-center gap-4 text-center mb-12'>
            <h1 className='text-2xl font-bold text-white'>About Me</h1>

            <section className='flex flex-col gap-2 mt-12 justify-center text-center' aria-label='main-section'>
                <div className='flex justify-center text-center relative'>
                    <div className='w-4 h-4 bg-green-500 rounded-full absolute ml-32 mt-7'></div>
                    <div className='w-36 h-36 rounded-full absolute border-4 border-blue-950/50 animate-ping transition'></div>
                    <img src={Profile} alt="Profile image" className='w-36 h-36  rounded-full border-4 border-blue-950/50 shadow-xl' />
                </div>
                <h2 className='text-white text-2xl font-bold'>Mayowa Ojomu</h2>
                <h5 className='text-gray-500 font-medium text-xl md:text-2xl '>Frontend Developer</h5>
            </section>

            <div className='flex flex-col gap-4 w-full p-4 bg-blue-800/50 rounded-xl mt-4 mb-7'>
                <h2 className='text-blue-600/70 text-xl '>Experience</h2>
                <h1 className='text-white font-bold text-4xl'>3+ Years</h1>
            </div>

            <section className='flex flex-col gap-3 w-full' aria-label='section-2'>
                <h3 className='text-white text-2xl font-bold text-start md:text-center'>My Story</h3>
                <article className='text-start text-gray-400 font-medium text-[20px] '>A brief, 2-3 sentence introduction covering my passion for frontend development and my professional journey, specializing in creating modern, user-friendly web applications.</article>
            </section>

            <section className='flex flex-col gap-3 mt-12'>
                <h3 className='text-white text-2xl font-bold text-start md:text-center'>My Approach</h3>

                <article className='text-start text-gray-400 font-medium text-[20px] '>
                    I focus on user-centric design and performance, writing clean, maintainable code with a core stack of React, Nextjs and Tailwind CSS to build beautiful and efficient digital experinces.
                </article>
            </section>
            <div className='flex justify-center w-full mt-6 text-center'>
            <Button variant='contained' className='p-4 md:w-56 w-full h-12 '>View my work &#8594;</Button>
            </div>
        </main>
    )
}

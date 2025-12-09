import React from 'react'
import Button from '@mui/material/Button'

export default function Home() {
    return (
        <div className='flex flex-col gap-4 text-center justify-center  min-h-screen '>
            <main className='flex justify-center flex-col gap-4'>
            <h1 className='text-white font-bold text-4xl'>Mayowa Ojomu</h1>
            <h5 className='text-blue-700 text-2xl font-bold'>Frontend Developer</h5>
            <article className='flex justify-center text-gray-400 md:w-xl  text-justify  '>
                <p className='text-center flex'>I specialize in creating beautiful, high-performance user interfaces with React, Nextjs and Tailwind CSS</p>
            </article>
            </main>
            <div className='flex justify-center mt-2'>
            <Button variant='contained' className='bg-blue-600 text-white w-44 p-4 h-12 justify-center text-center flex'>View work</Button>
            </div>
        </div>
    )
}

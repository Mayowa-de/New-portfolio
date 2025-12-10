import React from 'react'

export default function Loader() {
    return (
        <div className='flex justify-center items-center h-screen flex-col gap-2' >
            <div className='flex border-4 rounded-full border-blue-700 border-t-gray-600 h-14 animate-spin w-14 justify-center border-t-4'></div>
            <h1 className='font-medium text-xl text-white mt-4'>Loading portfolio...</h1>
            <p className='text-gray-500 font-semibold text-sm'>Please wait a moment</p>
        </div>
    )
}

import { useState } from 'react'
import Header from './Component/Header' 
import Footer from './Component/Footer'
import Pages from './Component/Pages/Pages'


function App() {

  return (
    <div className='bg-[#0d1117] w-full min-h-screen flex flex-col  relative '>
     <Header></Header>
     <Pages/>
     <Footer></Footer>
    </div>
  )
}

export default App

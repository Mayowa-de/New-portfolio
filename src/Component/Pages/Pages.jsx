import { Suspense, lazy, useEffect } from "react"
import { Routes, Route } from "react-router-dom"
import Loader from './Loader'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { duration } from "@mui/material/styles"



export default function Pages() {
    useEffect(()=>{
        AOS.init({
            duration: 1000,
            once: true,
        })
    }, [])
    const Home = lazy(() => import('./Home'))
    const About = lazy(() => import('./About'))
    return (
        <Suspense fallback={<Loader />} >
            <div className="p-2 ">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                </Routes>
            </div>
            <div className="p-2 hidden md:block">
                <About />
            </div>
        </Suspense>
    )
}

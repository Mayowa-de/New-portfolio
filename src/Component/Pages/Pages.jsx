import { Suspense, lazy } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Loader from "./Loader"


export default function Pages() {
    const Home = lazy(() => import('./Home'))
    const About = lazy(()=> import('./About'))
    return (
            <Suspense fallback={<Loader />} >
                <div className="p-2 ">
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/about" element={<About/>}/>
            </Routes>
            </div>
            </Suspense>
    )
}

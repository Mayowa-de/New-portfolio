import { Suspense, lazy } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Loader from "./Loader"


export default function Pages() {
    const Home = lazy(() => import('../Home'))
    return (
        <div className="flex justify-center text-center">
        <BrowserRouter >
            <Suspense fallback={<Loader />}>
            <Routes>
                <Route path="/" element={<Home/>} />
            </Routes>
            </Suspense>
        </BrowserRouter>
        </div>
    )
}

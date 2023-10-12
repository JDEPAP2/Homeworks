import { Routes, Route } from "react-router-dom"
import { AboutPage, Handle404, HomePage, LoginPage } from "../components"
import { NavComponent } from "../shared/NavComponent/NavComponent"

export const HandleRoutes = ()=>{
    return <>
        <NavComponent/>
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="login" element={<LoginPage/>}/>
            <Route path="about" element={<AboutPage/>}/>
            <Route path="/*" element={<Handle404/>}/>
        </Routes>
    </>
}
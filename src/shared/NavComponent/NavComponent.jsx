import { NavLink } from "react-router-dom"
import styles from "./NavComponent.module.css"
import { useState } from "react"

export const NavComponent = ()=>{
    const [actual, setActual] = useState()

    const getParam = (param, text) => {
        if(param.isActive){
            setActual(text)
        }
        return styles.Link
    }

    return <>
        <div className={styles.Container}>
            <div className={actual === "home"? styles.Active:styles.No_Active}>
                <NavLink className={(param)=>getParam(param,"home")} to="/">Home</NavLink>
            </div>
            <div className={actual === "login"? styles.Active:styles.No_Active}>
                <NavLink  className={(param)=>getParam(param,"login")} to="login">Login</NavLink>
            </div>
            <div className={actual === "about"? styles.Active:styles.No_Active}>
                <NavLink className={(param)=>getParam(param,"about")} to="about">About</NavLink>
            </div>
            <hr className={styles.Divisor}/>
            <div className={styles.Component_Title}>
                <span className={styles.Title}>Nav App</span>
            </div>
        </div>
    </>
}
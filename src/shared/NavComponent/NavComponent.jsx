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
            <NavLink className={(param)=>param.isActive?styles.Link:styles.Active_Link} to="/">Home</NavLink>
            <NavLink  className={(param)=>param.isActive?styles.Link:styles.Active_Link} to="login">Login</NavLink>
            <NavLink className={(param)=>param.isActive?styles.Link:styles.Active_Link} to="about">About</NavLink>
            <hr className={styles.Divisor}/>
            <div className={styles.Component_Title}>
                <span className={styles.Title}>Nav App</span>
            </div>
        </div>
    </>
}
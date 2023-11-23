import React, { useState } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { useForm } from "../hooks/useForm";
import { logOut, loginAuth, registerAuth } from "../store/slices/auth/thunks";

export const Registro = () => {
    const em = useSelector(state => state.email).email
    const [reg, setReg] = useState(false)
    const [log, setLog] = useState(false)
    const dispatch = useDispatch();
    const { email ,password, onInputChange, formState } = useForm({
        email: 'jose.escobar@gmail.com',
        password: "123456"
    })

    const onSubmit = (event) => {
        event.preventDefault()
        console.log(formState)
        if(reg){
            dispatch( registerAuth(email, password))
        }
        else if(log){
            dispatch( loginAuth(email, password))
        }else{
            dispatch( logOut())
        }
    }

    return(
        !em?<>
            <h1>Registro</h1>
            <p>{em}</p>
            <hr/>
            <form onSubmit={(e)=> onSubmit(e)}>
                <input name="email" type="email" onChange={e=> onInputChange(e)} value={email}/>
                <input name="password" type="password" onChange={e=> onInputChange(e)}  value={password}/>
                <button type="submit" onClick={()=>{
                    setLog(false)
                    setReg(true)
                }}>Registro</button>
                <button type="submit" onClick={()=>{
                    setLog(true)
                    setReg(false)  
                }}>Login</button>
            </form>
        </>:<>
            <h1>Inicio Exitoso</h1>
            <form onSubmit={(e)=> onSubmit(e)}>
                <button type="submit" onClick={()=>{
                        setLog(false)
                        setReg(false)  
                    }}>LogOut</button>
            </form>
        </>
    )
}
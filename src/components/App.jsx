import React, { useState } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { increment, decrement } from "../store/slices/counterSlice";
import { number } from "prop-types";


export const App = () => {

    const { counter } = useSelector(state => state.counter );
    const [value,setValue] = useState(0)
    const dispatch = useDispatch();

    return(
        <>
            <h1>Counter store</h1>
            <p>Counter is: {counter}</p>
            <input type="number" value={value} onChange={e=>setValue(e.target.value)}/>
            <br/>
            <button className="" onClick={()=>dispatch(increment({value}))}>
                +
            </button>
            <button className="" onClick={()=>dispatch(decrement({value}))}>
                -
            </button>
        </>
    )
}
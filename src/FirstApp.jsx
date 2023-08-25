import { useState } from "react"

const FirstApp = ({value}) => {
    const [counter,setCounter] = useState(value)
    const handleAdd = () => setCounter(counter + 1)
    const handleSubstract = () => setCounter(counter - 1)
    const handleReset = () => setCounter(0)
    return <>
        <h1> Counter </h1>
        <p> Value is: <b>{counter}</b></p>
        <button onClick={()=>handleSubstract()}><b>-1</b></button>
        <button onClick={()=>handleReset()}><b>0</b></button>
        <button onClick={()=>handleAdd()}><b>+1</b></button>
    </>
}

export default FirstApp;


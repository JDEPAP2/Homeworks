import { useCounter } from "./hooks/useCounter"

export const TestCounter = () => {
    const {count, increment, decrement, reset} = useCounter(0);
    return <>
        <h1> Use Counter </h1>
        <p> Value is: <b>{count}</b></p>
        <button onClick={()=>decrement()}><b>Decrement</b></button>
        <button onClick={()=>reset()}><b>Reset</b></button>
        <button onClick={()=>increment()}><b>Increment</b></button>
    </>
}
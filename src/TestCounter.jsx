import { useCounter } from "./hooks/useCounter"

export const TestCounter = () => {
    const [num, Increment, Decrement, Reset] = useCounter(0);
    return <>
        <h1> Use Counter </h1>
        <p> Value is: <b>{num}</b></p>
        <button onClick={()=>Decrement()}><b>Decrement</b></button>
        <button onClick={()=>Reset()}><b>Reset</b></button>
        <button onClick={()=>Increment()}><b>Increment</b></button>
    </>
}
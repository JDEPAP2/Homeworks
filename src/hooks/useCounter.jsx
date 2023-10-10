import { useState } from "react"

export const useCounter = (firstN) => {
    const [count, setCount] = useState(firstN)
    
    const Increment = ()=>{
        setCount(count+1)
    }

    const Decrement = ()=>{
        setCount(count-1)
    }

    const Reset = ()=>{
        setCount(firstN)
    }

    return [count, Increment, Decrement, Reset]
}
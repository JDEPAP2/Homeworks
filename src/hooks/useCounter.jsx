import { useState } from "react"

export const useCounter = (firstN) => {
    const [count, setCount] = useState(firstN)
    
    const increment = ()=>{
        setCount(count+1)
    }

    const decrement = ()=>{
        setCount(count-1)
    }

    const reset = ()=>{
        setCount(firstN)
    }

    return {count, increment, decrement, reset}
}
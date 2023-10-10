import { useState, useCallback, useMemo } from "react"
import { Son } from "../Son/Son";

export const Father = () => {
    const list = [2,4,6,8,10];
    const [valor, setValor] = useState(0);

    const incrementFather = useCallback(
        (count)=>{
            setValor(v=>v+count)
        },[]
    )

    return (
        <div>
            <h1> Father </h1>
            <p> Total: {valor}</p>
            <hr/>
            {
                list.map((n, idx) => {
                    return<Son key={idx} numero={n} increment={incrementFather}></Son>
                })
            }
        </div>
    )
}
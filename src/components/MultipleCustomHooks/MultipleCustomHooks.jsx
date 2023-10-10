import { useCounter } from "../../hooks/useCounter"
import { useFetch } from "../../hooks/useFetch"
import styles from "./MultipleCustomHooks.module.css"

export const MultipleCustomHooks = () => {
    const {count, increment} = useCounter(1)
    const {data, isLoading, hasError} = useFetch(`https://api.breakingbadquotes.xyz/v1/quotes/${count}`)
    return (
        <>
            <h1>Multiple Custom Hooks</h1>
            <hr/>
            <div className={styles.container}>
            {
                isLoading?(
                    <div>
                        loading...
                    </div>
                ):(
                    hasError?(
                        <p>
                            Error, {hasError}
                        </p>
                    ):(
                        <blockquote>
                            <p className={styles.text}>- {data[0]?.quote}</p>
                            <footer className={styles.text}>{data[0]?.author}</footer>
                        </blockquote>
                    )
                )
            }
            </div>
            <button className={styles.button} onClick={()=> increment()}>Next Quote</button>
        </>
    )
}
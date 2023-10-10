import { useState } from "react"
import styles from "./TodoAdd.module.css"


export const TodoAdd = ({ onNewTodo}) =>{
    const [task, setTask] = useState("")
    const onFormSubmit = (e) => {
        if(task.replaceAll(" ","").length > 0){
            e.preventDefault()

            const newTodo = {
                id: new Date().getTime(),
                description: task,
                done: false
            }

            onNewTodo(newTodo)
            setTask("")
        }
    }

    return <form onSubmit={e => onFormSubmit(e)}>
        <p className={styles.desc}>Crea tareas y agregalas con enter o presionando el boton agregar </p>
        <input className={styles.input} type="text" value={task} onChange={e=>setTask(e.target.value)} placeholder="Tarea"/>
        <button className={styles.button} type="submit">
            Agregar
        </button>
    </form>
}
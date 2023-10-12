import { TodoItem } from "../TodoItem/TodoItem"
import styles from "./TodoList.module.css"
export const TodoList = ({todos= [], onHandleRemove, onHandleDoneTodo}) => {
    return <>
        {todos.length > 0&&<div>
            <h2>Tareas:</h2>
            <hr className={styles.divisor3}/>
            <div className={styles.container}>
                <p>Completadas: <span>{todos.filter(v=> v.done).length}</span></p>
                <hr className={styles.divisor}/>
                <p>Pendientes: <span>{todos.filter(v=> !v.done).length}</span></p>
            </div>
        </div>
        }
        <ul>
            {
                todos.map((todo, key)=>{
                    return <div key={key}>
                        <TodoItem todo={todo} onHandleRemove={onHandleRemove} onHandleDoneTodo={onHandleDoneTodo}/>
                        {todos.length-1 != key &&<hr className={styles.divisor2} />}
                    </div>
                })
            }
        </ul>
    </>
}

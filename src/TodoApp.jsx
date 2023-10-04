import { useReducer } from "react"
import * as type from "./components/types"

export const TodoApp = () => {
    const [todos, dispatch] = useReducer()

    const handleNewTodo = (todo) => {
        const action = {
            type: type.CREATE_TODO,
            payload: todo
        }
        dispatch( action )
    }

    return <>
        <h1>TodoApp: 10, <small>pendientes: 2</small></h1>
        <hr/>
        

    </>
}
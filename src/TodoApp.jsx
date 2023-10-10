import { useReducer } from "react"
import * as type from "./components/types"
import { TodoAdd, TodoList } from "./components"
import { TodoReducer } from "./reducers/TodoReducer"

const initialState = [
    {
        id: new Date().getTime(),
        description: "Hacer los Challenge",
        done: false
    }
]

export const TodoApp = () => {
    const [todos, dispatch] = useReducer(TodoReducer, initialState)

    const handleNewTodo = (todo) => {
        const action = {
            type: type.CREATE_TODO,
            payload: todo
        }
        dispatch( action )
    }

    return <>
        <h1>TodoApp: {todos.length}, <small>pendientes: {todos.length}</small></h1>
        <hr/>
        <TodoAdd onNewTodo={handleNewTodo}></TodoAdd>
        <TodoList todos={todos} ></TodoList>

    </>
}
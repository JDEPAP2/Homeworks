import { useEffect, useReducer } from "react"
import * as type from "../types"
import { TodoAdd, TodoList } from ".."
import { TodoReducer } from "../../reducers/TodoReducer"
import styles from "./TodoApp.module.css"

const initialState = []

const init = () => {
    return JSON.parse(localStorage.getItem('todos'))
}

export const TodoApp = () => {
    const [todos, dispatch] = useReducer(TodoReducer, initialState, init)

    const handleNewTodo = (todo) => {
        const action = {
            type: type.CREATE_TODO,
            payload: todo
        }
        dispatch( action )
    }

    const handleRemoveTodo = (id) => {
        const action = {
            type: type.REMOVE_TODO,
            payload: id
        }
        dispatch( action )
    }

    const handleDoneTodo = (id, done) => {
        const action = {
            type: type.DONE_TODO,
            payload: {id,done}
        }
        dispatch( action )
    }

    useEffect(()=>{
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])

    return <>
        <h1>Todo App</h1>
        <hr/>
        <TodoAdd onNewTodo={handleNewTodo}></TodoAdd>
        <TodoList onHandleDoneTodo={handleDoneTodo} onHandleRemove={handleRemoveTodo} todos={todos} ></TodoList>

    </>
}
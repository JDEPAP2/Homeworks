import { TodoItem } from "../TodoItem/TodoItem"

export const TodoList = ({todos= []}) => {
    return <ul>
        {
            todos.map((todo, key)=>{
                return <TodoItem key={key} todo={todo}/>
            })
        }
    </ul>
}
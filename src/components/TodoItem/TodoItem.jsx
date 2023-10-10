import styles from "./TodoItem.module.css"

export const TodoItem = ({ todo }) => {
    return <li className={styles.item}>
        <span className={styles.content}> {todo.description}</span>
    </li>
}
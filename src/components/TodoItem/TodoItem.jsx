import { useState } from "react"
import styles from "./TodoItem.module.css"
import CheckRoundedIcon from '@mui/icons-material/CheckRounded';
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';

export const TodoItem = ({ todo, onHandleRemove,  onHandleDoneTodo}) => {
    return <li className={styles.item}>
            <div className={styles.content}>
                <div className={styles.content_checkbox}>
                    <input type="checkbox" id="chk" checked={todo.done} className={styles.checkbox} onChange={(e)=>{
                        onHandleDoneTodo(todo.id, e.target.checked);
                    }}/>
                    {
                        todo.done&&(
                            <CheckRoundedIcon className={styles.icon_checkbox}/>
                        )
                    }
                </div>
                <label form="chk" className={todo.done?styles.content_stroke:styles.content}>{todo.description}</label>
                <hr className={styles.divisor}></hr>
                <button className={styles.remove} onClick={()=>onHandleRemove(todo.id)}><DeleteRoundedIcon className={styles.icon}/></button>
            </div>
        </li>

}
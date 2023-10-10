import { useState } from "react"

const AddCategory = ({onAddCategory}) => {
    const [category, setCategory] = useState('')

    const onSubmit=(e)=>{
        e.preventDefault();
        if(category.replaceAll(" ", "").length > 0){
           onAddCategory(category) 
        }
        setCategory('')
    }
    return (
        <form onSubmit={(event)=> onSubmit(event)}>
            <p>Añade cualquier categoria y presiona enter.</p>
            <input type="text" value={category} onChange={(event) => setCategory(event.target.value)}></input>
        </form>
    )

} 

export default AddCategory;
import { useState } from "react"

const AddCategory = ({onAddCategory}) => {
    const [category, setCategory] = useState('')

    const onSubmit=(e)=>{
        e.preventDefault();
        onAddCategory(category)
        setCategory('')
    }
    return (
        <form onSubmit={(event)=> onSubmit(event)}>
            <input type="text" value={category} onChange={(event) => setCategory(event.target.value)}></input>
        </form>
    )

} 

export default AddCategory;
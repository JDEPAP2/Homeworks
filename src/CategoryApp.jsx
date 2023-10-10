import { useState } from "react"
import AddCategory from "./components/AddCategory"
import GifGrid from "./components/ItemCategory"

const CategoryApp = () => {
    const [categories, setCategotiries] = useState([])

    const onAddCategory = (category) => {
        setCategotiries(list => [...list, category])
    }

    return (
        <>
            <h1>Categories</h1>
            <AddCategory onAddCategory={onAddCategory}></AddCategory>
            {
                categories.map(
                    (category, key) =>
                    {
                        return <GifGrid category={category} key={key} item={key+1}/>
                    }
                )
            }
        </>
    )

}

export default CategoryApp;
import { useEffect, useState } from "react"
import AddCategory from "./components/AddCategory/AddCategory"
import GifGrid from "./components/GifGrid/GifGrid"


const GiftExpertApp = () => {
    const [categories, setCategotiries] = useState([])

    const onAddCategory = (category) => {
        setCategotiries(list => [...list, category])
    }

    return (
        <>
            <h1>Gif Expert</h1>
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

export default GiftExpertApp;
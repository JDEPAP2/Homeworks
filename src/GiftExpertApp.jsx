import { useState } from "react"
import AddCategory from "./components/AddCategory"
import GifGrid from "./components/GifGrid"


const GiftExpertApp = () => {
    const [categories, setCategotiries] = useState(['Zodiac'])

    const onAddCategory = (category) => {
        setCategotiries(list => [...list, category])
    }

    return (
        <>
            <h1>GifExpert</h1>
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
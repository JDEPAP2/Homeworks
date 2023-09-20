import { useFetchGifs } from "../hooks/useFetchGifs";
import GifItem from "./GifItem";

const GifGrid = ({category}) => {
    const {images, isLoading} = useFetchGifs(category)
    return (
        <>
            <h3>{category}</h3>
            <div className="card-grid">
                {
                    images.map((image, key) => {
                        return <GifItem key={key} {...image}/>
                    })
                }
            </div>
        </>
    )

}

export default GifGrid;
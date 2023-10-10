const ItemCategory = ({category, item}) => {
    return (
        <>
            <div>
                <h3><small>{item}</small>. {category}</h3>
            </div>
        </>
    )

}

export default ItemCategory;
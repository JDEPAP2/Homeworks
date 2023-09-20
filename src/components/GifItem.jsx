const GifItem = (props) => {
    console.log(props)
    const {url, title} = props;
    return (
        <>
            <p>{title}</p>
            <img src={url} alt="" />
        </>
    )

}

export default GifItem;
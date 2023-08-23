import { useState } from "react"

const FirstApp = ({value}) => {
    const [counter,setCounter] = useState(value)
    const handleAdd = () => {
        setCounter(counter + 1)
        console.log(" callin handleAdd ")
    }

    return <>
        <h1> Counter </h1>
        <p> El valor es: {counter} </p>
        <button onClick={()=>handleAdd()}>+1</button>
    </>
}

export default FirstApp;

// import PropTypes from 'prop-types';
// const FirstApp = ({title, sum}) => {
//     return<>
//         <h1>{title}</h1>
//         <span>{sum}</span>
//     </>
// }
// FirstApp.PropTypes = {
//     title: PropTypes.string.isRequired,
//     sum: PropTypes.number.isRequired
// }
// FirstApp.defaultProps = {
//     title: 'No hay titulos',
//     sum: 300
// }
// export default FirstApp;

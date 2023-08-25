import { useState } from "react";

const categories = ['first category', 'second category']

const ComponentApp = () => {
    const [cat, setCat] = useState(categories);
    const [text, setText] = useState();
    return<>
        <h1>GifExpert</h1>
        <ol>
            {
                categories.map((category, key) => <li key={key}>{category}</li>)
            }
        </ol>
    </>
}

export default ComponentApp;
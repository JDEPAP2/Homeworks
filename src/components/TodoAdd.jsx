export const TodoAdd = ({ onNewTodo}) =>{
    const onFormSubmit = (e) => {
        e.preventDefault()

        const newTodo = {
            id: new Date().getTime(),
            description: "Hacer el proyecto",
            done: false
        }

        onNewTodo(newTodo)
    }

    return <form onSubmit={e => onFormSubmit(e)}>
        <input type="text" placeholder="Tarea" className=""/>
        <button type="submit" className="">
            Agregar
        </button>
    </form>
}
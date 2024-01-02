import React, {useState} from 'react'



const ToDoList = () => {
    let [text, setText] = useState("") 
    let [items, setItems] = useState([])

    const handleChange = (event) => {

    }

    const handleAddToDo = () => {

        setItems(oldItems => [...oldItems, text])
        setText("")

    }
    return (
      <div className='todolist'>
        <h3>My todo list</h3>
        <form>
        <input type = "text" onChange={handleChange}/>
        <input type = "button" value = "Add" onClick={handleAddToDo}/>      
        </form>  

        <ul>
            {items}
        </ul>
     </div>
    )
}

export default ToDoList
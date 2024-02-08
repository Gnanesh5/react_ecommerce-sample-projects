import React, {useState} from 'react'
import './Todo.css'

const Todo = () => {
    const [todos, setTodos] = useState([])
    const [input, setInput] = useState('')


    const generateId = () => {
        return Math.floor(Math.random()*10)
    }
    const updateValue = (e) => {
        setInput(e.target.value)
    }

    const handleSubmit = () => {
        setTodos((todos) =>
          todos.concat({
            text: input,
            id: generateId(),
          })
        );
        setInput("");
      };   
      const removeTodo = (id) =>
      setTodos((todos) => todos.filter((t) => t.id !== id));
  return (
    <>
    <div className='container'>
      <input type="text" value={input} onChange={updateValue} placeholder='New Todo'/>
      <button onClick={handleSubmit}>Add Todo's</button>
      <ul className='todo-list'>
        {
            todos.map(({text, id}) => {
                return <li key={id} className="todo">
                <span>{text}</span>
                <button className="close" onClick={() => removeTodo(id)}>
                  X
                </button>
              </li>
            })
        }
      </ul>
    </div> 
    </>
  )
}

export default Todo
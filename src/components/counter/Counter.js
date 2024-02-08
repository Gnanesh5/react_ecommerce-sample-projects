import React, {useState} from 'react'
import "./Counter.css"
const Counter = () => {
const [value, setValue] = useState(0)

const increment = () => {
    setValue(value + 1);
}

const decrement = () => {
    (value >= 1) ?setValue(value - 1) : setValue(0);
}
  return (
    <>
        <div className='container'>
            <h1 className='number'>{value}</h1>
        </div>
        <section className='btns-container'>
            <button onClick={increment} className='button'>+</button>
            <button onClick={decrement} classname='button'>-</button>
        </section>

    </>
  )
}

export default Counter
import React from 'react'

import './Recommended.css'

const Recommended = () => {
  return (
    <>
      <div>
        <h2 className='recommended-title'>Recommended</h2>
        <div className='recommended-flex'>
          <button className='btns'>All Products</button>
          <button className='btns'>Nike</button>
          <button className='btns'>Adiddas</button>
          <button className='btns'>VANS</button>
        </div>
      </div>
    </>
  )
}

export default Recommended
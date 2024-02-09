import React from 'react'

import Category from './category/Category';
import Colors from './colors/Colors';
import Price from './price/Price';

import { TiShoppingCart } from "react-icons/ti";

import './Sidebar.css'

const Sidebar = (handleChange) => {
  return (
    <>
      <section className='sidebar'>
        <div className='logo-container'>
          <h1><TiShoppingCart /></h1>
        </div>

        <Category handleChange={handleChange} />
        <Price handleChange={handleChange} />
        <Colors handleChange={handleChange} />

      </section>
    </>
  )
}

export default Sidebar
import React from 'react'
import Navigation from './navigation/Navigation';
import Products from './products/Products';
import Sidebar from './sidebar/Sidebar';
import Recommended from './recommended/Recommended';


import '../Style.css'

const Ecommerce = () => {
  return (
    <>
        <Sidebar />
        <Navigation />
        <Products />
        <Recommended />
    </>
  )
}

export default Ecommerce
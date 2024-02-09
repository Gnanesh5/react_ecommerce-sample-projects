import React, {useState} from 'react'
import Navigation from './navigation/Navigation';
import Products from './products/Products';
import Sidebar from './sidebar/Sidebar';
import Recommended from './recommended/Recommended';

import Product from './db/data'
import Card from './components/Card'


import '../Style.css'

function Ecommerce() {
    const [selectedCategory, setSelectedCategory] = useState(null);
  
    // ----------- Input Filter -----------
    const [query, setQuery] = useState("");
  
    const handleInputChange = (event) => {
      setQuery(event.target.value);
    };
  
    const filteredItems = Product.filter(
      (product) => product.title.toLowerCase().indexOf(query.toLowerCase()) !== -1
    );
  
    // ----------- Radio Filtering -----------
    const handleChange = (event) => {
      setSelectedCategory(event.target.value);
    };
  
    // ------------ Button Filtering -----------
    const handleClick = (event) => {
      setSelectedCategory(event.target.value);
    };
  
    function filteredData(products, selected, query) {
      let filteredProducts = Product;
  
      // Filtering Input Items
      if (query) {
        filteredProducts = filteredItems;
      }
  
      // Applying selected filter
      if (selected) {
        filteredProducts = filteredProducts.filter(
          ({ category, color, company, newPrice, title }) =>
            category === selected ||
            color === selected ||
            company === selected ||
            newPrice === selected ||
            title === selected
        );
      }
  
      const data = filteredProducts.map(
        ({ img, title, star, reviews, prevPrice, newPrice }) => (
          <Card
            key={Math.random()}
            img={img}
            title={title}
            star={star}
            reviews={reviews}
            prevPrice={prevPrice}
            newPrice={newPrice}
          />
        )
      );

      return data

    }

  
    const result = filteredData(Products, selectedCategory, query);
  
    return (
      <>
        <Sidebar handleChange={handleChange} />
        <Navigation query={query} handleInputChange={handleInputChange} />
        <Recommended handleClick={handleClick} />
        <Products result={result} />
      </>
    );
  }

  export default Ecommerce
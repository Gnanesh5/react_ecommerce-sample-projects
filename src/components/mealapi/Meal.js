import React,{useState, useEffect} from 'react'
import './Meal.css';
import axios from 'axios';

const Meal = () => {
    const [items, setItems] = useState([]);
    const url = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood';

    useEffect(() => {
        axios.get(url)
        .then((res) => {setItems(res.data.meals)})
        .catch(err => {console.log(err)})
    }, url)

    const itemsList = items.map((strMeal, strMealThumb, idMeal) => {
        return (
            <section className='card'>
                <img src={strMealThumb}/>
                <section className='content'>
                    <p>{strMeal}</p>
                    <p>#{idMeal}</p>
                </section>
            </section>
        )
    })
    return <div className='container'>
        <itemsList />
    </div>
}

export default Meal
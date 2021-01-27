import React, { useState, useEffect } from 'react';
import Carousel from './components/Carousel';

export default function App() {

  const [restaurants, setRestaurtants] = useState([]);

  useEffect(() => {
    getRestaurants()
  });

  const getRestaurants = () => {
    fetch('discovery_page.json')
    .then((response) => response.json())
    .then((responseData) => {
      setRestaurtants(responseData.sections);
    })
    .catch(err => console.error(err))
  }

  return (
      <div>
          {restaurants.map((item, index) => {
            if (item.title) {
                return ( <Carousel key={index} title={item.title} restaurants={item.restaurants} /> ) 
            } else {
                return ( <p> No restaurants </p> )
            }
          })}
      </div>
  );
}



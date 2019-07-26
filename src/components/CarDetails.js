import React from 'react';
import cars from '../data/Store';

const CarDetails = () => (
    <>
      <h1>Top performing cars in 2019</h1>
      {cars.map (car => {
        return (<div id='card-body' key={car.id}>
          <div className='card'>
          <h2>{car.name}</h2>
          <p>Category: {car.type}</p>
          <p>Car Make: {car.make}</p>
          </div>
        </div>
      )})}
    </>
);

export default CarDetails;

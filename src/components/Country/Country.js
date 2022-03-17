import React from 'react';
import './Country.css';

const Country = (props) => {
  // destructuring for using data from an object named props.country
  const { name, flags, capital, region, area } = props.country;
  return (
    <div className='country'>
      <h3>{name.common}</h3>
      <img className='country-flag' src={flags.png} alt="" />
      <p>Area: {area} km²</p>
      <h4>Capital: {capital}</h4>
      <h4>Region: {region}</h4>
    </div>
  );
};

export default Country;
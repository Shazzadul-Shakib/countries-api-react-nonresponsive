import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css';

const Countries = () => {
  const [countries, setCountries] = useState([]);
  // fetch data from API
  useEffect( () => {
    fetch('https://restcountries.com/v3.1/all')
      .then(res => res.json())
      .then(data=>setCountries(data))  //pass data to countries by setCountries
  }, [])
  return (
    <div className='countries'>
      <div className='countries-header-text'>
        <h1>Counries Information Around The World</h1>
        <h4>Found Countries: {countries.length}</h4>
      </div>
      
      <div className='countries-container'>
        {/* founded countries is an array and should be devided by map for acces each's information and pass to another component as props*/}
        {
          countries.map(country => <Country country={country} key={country.cca3}></Country>)
          
        }
      </div>
    </div>
  );
};

export default Countries;
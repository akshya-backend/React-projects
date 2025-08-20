import React, { useContext } from 'react'
import { useEffect } from 'react';
import ShimmerCard from './shimmerCard';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../context/createContext';

function CountryCard({ query }) {
  const [isDarkMode] = useContext(ThemeContext);

    const [countries, setCountries] = React.useState([]);
    useEffect(()=>{
        fetch("/api/countries")
        .then((res) => res.json())
        .then((data) => {
            setCountries(data);
        });

    },[])
    
  return (
    countries.length == 0 ?
    <ShimmerCard/>
    :
    <div className={`countries-container ${isDarkMode ? 'dark' : ''}`}>

      {
        countries.filter(country => (
          country.name.toLowerCase().includes(query) || country.region.toLowerCase().includes(query)
        )).map((country) => (
        <Link to={`/${country.name}`} key={country.name} state={country}>
          <div className="country-card">
            <div className="flag-container">
              <img src={country.flags.svg} alt={country.name} />
            </div>
          <div className="card-text">
            <h3 className="card-title">{country.name}</h3>
            <p>Population: {country.population.toLocaleString()}</p>
            <p>Region: {country.region}</p>
            <p>Capital: {country.capital}</p>
          </div>
        </div>
        </Link>
      ))}
    </div>
  )
}

export default CountryCard
import CountrySearch from './countrySearch';
import CountryCard from './countryCard';
import { useContext, useState } from 'react';
import { ThemeContext } from '../context/createContext';

export default function Home() {
      const [query, setQuery] = useState("");
      const [darkMode] = useContext(ThemeContext);

  return (
    <main className={`${darkMode ? 'dark' : ''}`}>
        <CountrySearch setQuery={setQuery}/>
        <CountryCard query={query}/>
    </main>
  )
}



function test(params) {
const [data,setdata] = useState({
  name: "",
  capital: "",
  population: 0,
  area: 0
});

 return(
  <div>
   <input type="text" value={data.name} onChange={(e) => setdata({...data, name: e.target.value})} placeholder="Country Name"/>
   <input type="text" value={data.capital} onChange={(e) => setdata({...data, capital: e.target.value})} placeholder="Capital"/>
   <input type="number" value={data.population} onChange={(e) => setdata({...data, population: e.target.value})} placeholder="Population"/>
   <input type="number" value={data.area} onChange={(e) => setdata({...data, area: e.target.value})} placeholder="Area"/>
  </div>
 )
}
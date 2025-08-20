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

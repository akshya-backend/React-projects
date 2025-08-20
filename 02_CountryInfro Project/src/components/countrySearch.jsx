
function CountrySearch({setQuery}) {
  return (
    <div className="search-filter-container">
        <div className="search-container">
          <i className="fa-solid fa-magnifying-glass"></i>
          <input type="text" placeholder="Search for a country..." onChange={(e) => {
            const query = e.target.value.toLowerCase();
            setQuery(query);
          }} />
        </div>
        <select className="filter-by-region" onChange={(e) =>{          
          setQuery(e.target.value.toLowerCase());
        }}>
          <option hidden="">Filter by Region</option>
          <option value="Africa">Africa</option>
          <option value="America">America</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </div>
  )
}

export default CountrySearch
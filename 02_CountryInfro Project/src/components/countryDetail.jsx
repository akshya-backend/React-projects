import React, { useContext, useEffect, useState } from "react";
import { useLocation, useParams, Link } from "react-router-dom";
import CountryDetailShimmer from "./countryDetailShimmer";
import "./countryDetail.css";
import { ThemeContext } from "../context/createContext";

export default function CountryDetail() {
  const { countryName } = useParams();
  const { state } = useLocation();
  const [countryData, setCountryData] = useState(null);
  const [isDarkMode] = useContext(ThemeContext);

  useEffect(() => {
    if (state) {
      console.log("Country data from state:", state);
      updateCountryData(state, setCountryData); // render instantly
    } else {
      // fallback to fetch when no state is available
      fetch(`/api/alpha/${countryName}`)
        .then((res) => res.json())
        .then((data) => {
          console.log("Fetched country data:", data);
          if (Array.isArray(data) && data.length > 0) {
            updateCountryData(data[0], setCountryData);
          } else if (data && data.name) {
            updateCountryData(data, setCountryData);
          } else {
            console.error("No country data found for", countryName);
          }
        })
        .catch((err) => console.error("Fetch failed:", err));
    }
  }, [countryName, state]);

  if (!countryData) {
    return <CountryDetailShimmer />;
  }

  return (
   <div className={`main-detail-card ${isDarkMode ? 'dark' : ''}`}>
    <div className='country-details-container'>
      <span className="back-button" onClick={() => history.back()}>
        <i className="fa-solid fa-arrow-left"></i>&nbsp; Back
      </span>

      <div className="country-details">
        <img src={countryData.flag} alt={`${countryData.name} flag`} />
        <div className="details-text-container">
          <h1>{countryData.name}</h1>
          <div className="details-text">
            <p>
              <b>Native Name: </b> {countryData.nativeName}
            </p>
            <p>
              <b>Population: </b>{" "}
              {countryData.population.toLocaleString("en-IN")}
            </p>
            <p>
              <b>Region: </b> {countryData.region}
            </p>
            <p>
              <b>Sub Region: </b> {countryData.subregion}
            </p>
            <p>
              <b>Capital: </b> {countryData.capital}
            </p>
            <p>
              <b>Top Level Domain: </b> {countryData.tld}
            </p>
            <p>
              <b>Currencies: </b> {countryData.currencies}
            </p>
            <p>
              <b>Languages: </b> {countryData.languages}
            </p>
          </div>

          {countryData.borders.length > 0 && (
            <div className="border-countries">
              <b>Border Countries: </b>&nbsp;
              {countryData.borders.map((border) => (
                <Link
                  key={border.name}
                  to={`/${border.name}`}
                  state={border.fulldata} // pass full data for instant render
                >
                  {border.name}
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
    </div>
  );
}

async function updateCountryData(data, setCountryData) {
  console.log("Updating country data:", data);

  const baseData = {
    name: data.name,
    nativeName: data.nativeName || data.name,
    population: data.population,
    region: data.region,
    subregion: data.subregion,
    capital: data.capital,
    flag: data.flags?.svg || data.flag || "",
    tld: data.topLevelDomain?.[0],
    languages: data.languages
      ? data.languages.map((lang) => lang.name).join(", ")
      : "",
    currencies: data.currencies
      ? data.currencies
          .map((currency) => `${currency.name} (${currency.symbol})`)
          .join(", ")
      : "",
    borders: [],
  };

  let borders = [];
  if (data.borders && data.borders.length > 0) {
    try {
      borders = await Promise.all(
        data.borders.map(async (alpha) => {
          const res = await fetch(`/api/alpha/${alpha}`);
          const borderCountry = await res.json();

          return {
            name: borderCountry.name,
            fulldata: borderCountry,
          };
        })
      );
    } catch (e) {
      console.error("Border fetch failed", e);
    }
  }

  setCountryData({ ...baseData, borders });
}

import { useEffect } from "react";
import { useState } from "react";
import Country from "../country/country";
import "./countries.css";

const Countrys = () => {
  let [countries, setCountries] = useState([]);

  let [visitedc, setVisitedC] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);

  let handleVisitedCountry = (country) => {
    console.log("add this to your visited countries");
    let newVisistedCountries = [...visitedc, country];
    setVisitedC(newVisistedCountries);
  };

  return (
    <div>
      <h3>Countries: {countries.length}</h3>
      <div>
        <h3>Visited Countries: {visitedc.length}</h3>
        <ul>
          {
            visitedc.map(country =><li key={country.cca3}>{country.name.common}</li> )
          }
        </ul>
      </div>
      <div className="country-con">
        {countries.map((country) => (
          <Country
            handleVisitedCountry={handleVisitedCountry}
            key={country.cca3}
            country={country}
          ></Country>
        ))}
      </div>
    </div>
  );
};

export default Countrys;

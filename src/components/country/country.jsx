import { useState } from "react";
import "./country.css";
const Country = ({ country, handleVisitedCountry }) => {
  let { name, flags, population, area, cca3 } = country;

  let [visited, setVisited] = useState(false);

  let handleVisited = () => {
    setVisited(!visited);
  };

  return (
    <div className={`country ${visited && "visited"}`}>
      <h2>{name?.common}</h2>
      <img className="image" src={flags.png} alt="" />
      <p>Population: {population}</p>
      <p>Area: {area} sq/km</p>
      <p>
        <small>code: {cca3}</small>
      </p>
      <button onClick={() => handleVisitedCountry(country)}>Mark visited</button> <br /> <br />
      <button onClick={handleVisited}>{visited ? "visited" : "Going"}</button>
      {visited ? "visited this country" : "Want to visit"}
     
    </div>
  );
};

export default Country;

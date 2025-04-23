import React from "react";
import { Link } from "react-router-dom";

const CountryCard = ({ country }) => {
  return (
    <>
     <Link to={`/country/${country.cca3}`}>

     <div className="m-3 border-gray-500 shadow-lg">
        <img
          className="w-60 h-50 object-contain"
          src={country.flags.png}
          alt={`Flag of ${country.name.common}`}
        />
        <div className="p-4">
          <h2 className="font-bold mb-3 text-[1.2rem]">{country.name.common}</h2>
          <p><b>Population</b>: {country.population.toLocaleString()}</p>
          <p><b>Region</b>: {country.region}</p>
          <p><b>Capital</b>: {country.capital}</p>
        </div>
      </div>

     </Link>
    </>
  );
};

export default CountryCard;

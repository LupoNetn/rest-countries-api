import React, { useEffect, useState } from "react";
import CountryCard from "../components/CountryCard";
import SearchFilter from "../components/SearchFilter";
import useFetch from "../hooks/useFetch";
import Spinner from "../components/Spinner";

const Home = () => {
  const { countries, loading, error } = useFetch(
    "https://restcountries.com/v3.1/all"
  );

  const [searchTerm, setSearchTerm] = useState("");
  const [region, setRegion] = useState("");
  const [populationRange, setPopulationRange] = useState("");

  const handleClearFilters = () => {
    setSearchTerm("");
    setRegion("");
    setPopulationRange("");
  };

  const handleSearchChange = (value) => setSearchTerm(value);
  const handleRegionChange = (value) => setRegion(value);
  const handlePopulationChange = (value) => setPopulationRange(value);

  const filtersAreActive = searchTerm || region || populationRange;

  const filteredCountries = countries.filter((country) => {
    const matchesSearch = country.name.common
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    const matchesRegion = region ? country.region === region : true;

    const population = country.population;
    let matchesPopulation = true;

    if (populationRange) {
      const [min, max] = populationRange.split("-").map(Number);
      matchesPopulation = population >= min && population <= max;
    }

    return matchesSearch && matchesRegion && matchesPopulation;
  });

  return (
    <>
      <SearchFilter
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        region={region}
        onRegionChange={setRegion}
        populationRange={populationRange}
        onPopulationChange={setPopulationRange}
        onClearFilters={handleClearFilters}
      />

      {loading && <Spinner />}
      {error && (
        <p className="text-center text-red-500">Error loading countries.</p>
      )}

      <div className="grid lg:grid-cols-4 md:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 place-items-center md:p-14">
        {(filtersAreActive ? filteredCountries : countries).map((country) => (
          <CountryCard key={country.cca3} country={country} />
        ))}
      </div>

      {filtersAreActive && filteredCountries.length === 0 && (
        <p className="text-center text-gray-500 mt-10">
          No countries match your filter.
        </p>
      )}
    </>
  );
};

export default Home;

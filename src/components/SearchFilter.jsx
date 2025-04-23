import React, { useContext } from "react";
import { FiSearch } from "react-icons/fi";
import { ThemeSwitcher } from "../assets/context/ThemeSwitcher";

const SearchFilter = ({
  searchTerm,
  onSearchChange,
  region,
  onRegionChange,
  populationRange,
  onPopulationChange,
  onClearFilters, // NEW PROP
}) => {
  const { theme } = useContext(ThemeSwitcher);

  return (
    <div className="flex flex-col justify-between sm:flex-row gap-6 p-6 sm:p-10">
      {/* Search Input */}
      <div
        className={`w-full max-w-[400px] px-2 py-2 shadow-md border rounded-md ${
          theme === "light" ? "bg-white border-gray-300" : "bg-gray-800 border-gray-700"
        } flex items-center`}
      >
        <FiSearch
          className={`text-xl ml-2 shrink-0 ${
            theme === "light" ? "text-gray-500" : "text-gray-300"
          }`}
        />
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Search for a country..."
          className={`flex-1 text-left pl-3 pr-2 py-1 outline-none ${
            theme === "light"
              ? "bg-white text-gray-800 placeholder:text-gray-400"
              : "bg-gray-800 text-white placeholder:text-gray-500"
          } focus:outline-none focus:ring-0`}
        />
      </div>

      {/* Filter Inputs + Clear Button */}
      <div className="flex flex-col sm:flex-row gap-4 w-full max-w-[400px]">
        {/* Region Dropdown */}
        <select
          className={`w-full border rounded-md px-3 py-2 shadow-md focus:outline-none ${
            theme === "light"
              ? "bg-white text-gray-700 border-gray-300"
              : "bg-gray-800 text-white border-gray-700"
          }`}
          value={region}
          onChange={(e) => onRegionChange(e.target.value)}
        >
          <option value="">Filter by region</option>
          <option value="Africa">Africa</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Americas">Americas</option>
          <option value="Oceania">Oceania</option>
        </select>

        {/* Population Dropdown */}
        <select
          className={`w-full border rounded-md px-3 py-2 shadow-md focus:outline-none ${
            theme === "light"
              ? "bg-white text-gray-700 border-gray-300"
              : "bg-gray-800 text-white border-gray-700"
          }`}
          value={populationRange}
          onChange={(e) => onPopulationChange(e.target.value)}
        >
          <option value="">Filter by population</option>
          <option value="0-1000000">Less than 1 million</option>
          <option value="1000000-10000000">1 – 10 million</option>
          <option value="10000000-100000000">10 – 100 million</option>
          <option value="100000000-10000000000">Over 100 million</option>
        </select>

        {/* Clear Button */}
        <button
          onClick={onClearFilters}
          className={`px-4 py-2 rounded-md font-medium shadow-md transition ${
            theme === "light"
              ? "bg-red-100 text-red-700 hover:bg-red-200"
              : "bg-red-800 text-white hover:bg-red-700"
          }`}
        >
          Clear 
        </button>
      </div>
    </div>
  );
};

export default SearchFilter;

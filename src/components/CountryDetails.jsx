import React, { useContext, useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import Spinner from "./Spinner";
import { ThemeSwitcher } from "../assets/context/ThemeSwitcher";

const CountryDetails = () => {
  const { countryId } = useParams();
  const navigate = useNavigate();
  const [countryData, setCountryData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const {theme} = useContext(ThemeSwitcher)

  useEffect(() => {
    const fetchCountryDetails = async () => {
      try {
        const response = await fetch(`https://restcountries.com/v3.1/alpha/${countryId}`);
        if (!response.ok) throw new Error("Country not found");
        const data = await response.json();
        setCountryData(data[0]);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchCountryDetails();
  }, [countryId]);

  if (loading) return <Spinner />;
  if (error) return <div className="p-6 text-red-600">Error: {error}</div>;

  const nativeName = countryData.name.nativeName
    ? Object.values(countryData.name.nativeName)[0].common
    : "N/A";
  const currencies = countryData.currencies
    ? Object.values(countryData.currencies).map((c) => c.name).join(", ")
    : "N/A";
  const languages = countryData.languages
    ? Object.values(countryData.languages).join(", ")
    : "N/A";

  return (
    <div className="mt-10 px-6 md:px-12 flex flex-col gap-10">
      {/* Flex container for back button and flag alignment */}
      <div className="flex flex-col md:flex-row md:items-start md:gap-12">
        {/* Back Button aligned with flag */}
        <div className="md:w-1/2 mb-8 md:mb-0">
          <button
            onClick={() => navigate(-1)}
            className={`p-3 rounded-full shadow-md ${
              theme === "light"
                ? "bg-white text-gray-800 border-gray-300 hover:bg-gray-100"
                : "bg-gray-800 text-white border-gray-600 hover:bg-gray-700"
            }`}
          >
            ← Back
          </button>
        </div>
      </div>

      {/* Main Content Layout */}
      <div className="flex flex-col md:flex-row gap-12 md:items-start">
        {/* Flag */}
        <div className="md:w-1/2 flex justify-center md:justify-start">
          <img
            src={countryData.flags.png}
            alt={`Flag of ${countryData.name.common}`}
            className="w-full max-w-md h-auto object-contain"
          />
        </div>

        {/* Country Details */}
        <div className="md:w-1/2 flex flex-col gap-6">
          <h1 className="text-3xl font-bold">{countryData.name.common}</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <p><strong>Native Name:</strong> {nativeName}</p>
              <p><strong>Population:</strong> {countryData.population.toLocaleString()}</p>
              <p><strong>Region:</strong> {countryData.region}</p>
              <p><strong>Sub Region:</strong> {countryData.subregion}</p>
              <p><strong>Capital:</strong> {countryData.capital?.[0] || "N/A"}</p>
            </div>
            <div className="flex flex-col gap-2">
              <p><strong>Top Level Domain:</strong> {countryData.tld?.join(", ")}</p>
              <p><strong>Currencies:</strong> {currencies}</p>
              <p><strong>Languages:</strong> {languages}</p>
            </div>
          </div>

          {countryData.borders && (
            <div className="mt-6">
              <h2 className="font-semibold text-lg mb-2">Border Countries:</h2>
              <div className="flex flex-wrap gap-2">
                {countryData.borders.map((code) => (
                 <Link to={`/country/${code}`}>
                   <span
                    key={code}
                    className="bg-gray-200 dark:bg-gray-700 text-sm px-3 py-1 rounded-md shadow-sm hover:bg-gray-300 dark:hover:bg-gray-600"
                  >
                    {code}
                  </span>
                 </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CountryDetails;

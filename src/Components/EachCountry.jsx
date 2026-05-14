import { useReducer } from "react";
import { Link, useNavigate } from "react-router-dom";

const initialState = {
  // Store the country image/flag
  flag: null,
  // Store the country name
  name: null,
  // Store the country population
  population: null,
  // Store the country region
  region: null,
  // Store the country capital
  capital: null,
  // Optional: Store the country cca3 code for unique identification
  cca3: null,
};

function reducer(state, action) {
  // Use a switch statement to handle different action types
  switch (action.type) {
    // When a country is selected/clicked
    case "SELECT_COUNTRY":
      return {
        ...state,
        flag: action.payload.flag,
        name: action.payload.name,
        population: action.payload.population,
        region: action.payload.region,
        capital: action.payload.capital,
        cca3: action.payload.cca3,
      };

    // Optional: Case to clear/reset the selected country
    case "CLEAR_COUNTRY":
      // Return the initial state to reset everything
      return initialState;

    // Default case: return current state if action type doesn't match
    default:
      return state;
  }
}

export function EachCountries({ countries, numericCode, choseCountry }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  function handleClick(country) {
    dispatch({
      type: "SELECT_COUNTRY",
      payload: country, // This contains: { flag, name, population, region, capital, cca3 }
    });

    choseCountry(country); // Pass the selected country to the parent
  }

  const renderCountry = (country, numericCode) => {
    return (
      <Link key={numericCode} to="/country">
        <div
          className="my-8 shadow-md cursor-pointer"
          onClick={() => handleClick(country)}
        >
          <div className="w-70 md:w-100">
            <img src={country.flag} alt={country.name} />
          </div>
          <div className="p-6">
            <h4 className="font-bold my-4">{country.name}</h4>
            <p>Population: {country.population}</p>
            <p>Region: {country.region}</p>
            <p>Capital: {country.capital}</p>
          </div>
        </div>
      </Link>
    );
  };

  return (
    <div className="flex flex-wrap justify-center gap-4">
      {countries.length === 0 ? (
        <div className="w-full flex flex-col items-center justify-center py-20 px-4 text-center">
          <h3 className="text-2xl font-bold mb-4 text-gray-500 dark:text-gray-400">
            No country found
          </h3>
          <p className="text-gray-600 dark:text-gray-300 max-w-md">
            Try adjusting your search or filter.
          </p>
        </div>
      ) : (
        countries.map(renderCountry)
      )}
    </div>
  );
}

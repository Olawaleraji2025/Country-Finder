import { useState } from "react";
import Header from "./Components/Header.jsx";
import { InputField } from "./Components/InputField.jsx";
import { Region } from "./Components/OptionField.jsx";
import { EachCountries } from "./Components/EachCountry.jsx";
import { CountryInfo } from "./Components/CountryInfo.jsx";
import countriesData from "./Data/data.json";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [lightMode, setLightMode] = useState(false);
  const [selectedCountry, setCountry] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [regionFilter, setRegionFilter] = useState("");

  function handleLightModeToggle() {
    setLightMode(!lightMode);
  }

  function handleClickedCountry(country) {
    setCountry(country);
  }

  const filteredCountries = countriesData.filter(
    (country) =>
      country.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
      (!regionFilter || country.region === regionFilter),
  );

  return (
    <BrowserRouter>
      <div className={`${lightMode ? "light-mode" : "dark-mode"} min-h-screen`}>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header toggleBtn={handleLightModeToggle} />
                <div className="block p-2 md:flex flex-wrap justify-around items-center">
                  <InputField value={searchQuery} onSearch={setSearchQuery} />
                  <Region
                    value={regionFilter}
                    onRegionChange={setRegionFilter}
                    className={`${lightMode ? "light-mode" : "dark-mode"} `}
                  />
                </div>

                {filteredCountries.length === 0 ? (
                  <div className="w-full flex flex-col items-center justify-center py-20 px-4 text-center min-h-screen">
                    <h3 className="text-2xl font-bold mb-4 text-gray-500 dark:text-gray-400">
                      No country found
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 max-w-md">
                      Try adjusting your search or filter.
                    </p>
                  </div>
                ) : (
                  <EachCountries
                    countries={filteredCountries}
                    choseCountry={handleClickedCountry}
                  />
                )}
              </>
            }
          />
          <Route
            path="/country"
            element={
              <>
                <Header toggleBtn={handleLightModeToggle} />
                <CountryInfo country={selectedCountry} />
              </>
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

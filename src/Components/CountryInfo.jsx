import { FaArrowLeftLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

export function CountryInfo({ country }) {
  return (
    <>
      {/* This is for the back botton */}
      <section className="flex m-4">
        <Link to="/">
          <button className="shadow-lg flex gap-3 p-2 items-center">
            <FaArrowLeftLong />
            <span>Back</span>
          </button>
        </Link>
      </section>

      <div className="block md:grid grid-cols-2 max-w-350">
        {/* This is for the image */}
        <section className="flex justify-center m-auto w-full max-w-60 md:max-w-none p-4 ">
          <img
            className=" my-8 md:w-100"
            src={country.flag}
            alt={country.name}
          />
        </section>

        {/* This includes the information about the country */}
        <div className="block m-auto w-80 p-4 md:w-auto">
          <section>
            <h1 className="text-lg my-4 font-bold">{country.name}</h1>
            <div className="block mx-auto w-full my-4 md:flex justify-center gap-10">
              <div>
                <p className="pb-2 ">Native Name: {country.nativeName}</p>
                <p className="pb-2 ">Population: {country.population}</p>
                <p className="pb-2 ">Region: {country.region}</p>
                <p className="pb-2 ">Sub-Region: {country.subregion}</p>
                <p className="pb-2 ">Capital: {country.capital}</p>
              </div>

              <div>
                <p className="pb-2 ">
                  Top Level Domain:{" "}
                  {country.topLevelDomain
                    ? country.topLevelDomain.join(", ")
                    : "N/A"}
                </p>
                <p className="pb-2 ">
                  Currencies:{" "}
                  {country.currencies
                    ? country.currencies.map((curr) => curr.name).join(", ")
                    : "N/A"}
                </p>
                <p className="pb-2 ">
                  Languages:{" "}
                  {country.languages
                    ? country.languages.map((lang) => lang.name).join(", ")
                    : "N/A"}
                </p>
              </div>
            </div>
          </section>
          {/* This is for the country borders */}

          <section className="block m-auto w-auto p-2 md:flex items-center">
            <h3>Border Countries:</h3>
            {country.borders && country.borders.length > 0 && (
              <div className="flex flex-wrap pb-4 md:pb-0 ">
                {country.borders.map((border, index) => (
                  <span key={index} className="shadow-md p-3 ">
                    {border}
                  </span>
                ))}
              </div>
            )}
          </section>
        </div>
      </div>
    </>
  );
}

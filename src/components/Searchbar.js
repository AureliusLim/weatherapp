import classes from "../layout/search.module.css";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";


function Searchbar() {
  const [searchval, setsearchval] = useState("");
  const [filteredCountries, setFilteredCountries] = useState([]);
  let countryval;
  const countries = [
    { country: "Philippines", link: "" },
    { country: "United States", link: "UnitedStates" },
    { country: "Algeria", link: "Algeria" },
    { country: "Argentina", link: "Argentina" },
    { country: "Australia", link: "Australia" },
    { country: "Bangladesh", link: "Bangladesh" },
    { country: "Belgium", link: "Belgium" },
    { country: "Brazil", link: "Brazil" },
    { country: "Canada", link: "Canada" },
    { country: "Chile", link: "Chile" },
    { country: "China", link: "China" },
    { country: "Colombia", link: "Colombia" },
    { country: "Denmark", link: "Denmark" },
    { country: "Finland", link: "Finland" },
    { country: "France", link: "France" },
    { country: "Germany", link: "Germany" },
    { country: "Greece", link: "Greece" },
    { country: "India", link: "India" },
    { country: "Indoesia", link: "Indonesia" },
    { country: "Italy", link: "Italy" },
    { country: "Japan", link: "Japan" },
    { country: "Kazakhstan", link: "Kazakhstan" },
    { country: "Pakistan", link: "Pakistan" },
    { country: "Russia", link: "Russia" },
    { country: "United Kingdom", link: "UnitedKingdom" },
  ];

  const handleChange = (e) => {
    setsearchval(e.target.value);
  };

  useEffect(() => {
    if (searchval.length > 0) {
      const word = searchval.toLowerCase();
      const filteredCountries = countries.filter((country) =>
        country.country.toLowerCase().includes(word)
      );
      setFilteredCountries(filteredCountries);
      console.log(filteredCountries)
    } else {
      console.log(countries)
      setFilteredCountries(countries);
    }
  }, [searchval]);

  return (
    <div className={classes.box}>
      <input
        className={classes.searchbar}
        type="text"
        onChange={handleChange}
        placeholder="Search a country"
      ></input>
      <div className={classes.container}>
      <div className={classes.rescontainer}>
          {filteredCountries.length === 0 && searchval.length > 0 ? (
            <p>Country not found</p>
          ) : (
            filteredCountries.map((country) => (
              <Link to={country.link} key={country.link}>
                <p>{country.country}</p>
              </Link>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default Searchbar;
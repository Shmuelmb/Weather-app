import React, { useEffect, useState } from "react";
import "./SearchBar.css";
import { get5DailyForecasts } from "../../utils/api";
import SearchField from "./SearchField/SearchField";
import ListCities from "./ListCities/ListCities";
import { useAutocomplete } from "../../hooks/useAutocomplete";
const SearchBar = ({ setForecast, setCityName, setQuery, query }) => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    e.preventDefault();
    setQuery(e.target.value);
    setInputValue(e.target.value);
  };

  const handleClick = (key, cityName) => {
    get5DailyForecasts(key, setForecast);
    setCityName(cityName);
    setQuery("");
  };
  const result = useAutocomplete(query);
  // useEffect(() => {
  //   autoComplete(query, setListCities);
  // }, [query]);

  return (
    <div className="search-bar">
      <SearchField
        handleChange={handleChange}
        setInputValue={setInputValue}
        inputValue={inputValue}
      />
      <ListCities
        listCities={result}
        setInputValue={setInputValue}
        handleClick={handleClick}
        setCityName={setCityName}
      />
    </div>
  );
};

export default SearchBar;

import React, { useState } from "react";
import "./SearchBar.css";
import { get5DailyForecasts, getCurrentWeather } from "../../utils/api";
import SearchField from "./SearchField/SearchField";
import ListCities from "./ListCities/ListCities";
import { useAutocomplete } from "../../hooks/useAutocomplete";
import Modal from "../../views/Modal";
const SearchBar = ({
  setForecast,
  setCityName,
  setQuery,
  query,
  setCurrentWeather,
}) => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    e.preventDefault();
    setQuery(e.target.value);
    setInputValue(e.target.value);
  };
  const handleClick = (key, cityName) => {
    get5DailyForecasts(key, setForecast);
    getCurrentWeather(key, setCurrentWeather);
    setCityName(cityName);
    setQuery("");
  };
  const result = useAutocomplete(query);

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
      {result?.length < 1 ? (
        <Modal content={"No result, please try again"} />
      ) : null}
    </div>
  );
};

export default SearchBar;

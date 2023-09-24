import React, { useEffect, useState } from "react";
import ForecastCard from "../components/ForecastCard/ForecastCard";
import SearchBar from "../components/SearchBar/SearchBar";
import "./views.css";
const HomePage = () => {
  const [query, setQuery] = useState("");
  const [forecast, setForecast] = useState(false);
  const [cityName, setCityName] = useState("Tel Aviv");

  return (
    <div className="view-page">
      <SearchBar
        setForecast={setForecast}
        setCityName={setCityName}
        setQuery={setQuery}
        query={query}
      />
      {forecast ? (
        <ForecastCard query={query} cityName={cityName} forecast={forecast} />
      ) : null}
    </div>
  );
};

export default HomePage;

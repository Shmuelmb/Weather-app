import React, { useEffect, useState } from "react";
import ForecastCard from "../components/ForecastCard/ForecastCard";
import SearchBar from "../components/SearchBar/SearchBar";
import { get5DailyForecasts, getCurrentWeather } from "../utils/api";
import "./views.css";
const HomePage = () => {
  const [query, setQuery] = useState("");
  const [forecast, setForecast] = useState(false);
  const [cityName, setCityName] = useState("Tel Aviv");
  const [currentWeather, setCurrentWeather] = useState(false);

  useEffect(() => {
    get5DailyForecasts("215854", setForecast);
    getCurrentWeather("215854", setCurrentWeather);
    // reload default city "Tel Aviv"
  }, []);

  return (
    <div className="view-page">
      <SearchBar
        setCurrentWeather={setCurrentWeather}
        setForecast={setForecast}
        setCityName={setCityName}
        setQuery={setQuery}
        query={query}
      />
      {forecast ? (
        <ForecastCard
          query={query}
          cityName={cityName}
          forecast={forecast}
          currentWeather={currentWeather}
        />
      ) : null}
    </div>
  );
};

export default HomePage;

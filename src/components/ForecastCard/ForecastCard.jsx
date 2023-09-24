import React, { useEffect, useState } from "react";
import "./ForecastCard.css";
import FiveDaysForecasts from "./FiveDaysForecasts/FiveDaysForecasts";
import { checkIsSave } from "../../utils/utilities";
import { addItemToLocalStorage } from "../../utils/utilities";

const ForecastCard = ({ forecast, cityName, query }) => {
  const [isSave, setIsSave] = useState(false);

  useEffect(() => {
    setIsSave(checkIsSave(cityName));
  }, [cityName]);

  return (
    <div className={query ? "none" : "card"}>
      <div className="header-card">
        <h2>{cityName}</h2>
        <svg
          onClick={() => {
            addItemToLocalStorage({ cityName: cityName, forecast: forecast });
            setIsSave(checkIsSave(cityName));
          }}
          className={isSave ? "save-to-fav heart-icon" : "heart-icon "}
          fill="none"
          height="24"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          width="24"
          xmlns="http://www.w3.org/2000/svg">
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
        </svg>
      </div>
      <div className="temperature">
        <div className="sky">
          <div className="sun"></div>
          <div className="cloud">
            <div className="circle-small"></div>
            <div className="circle-tall"></div>
            <div className="circle-medium"></div>
          </div>
        </div>
        <h1>{`${forecast[0].day_temp}° `}</h1>
      </div>
      <FiveDaysForecasts forecast={forecast} />
    </div>
  );
};

export default ForecastCard;

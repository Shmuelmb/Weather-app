import React from "react";
import "./FiveDaysForecasts.css";
const FiveDaysForecasts = ({ forecast }) => {
  return (
    <div className="five-days-forecasts">
      <div className="days">
        {forecast.map((day, key) => (
          <p key={key}>{day.day_date}</p>
        ))}
      </div>
      <div className="day-temp">
        {forecast.map((day, key) => (
          <p key={key}>{day.day_temp}</p>
        ))}
      </div>
      <div className="night-temp">
        {forecast.map((day, key) => (
          <p key={key}>{day.night_temp}</p>
        ))}
      </div>
    </div>
  );
};

export default FiveDaysForecasts;

import React from "react";
import "./FiveDaysForecasts.css";
const FiveDaysForecasts = ({ forecast }) => {
  return (
    <table className="five-days-forecasts  ">
      {forecast.map((forecast, key) => (
        <tbody key={key} className="flex-col-center">
          <tr>
            <th className="day">{forecast.day}</th>
          </tr>
          <tr className="flex-col-center">
            <td className="day-temp">{forecast.day_temp}</td>
            <td className="night-temp">{forecast.night_temp}</td>
          </tr>
        </tbody>
      ))}
    </table>
  );
};

export default FiveDaysForecasts;

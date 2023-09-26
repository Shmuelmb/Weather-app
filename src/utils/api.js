import { fahrenheitToCelsius, getDayOfWeek } from "./utilities";

export const API_KEY = import.meta.env.VITE_API_KEY;
export const BASE_URL = "https://dataservice.accuweather.com";
export const getCurrentWeather = async (cityKey, setState = undefined) => {
  try {
    const req = await fetch(
      `${BASE_URL}/currentconditions/v1/${cityKey}?apikey=${API_KEY}`
    );
    const data = await req.json();
    setState({
      Temperature: data[0].Temperature.Metric.Value,
      WeatherText: data[0].WeatherText,
    });
  } catch (err) {
    console.log(err);
  }
};
export const get5DailyForecasts = async (cityKey, setState) => {
  try {
    const req = await fetch(
      `${BASE_URL}/forecasts/v1/daily/5day/${cityKey}?apikey=${API_KEY} `
    );
    const data = await req.json();
    const fiveDailyForecasts = data.DailyForecasts.map((day) => {
      return {
        day: getDayOfWeek(day.Date).slice(0, 3),
        day_temp: fahrenheitToCelsius(day.Temperature.Maximum.Value),
        night_temp: fahrenheitToCelsius(day.Temperature.Minimum.Value),
      };
    });
    setState(fiveDailyForecasts);
  } catch (err) {
    console.log(err);
  }
};

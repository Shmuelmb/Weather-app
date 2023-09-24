import { fahrenheitToCelsius, getDayOfWeek } from "./utilities";

export const API_KEY = import.meta.env.VITE_API_KEY;
export const BASE_URL = "https://dataservice.accuweather.com";

// export const autoComplete = async (query, setState) => {
//   try {
//     const req = await fetch(
//       `${BASE_URL}/locations/v1/cities/autocomplete?apikey=${API_KEY}&q=${query}`
//     );
//     const data = await req.json();
//     setState(data);
//   } catch (err) {
//     console.log(err);
//   }
// };

export const get5DailyForecasts = async (cityKey, setState) => {
  try {
    const req = await fetch(
      `${BASE_URL}/forecasts/v1/daily/5day/${cityKey}?apikey=${API_KEY} `
    );
    const data = await req.json();
    const fiveDailyForecasts = data.DailyForecasts.map((day) => {
      return {
        day_date: getDayOfWeek(day.Date).slice(0, 3),
        day_temp: fahrenheitToCelsius(day.Temperature.Maximum.Value),
        night_temp: fahrenheitToCelsius(day.Temperature.Minimum.Value),
      };
    });
    setState(fiveDailyForecasts);
  } catch (err) {
    console.log(err);
  }
};

// export const getForecast = async (cityKey, setState = undefined) => {
//   try {
//     const req = await fetch(
//       `http://dataservice.accuweather.com/forecasts/v1/daily/1day/${cityKey}?apikey=Sd1Yl9GxK3Q25O4Cbrna3uLdrbzdzGdy `
//     );
//     const data = await req.json();
//     const day_temp = fahrenheitToCelsius(
//       data.DailyForecasts[0].Temperature.Maximum.Value
//     );
//     const night_temp = fahrenheitToCelsius(
//       data.DailyForecasts[0].Temperature.Minimum.Value
//     );
//     setState({ day_temp: day_temp, night_temp: night_temp });
//   } catch (err) {
//     console.log(err);
//   }
// };

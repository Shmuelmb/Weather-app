import { API_KEY } from "../utils/api";
import { BASE_URL } from "../utils/api";
import { useEffect, useState } from "react";

export const useAutocomplete = (query) => {
  const [result, setResult] = useState([]);

  useEffect(() => {
    const fetchCities = async () => {
      try {
        const req = await fetch(
          `${BASE_URL}/locations/v1/cities/autocomplete?apikey=${API_KEY}&q=${query}`
        );
        const data = await req.json();
        setResult(data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchCities();
  }, [query]);

  return result;
};

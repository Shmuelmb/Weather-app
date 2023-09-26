import { useEffect, useState } from "react";
import { getCityFromGeolocation } from "../utils/api";
export const useCityFromGeolocation = () => {
  const [result, setResult] = useState([]);

  useEffect(() => {
    getCityFromGeolocation()
      .then((city) => {
        setResult(`${city}`);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return result;
};

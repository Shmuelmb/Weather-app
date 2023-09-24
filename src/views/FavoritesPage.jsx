import React, { useEffect, useState } from "react";
import ForecastCard from "../components/ForecastCard/ForecastCard";
import "./views.css";

const FavoritesPage = () => {
  const [favCities, setFavCities] = useState([]);
  useEffect(() => {
    setFavCities(JSON.parse(localStorage.getItem("favorites-cities")));
  }, []);
  return (
    <div className="view-page fav-page">
      {favCities?.length > 0 ? (
        favCities.map((city, key) => (
          <div
            key={key}
            onClick={() =>
              setFavCities(JSON.parse(localStorage.getItem("favorites-cities")))
            }>
            <ForecastCard
              forecast={city.forecast}
              cityName={city.cityName}
              query={""}
            />
          </div>
        ))
      ) : (
        <h1>You haven't added anything here yet</h1>
      )}
    </div>
  );
};
export default FavoritesPage;

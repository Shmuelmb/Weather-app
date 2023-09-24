import React from "react";
import "./ListCities.css";

const ListCities = ({
  listCities,
  setCityName,
  handleClick,
  setInputValue,
}) => {
  return (
    <ul className="list-cities">
      {listCities
        ? listCities.map((result, key) => (
            <li
              onClick={() => {
                setInputValue(result.LocalizedName);
                handleClick(result.Key);
                setCityName(result.LocalizedName);
              }}
              key={key}>
              {result.LocalizedName}
            </li>
          ))
        : null}
    </ul>
  );
};

export default ListCities;

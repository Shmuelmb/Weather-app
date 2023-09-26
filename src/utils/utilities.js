export const fahrenheitToCelsius = (fahrenheit) => {
  const celsius = ((fahrenheit - 32) * 5) / 9;
  return celsius.toFixed(1);
};

function hasDuplicate(list, newItem) {
  // Check if the name is already in the list objects
  return list.some((item) => item.cityName === newItem);
}

export const checkIsSave = (item) => {
  const existingListJSON = localStorage.getItem("favorites-cities");
  const existingList = existingListJSON ? JSON.parse(existingListJSON) : [];
  return hasDuplicate(existingList, item) ? true : false;
};

const updatedList = (objectList, objectIdToRemove) =>
  objectList.filter((obj) => obj.cityName !== objectIdToRemove);

export const addItemToLocalStorage = (item) => {
  const existingListJSON = localStorage.getItem("favorites-cities");
  const existingList = existingListJSON ? JSON.parse(existingListJSON) : [];

  if (!hasDuplicate(existingList, item.cityName)) {
    // Step 3: Add the new item to the list

    existingList.push(item);

    // Step 4: Update localStorage with the updated list
    localStorage.setItem("favorites-cities", JSON.stringify(existingList));
  } else {
    localStorage.setItem(
      "favorites-cities",
      JSON.stringify(updatedList(existingList, item.cityName))
    );
  }
};

export const getDayOfWeek = (dateString) => {
  const fullDate = new Date(dateString);
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const dayOfWeek = daysOfWeek[fullDate.getDay()];

  return dayOfWeek;
};

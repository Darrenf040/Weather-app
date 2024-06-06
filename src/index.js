import weatherLocationData, {
  getCurrentWindSpeed,
  getCurrentTempF,
} from "./currentWeather.js";

import forecastLocationData, { getHighTemp, getLowTemp } from "./forecast.js";

import {
  changeCurrentTemp,
  changeWeatherStatus,
  changeWeatherIcon,
  changeHighTemp,
  changeLowTemp,
} from "./weatherStatus.js";

const citySearchBox = document.getElementById("city");
const confirmSearch = document.querySelector(".search-city");
const hiddenElements = document.querySelectorAll(".hidden");

confirmSearch.addEventListener("click", async (e) => {
  e.preventDefault();

  //users input value is the city they typed in search box
  const userInput = citySearchBox.value;

  //hide weather card when users give invalid input
  if (userInput == "" || userInput == undefined) {
    hiddenElements.forEach((ele) => ele.classList.add("hidden"));
  } else {
    hiddenElements.forEach((ele) => ele.classList.remove("hidden"));
  }

  //pass in the users input and wait to retrieve the citys data in an object
  const locationData = await weatherLocationData(userInput);

  //pass in users input and wait to retrieve citys forecast data in an object
  const forecastData = await forecastLocationData(userInput);

  const highTemp = getHighTemp(forecastData);
  const lowTemp = getLowTemp(forecastData);
  const currentTemp = getCurrentTempF(locationData);

  //add text and icon to the dom
  changeCurrentTemp(currentTemp);
  changeHighTemp(highTemp);
  changeLowTemp(lowTemp);
  changeWeatherIcon(locationData);
  changeWeatherStatus(locationData);
});

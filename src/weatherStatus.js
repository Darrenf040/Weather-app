import weatherLocationData, { getCurrentTempF } from "./currentWeather";
import forecastLocationData, { getHighTemp, getLowTemp } from "./forecast.js";

const weatherIcon = document.querySelector(".weather-icon");
const currentTemp = document.querySelector(".current-weather");
const weatherStatus = document.querySelector(".weather-status");
const high = document.querySelector(".high");
const low = document.querySelector(".low");

const weatherData = await weatherLocationData("houston");
const forecastData = await forecastLocationData("houston");

async function changeWeatherIcon() {
  const condition = weatherData.current.condition.icon;
  weatherIcon.src = condition;
}

function changeCurrentTemp() {
  const currentTempF = getCurrentTempF(weatherData);
  currentTemp.textContent = currentTempF + "\u00B0F";
}
function changeWeatherStatus() {
  const conditionStatus = weatherData.current.condition.text;
  weatherStatus.textContent = conditionStatus;
}

function changeHighTemp() {
  const highTemp = getHighTemp(forecastData);
  high.textContent = `H: ${highTemp}\u00B0F`;
}
function changeLowTemp() {
  const lowTemp = getLowTemp(forecastData);
  low.textContent = `L: ${lowTemp}\u00B0F`;
}
changeWeatherIcon();
changeCurrentTemp();
changeWeatherStatus();
changeHighTemp();
changeLowTemp();

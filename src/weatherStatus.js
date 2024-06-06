const weatherIcon = document.querySelector(".weather-icon");
const currentTemp = document.querySelector(".current-weather");
const weatherStatus = document.querySelector(".weather-status");
const high = document.querySelector(".high");
const low = document.querySelector(".low");

function changeWeatherIcon(weatherData) {
  const condition = weatherData.current.condition.icon;
  weatherIcon.src = condition;
}

function changeCurrentTemp(currentTempF) {
  currentTemp.textContent = currentTempF + "\u00B0F";
}
function changeWeatherStatus(weatherData) {
  const conditionStatus = weatherData.current.condition.text;
  weatherStatus.textContent = conditionStatus;
}

function changeHighTemp(highTemp) {
  high.textContent = `H: ${highTemp}\u00B0F`;
}
function changeLowTemp(lowTemp) {
  low.textContent = `L: ${lowTemp}\u00B0F`;
}

export {
  changeWeatherIcon,
  changeCurrentTemp,
  changeWeatherStatus,
  changeHighTemp,
  changeLowTemp,
};

import weatherLocationData, {
  getCurrentTempF,
  getCurrentTempC,
  getCurrentWindSpeed,
} from "./currentWeather.js";
import forecastLocationData, {
  getHighTemp,
  getLowTemp,
  getAvgTemp,
} from "./forecast.js";

const citySearchBox = document.getElementById("city");
const confirmSearch = document.querySelector(".search-city");

confirmSearch.addEventListener("click", async (e) => {
  e.preventDefault();
  //users input value is the city they typed in search box
  const userInput = citySearchBox.value;
  //pass in the users input and wait to retrieve the citys data in an object
  const locationData = await weatherLocationData(userInput);
  console.log(getCurrentTempF(locationData));
  console.log(getCurrentTempC(locationData));
  console.log(getCurrentWindSpeed(locationData));

  //pass in users input and wait to retrieve citys forecast data in an object
  const forecastData = await forecastLocationData(userInput);
  console.log(getHighTemp(forecastData));
  console.log(getLowTemp(forecastData));
  console.log(getAvgTemp(forecastData));
});

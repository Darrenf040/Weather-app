export default async function forecastLocationData(city) {
  const forecastUrl = `http://api.weatherapi.com/v1/forecast.json?key=318ddc196cd94dffaab10400243105&q=${city}`;

  //wait for forecast api call
  const forecastResponse = await fetch(forecastUrl, {
    mode: "cors",
  });
  try {
    //wait for response to convert to json
    const forecastData = await forecastResponse.json();
    return forecastData;
  } catch (err) {
    console.error(err.error);
  }
}

//returns the high temp (fahrenheit) for the day
function getHighTemp(forecastData) {
  return Math.round(forecastData.forecast.forecastday[0].day.maxtemp_f);
}
//returns the low temp (fahrenheit) for the day
function getLowTemp(forecastData) {
  return Math.round(forecastData.forecast.forecastday[0].day.mintemp_f);
}
//returns the average temp (fahrenheit) for the day
function getAvgTemp(forecastData) {
  return Math.round(forecastData.forecast.forecastday[0].day.avgtemp_f);
}

export { getHighTemp, getLowTemp, getAvgTemp };

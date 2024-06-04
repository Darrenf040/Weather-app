export async function forecastLocationData(city) {
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

const currentForecast = await forecastLocationData("houston");

//returns the high temp (fahrenheit) for the day
function getHighTemp() {
  return currentForecast.forecast.forecastday[0].day.maxtemp_f;
}
//returns the low temp (fahrenheit) for the day
function getLowTemp() {
  return currentForecast.forecast.forecastday[0].day.mintemp_f;
}
//returns the average temp (fahrenheit) for the day
function getAvgTemp() {
  return currentForecast.forecast.forecastday[0].day.avgtemp_f;
}

function printAllData() {
  console.log("High:", getHighTemp());
  console.log("Low:", getLowTemp());
  console.log("Avg:", getAvgTemp());
}

printAllData();

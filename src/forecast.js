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
    console.error(err);
  }
}

const currentForecast = await forecastLocationData("Houston");
console.log(currentForecast);

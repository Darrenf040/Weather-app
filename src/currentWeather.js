export default async function weatherLocationData(city) {
  //api url changes has dynamic query parameter (city)
  const currentWeatherUrl = `http://api.weatherapi.com/v1/current.json?key=318ddc196cd94dffaab10400243105&q=${city}`;

  //wait for api call to return a response
  const response = await fetch(currentWeatherUrl, {
    mode: "cors",
  });

  try {
    //wait for response to be converted to json
    const weatherData = await response.json();
    return weatherData;
  } catch (err) {
    console.error(err);
  }
}

//returns locations temerature in fareignheight
function getCurrentTempF(weatherData) {
  return Math.round(weatherData.current.temp_f);
}

//returns locations temerature in celsius
function getCurrentTempC(weatherData) {
  return Math.round(weatherData.current.temp_c);
}
//returns locations wind speed in mph
function getCurrentWindSpeed(weatherData) {
  return Math.round(weatherData.current.wind_mph);
}

export { getCurrentTempF, getCurrentTempC, getCurrentWindSpeed };

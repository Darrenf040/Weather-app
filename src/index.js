async function weatherLocationData(userLocation) {
  //api url changes its location based on userLocations value
  const currentWeatherUrl = `http://api.weatherapi.com/v1/current.json?key=318ddc196cd94dffaab10400243105&q=${userLocation}`;

  //wait for api call to return a response
  const currentWeather = await fetch(currentWeatherUrl, {
    mode: "cors",
  });

  try {
    //wait for response to be converted to json
    const response = await currentWeather.json();
    console.log(response);
    console.log(response.current.h);

    return response;
  } catch (err) {
    console.error(err);
  }
}
weatherLocationData("houston");

//returns locations temerature in fareignheight
function getCurrentTempF(locationDataJson) {
  return locationDataJson.current.temp_f;
}

//returns locations temerature in celsius
function getCurrentTempC(locationDataJson) {
  return locationDataJson.current.temp_c;
}
//returns locatoins wind speed in mph
function getCurrentWindSpeed(locationDataJson) {
  return locationDataJson.wind_mph;
}

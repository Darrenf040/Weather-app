export async function weatherLocationData(userLocation) {
  //api url changes its location based on userLocations value
  const currentWeatherUrl = `http://api.weatherapi.com/v1/current.json?key=318ddc196cd94dffaab10400243105&q=${userLocation}`;

  //wait for api call to return a response
  const currentWeather = await fetch(currentWeatherUrl, {
    mode: "cors",
  });

  try {
    //wait for response to be converted to json
    const response = await currentWeather.json();
    return response;
  } catch (err) {
    console.error(err);
  }
}

//json with the locations data
const weatherResponse = await weatherLocationData("London"); //adding await returns the promises value

//returns locations temerature in fareignheight
function getCurrentTempF() {
  return weatherResponse.current.temp_f;
}

//returns locations temerature in celsius
function getCurrentTempC() {
  return weatherResponse.current.temp_c;
}
//returns locations wind speed in mph
function getCurrentWindSpeed() {
  return weatherResponse.current.wind_mph;
}

function printLocationData() {
  console.log(getCurrentTempF());
  console.log(getCurrentTempC());
  console.log(getCurrentWindSpeed());
}

printLocationData();

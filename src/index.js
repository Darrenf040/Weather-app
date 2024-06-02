const currentWeatherUrl =
  "http://api.weatherapi.com/v1/current.json?key=318ddc196cd94dffaab10400243105&q=houston";

async function getCurrentWeather(apiUrl) {
  const currentWeather = await fetch(apiUrl, {
    mode: "cors",
  });
  const response = await currentWeather.json();

  console.log(currentWeather);
  console.log(response);
}
getCurrentWeather(currentWeatherUrl);

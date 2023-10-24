
// Returns object with needed data from the inputted location
async function getWeatherData(location) {
    const url = `https://api.weatherapi.com/v1/current.json?key=c06666a5ce6c406e9d3211443232010&q=${location}`;

    const response = await fetch(url, {mode: 'cors'});
    const weatherData = await response.json();

    console.log(weatherData);
    return weatherData;
}

export default getWeatherData;
import getWeatherData from './weather-data';

// Dom Elements
const conditionDiv = document.querySelector('.condition');
const locationDiv = document.querySelector('.location');
const degreesFDiv = document.querySelector('.f');
const degreesCDiv = document.querySelector('.c');
const windDiv = document.querySelector('.wind');
const windDirDiv = document.querySelector('.wind-dir');
const humidityDiv = document.querySelector('.humidity');

async function displayWeather(loc) {
    const weatherData = await getWeatherData(loc);

    if(weatherData.error != undefined){
        alert(weatherData.error.message);
        return;
    }

    // Info to be used
    const condition = weatherData.current.condition.text;
    const location = `${weatherData.location.name}, ${weatherData.location.country}`;
    const degreesF = weatherData.current.temp_f;
    const degreesC = weatherData.current.temp_c;
    const wind = `Wind Speed: ${weatherData.current.wind_mph} MPH`;
    const windDir = `Wind Direction: ${weatherData.current.wind_dir}`;
    const humidity = `Humidity: ${weatherData.current.humidity}%`;

    conditionDiv.textContent = condition;
    locationDiv.textContent = location;
    degreesFDiv.textContent = degreesF;
    degreesCDiv.textContent = degreesC;
    windDiv.textContent = wind;
    windDirDiv.textContent = windDir;
    humidityDiv.textContent = humidity;
}

export default displayWeather;
import "./style.css";
import displayWeather from './weather-display';

console.log("Starting Program...");

// Search bar
const search = document.querySelector('.search');

search.addEventListener('keydown', (e) => {
    if (e.key == 'Enter'){
        console.log('Displaying Weather Data...');
        displayWeather(search.value);
    }
})

displayWeather('London');
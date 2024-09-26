const apiKey = 'd686ec0b43389dfda374786cde61e2b2';
const getWeatherBtn = document.getElementById('getWeatherBtn');
const weatherInfo = document.getElementById('weatherInfo');
const cityName = document.getElementById('cityName');
const temperature = document.getElementById('temperature');
const description = document.getElementById('description');
const weatherIcon = document.getElementById('weatherIcon');

// Mapping of weather conditions to icons
const weatherIcons = {
    "clear sky": "images/clear.png",
    "few clouds": "images/cloud.png",
    "scattered clouds": "images/cloud.png",
    "broken clouds": "images/cloud.png",
    "shower rain": "images/rain.png",
    "rain": "images/rain.png",
    "snow": "images/snow.png",
    "mist": "images/mist.png",
    "thunder": "images/thunder.png",
    "fog": "images/foggy.png",
    "cloud": "images/partly-cloudy.png"
};

getWeatherBtn.addEventListener('click', function () {
    const city = document.getElementById('city').value;
    if (city) {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
            .then(response => response.json())
            .then(data => {
                
                cityName.textContent = data.name;
                temperature.textContent = `Temperature: ${data.main.temp}°C`;
                description.textContent = `Weather: ${data.weather[0].description}`;

                
                const weatherCondition = data.weather[0].description;
                const customIcon = weatherIcons[weatherCondition] || "images/404.png";

                weatherIcon.src = customIcon;
                weatherIcon.style.display = 'block';


                weatherInfo.style.display = 'block';
            })
            .catch(error => {
                alert('City not found. Please try again.');
            });
    } else {
        alert('Please enter a city name.');
    }
});


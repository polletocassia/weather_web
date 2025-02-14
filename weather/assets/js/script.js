const container = document.querySelector('.container');
const search = document.querySelector('.search-box button');
const weatherBox = document.querySelector('.weather-box');
const weatherDetails = document.querySelector('.weather-details');
const error404 = document.querySelector('.not-found');

search.addEventListener('click', () => {

    const APIKey = 'cedece3c3c16a8f2c712153dd707dbb9';
    const city = document.querySelector('.search-box input').value;

    if (city == '')
        return;

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}`).then(response => response.json()).then
        (json => {

            if (json.cod == '404') {
                container.style.height = '500px';
                weatherBox.style.display = 'none';
                weatherDetails.style.display = 'none';
                error404.style.display = 'block';
                error404.classList.add('fadeIn');
                return;
            }

            error404.style.display = 'none';
            error404.classList.remove('fadeIn');

            const image = document.querySelector('.weather-box img');
            const temperature = document.querySelector('.weather-box .temperature');
            const description = document.querySelector('.weather-box .description');
            const humidity = document.querySelector('.weather-details .humidity span');
            const wind = document.querySelector('.weather-details .wind span');
            const visibility = document.querySelector('.weather-details .visibility span');
            const dewPoint = document.querySelector('.weather-details .dew-point span');

            const dewPointValue = json.main.temp - ((100 - json.main.humidity) / 5);

            switch (json.weather[0].main) {
                case 'Clear':
                    image.src = 'assets/img/clear.png';
                    break;

                case 'Clouds':
                    image.src = 'assets/img/cloud.png';
                    break;

                case 'Mist':
                    image.src = 'assets/img/mist.png';
                    break;

                case 'Rain':
                    image.src = 'assets/img/rain.png';
                    break;

                case 'Snow':
                    image.src = 'assets/img/snow.png';
                    break;

                default:
                    image.src = '';
            }

            temperature.innerHTML = `${parseInt(json.main.temp)}<span>°C</span>`;
            description.innerHTML = `${json.weather[0].description}`;
            humidity.innerHTML = `${json.main.humidity}%`;
            wind.innerHTML = `${parseInt(json.wind.speed)}Km/h`;
            visibility.innerHTML = `${json.visibility / 1000} km`;
            dewPoint.innerHTML = `${dewPointValue.toFixed(0)}°C`;
            
            weatherBox.style.display = '';
            weatherDetails.style.display = '';
            weatherBox.classList.add('fadeIn');
            weatherDetails.classList.add('fadeIn');
            container.style.height = '790px';
        });
});
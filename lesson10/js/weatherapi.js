const apiWeatherURL = "http://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&appid=4525e1da6c6e94ce8e10f5f9d9d3db01"
fetch(apiWeatherURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    document.getElementById('weather-description').textContent = jsObject.weather[0].main;
    document.getElementById('temp').textContent = jsObject.main.temp.toFixed(0);
    let temp = jsObject.main.temp
    let speed = jsObject.wind.speed
    windChill(temp, speed)
    document.getElementById('humidity').textContent = jsObject.main.humidity;
    document.getElementById('speed').textContent = jsObject.wind.speed.toFixed(0);
  });

const apiForecastURL = "http://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&appid=4525e1da6c6e94ce8e10f5f9d9d3db01"
fetch(apiForecastURL)
    .then((response) => response.json())
    .then((forecast) => {
        console.log(forecast);

        for (let i in forecast.list) {
          if (forecast.list[i].dt_txt.includes("18:00:00")) {
            let forecastBox = document.createElement('div');
            forecastBox.setAttribute('class', 'forecast');

            let forecastDay = document.createElement('div');
            forecastDay.setAttribute('class', 'forecast-day');
            
            forecastWeekDay = new Date(forecast.list[i].dt_txt);
            forecastDayName = forecastWeekDay.getDay();
            forecastDay.textContent = days[forecastDayName].substring(0, 3);
            
            forecastBox.appendChild(forecastDay);

            let forecastImg = document.createElement('img');
            const forecastImgSrc = 'https://openweathermap.org/img/wn/' + forecast.list[i].weather[0].icon + '@2x.png';
            const imgAltDesc = forecast.list[i].weather[0].description;

            forecastImg.setAttribute('class', 'forecast-img');
            forecastImg.setAttribute('src', forecastImgSrc);
            forecastImg.setAttribute('alt', imgAltDesc);
            
            forecastBox.appendChild(forecastImg);

            let forecastTemp = document.createElement('p');
            forecastTemp.setAttribute('class', 'forecast-temp');

            forecastTemp.textContent = forecast.list[i].main.temp_max.toFixed(0) + '°F';

            forecastBox.appendChild(forecastTemp);

            document.querySelector('.forecast-div').appendChild(forecastBox); 
    }}});
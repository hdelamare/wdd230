const apiWeatherURL = "https://api.openweathermap.org/data/2.5/onecall?lat=39.0997&lon=-94.5786&exclude=minutely,hourly&units=imperial&appid=4525e1da6c6e94ce8e10f5f9d9d3db01"
fetch(apiWeatherURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);

    document.getElementById('temp').textContent = jsObject.current.temp.toFixed(0) + '°F';
    document.getElementById('weather-desc').textContent = jsObject.current.weather[0].main;
    document.getElementById('humidity').textContent = jsObject.current.humidity;

    for (let i in jsObject.daily) {
      if (i == 0 || i == 1 || i == 2) {
        let forecastBox = document.createElement('div');
            forecastBox.setAttribute('class', 'forecast');

            let forecastDay = document.createElement('div');
            forecastDay.setAttribute('class', 'forecast-day');
            
            forecastWeekDay = new Date(jsObject.daily[i].dt * 1000).toDateString();
            console.log(forecastWeekDay)

            forecastDay.textContent = forecastWeekDay.substring(0, 3).toUpperCase();
            // forecastDayName = forecastWeekDay.getDay();
            // forecastDay.textContent = days[forecastDayName].substring(0, 3);
            
            forecastBox.appendChild(forecastDay);

            let forecastImg = document.createElement('img');
            const forecastImgSrc = 'https://openweathermap.org/img/wn/' + jsObject.daily[i].weather[0].icon + '@2x.png';
            const imgAltDesc = jsObject.daily[i].weather[0].description;

            forecastImg.setAttribute('class', 'forecast-img');
            forecastImg.setAttribute('src', forecastImgSrc);
            forecastImg.setAttribute('alt', imgAltDesc);
            
            forecastBox.appendChild(forecastImg);

            let forecastTemp = document.createElement('p');
            forecastTemp.setAttribute('class', 'forecast-temp');

            forecastTemp.textContent = jsObject.daily[i].temp.day.toFixed(0) + '°F';

            forecastBox.appendChild(forecastTemp);

            document.querySelector('.forecast-div').appendChild(forecastBox);
      }
    }
    
    if (jsObject.alerts) {
        console.log('There is a weather alert')
    }

    else {
        console.log('There are no alerts')
    }
  });
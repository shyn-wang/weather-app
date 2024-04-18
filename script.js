function getWeather() {
    const key = 'c290be99f9e246c687400007241804';
    const city = document.getElementById("locationInput").value;
    const currentWeatherAPIUrl = `http://api.weatherapi.com/v1/current.json?key=${key}&q=${city}&aqi=yes`;
    const forecastWeatherAPIUrl = `http://api.weatherapi.com/v1/forecast.json?key=${key}&q=${city}&days=1&aqi=no&alerts=no`

    fetch(currentWeatherAPIUrl)
        .then(response => response.json())
        .then(data => {
            displayWeatherCurrent(data);
             console.log(data);
             console.log(data.location.localtime);
        })
        .catch(error => {
            console.error('error fetching data: ', error);
            alert('error fetching weather, please try again');
        });

    fetch(forecastWeatherAPIUrl)
        .then(response => response.json())
        .then(data1 => {
            displayWeatherForecast(data1);
             console.log(data1);
             console.log(data1.location.localtime);
        })
        .catch(error => {
            console.error('error fetching data: ', error);
            alert('error fetching weather, please try again');
        });
}



function displayWeatherCurrent(data) {
    const conditionInfoDiv = document.getElementById('condition-info');

    conditionInfoDiv.innerHTML = ' ';

    // current
    const cityName = data.location.name;
    const currentTemp = Math.round(data.current.temp_c);
    const condition = data.current.condition.text;
    const feelsLike = Math.round(data.current.feelslike_c);
    const conditionIcon = data.current.condition.icon;

    // time
    const time = data.location.localtime
    const time_parsed = time.split(" ")[1];
    const hours = time_parsed.split(":")[0];
    const minutes = time_parsed.split(":")[1];

    const conditionHTML = `
        <img src = ${conditionIcon}
            width = '128'
            height = '128'
        />
        <p id = 'locationName'>${cityName}</p>
        <p>${condition}</p>
        <p>${time}</p>
        <p>${currentTemp}&deg;C | Feels Like ${feelsLike}&deg;C</p>
    `
    conditionInfoDiv.innerHTML = conditionHTML;

    document.body.classList.remove("morning");
    document.body.classList.remove("evening");
    document.body.classList.remove("night");

    if(hours >= 0 && hours <= 6){
        document.body.classList.add("morning");
    } else if(hours >= 7 && hours <= 19) {
        document.body.classList.add("evening");
    } else if(hours >=20  && hours <= 24){
        document.body.classList.add("night");
    }
}


function displayWeatherForecast(data1) {
    const tempInfoDiv = document.getElementById('temp-info');

    // forecast
    const hourZero = Math.round(data1.forecast.forecastday[0].hour[0].temp_c);
    console.log(hourZero);
    const hourFour = Math.round(data1.forecast.forecastday[0].hour[3].temp_c);
    console.log(hourFour);
    const hourEight = Math.round(data1.forecast.forecastday[0].hour[7].temp_c);
    console.log(hourEight);
    const hourTwelve = Math.round(data1.forecast.forecastday[0].hour[11].temp_c);
    console.log(hourTwelve);
    const hourSixteen = Math.round(data1.forecast.forecastday[0].hour[15].temp_c);
    console.log(hourSixteen);
    const hourTwenty = Math.round(data1.forecast.forecastday[0].hour[15].temp_c);
    console.log(hourTwenty);

    const tempHTML = `
    <h1>Hourly Forecast</h1>
    <p>00:00 - ${hourZero}&deg;C</p>
    <p>04:00 - ${hourFour}&deg;C</p>
    <p>08:00 - ${hourEight}&deg;C</p>
    <p>12:00 - ${hourTwelve}&deg;C</p>
    <p>14:00 - ${hourSixteen}&deg;C</p>
    <p>18:00 - ${hourTwenty}&deg;C</p>
    `

    tempInfoDiv.innerHTML = tempHTML;
}

function widgetVisabilityToggle() {
    var x = document.getElementById('temp-info')
    var y = document.getElementById('condition-info')
    x.style.display = 'block';
    y.style.display = 'block';
}
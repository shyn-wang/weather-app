function getWeather() {
    const key = 'c290be99f9e246c687400007241804';
    const city = document.getElementById("locationInput").value;
    const weatherAPIUrl = `http://api.weatherapi.com/v1/current.json?key=${key}&q=${city}&aqi=yes`;

    fetch(weatherAPIUrl)
        .then(response => response.json())
        .then(data => {
            displayWeather(data);
             console.log(data);
             console.log(data.location.localtime);
        })
        .catch(error => {
            console.error('error fetching data: ', error);
            alert('error fetching weather, please try again');
        });
}

function displayWeather(data) {
    const tempInfoDiv = document.getElementById('temp-info');
    const conditionInfoDiv = document.getElementById('condition-info');

    tempInfoDiv.innerHTML = ' ';
    conditionInfoDiv.innerHTML = ' ';

    const cityName = data.location.name;
    const currentTemp = Math.round(data.current.temp_c);
    const condition = data.current.condition.text;
    const feelsLike = Math.round(data.current.feelslike_c);
    const time = data.location.localtime
    const conditionIcon = data.current.condition.icon;

    const tempHTML = `
        <p>${currentTemp}&deg;C</p>
        <p>Feels Like ${feelsLike}&deg;C</p>
    `
    const conditionHTML = `
        <img src = ${conditionIcon}
            width = '128'
            height = '128'
        />
        <p id = 'locationName'>${cityName}</p>
        <p>${condition}</p>
        <p>${time}</p>
    `
    tempInfoDiv.innerHTML = tempHTML;
    conditionInfoDiv.innerHTML = conditionHTML;
}

function widgetVisabilityToggle() {
    var x = document.getElementById('temp-info')
    var y = document.getElementById('condition-info')
    x.style.display = 'block';
    y.style.display = 'block';
}
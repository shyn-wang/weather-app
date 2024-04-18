function getWeather() {
    const key = 'c290be99f9e246c687400007241804';
    const city = document.getElementById("locationInput").value;
    const weatherAPIUrl = `http://api.weatherapi.com/v1/current.json?key=${key}&q=${city}&aqi=yes`;

    fetch(weatherAPIUrl)
        .then(response => response.json())
        .then(data => {
            displayWeather(data);
             console.log(data);
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

    const tempHTML = `
        <p>${currentTemp}&deg;C</p>
        <p>Feels Like ${feelsLike}&deg;C</p>
    `
    const conditionHTML = `
        <p>${condition}</p>
    `
    tempInfoDiv.innerHTML = tempHTML;
    conditionInfoDiv.innerHTML = conditionHTML;
}

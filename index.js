const select = document.getElementById('cities');

const getWeather = (city) => {
    const appid = '3191198b31f62eb43fb7be2c09b18643';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${appid}&units=metric`;
    fetch(url).then(res => res.json()).then(res => updateWeather(res));
}

const updateWeather = (data) => {
    const temp = document.getElementById('temp');
    const icon = document.getElementById('icon');
    const humidity = document.getElementById('humidity');
    const wind = document.getElementById('wind');
    const pressure = document.getElementById('pressure');

    temp.innerHTML = `temperature: ${data.main.temp} °C`;
    humidity.innerHTML = `humidity: ${data.main.humidity} %`;
    icon.src = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    wind.innerHTML = `wind: ${data.wind.speed} m/s`;
    pressure.innerHTML = `pressure: ${data.main.pressure} hpa`;
}

select.addEventListener("change", () => {
    getWeather(select.value);
})

getWeather(select.value);

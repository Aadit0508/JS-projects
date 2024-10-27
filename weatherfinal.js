// Correct selectors
const inputbox = document.querySelector('.inputbox');
const searchbutton = document.getElementById('buttonsearch');
const weatherimage = document.querySelector(".weather-img");
const temp = document.querySelector('.temp');
const description = document.querySelector('.desc');
const humid = document.getElementById('humidity');
const windspeed = document.getElementById('wind-speed');


async function getweather(city){
    const api_key = "43e5b6cac942863a2f3f9a37042820e3"
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`

    const weather_data = await fetch(url).then(response => response.json());
    console.log(weather_data);
    temp.innerHTML = `${Math.round(weather_data.main.temp - 273.15)} <sup>o</sup>C`
    description.innerHTML = `${weather_data.weather[0].description}`
    switch(weather_data.weather[0].description){
        case("clear"):
        weatherimage.src="clear.png";
        break;
        case("rain"):
        weatherimage.src="rain.png";
        break;
        case("broken clouds"):
        weatherimage.src="snow.png";
        break;
        case("mist"):
        weatherimage.src="mist.png";
        break;
        default:
            weatherimage.src="404.png";
            break;
    }
    humid.innerHTML=`${weather_data.main.temp}%`
    windspeed.innerHTML=`${weather_data.wind.speed}Km/H`
}


searchbutton.addEventListener('click',()=>{
    console.log(inputbox.value)
    getweather(inputbox.value)
})
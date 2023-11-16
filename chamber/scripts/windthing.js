const lat = "53.8847295"
const lon = "27.4285621"
const key = "57feb85cb44071db709bef659cd8691a"

const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}&units=imperial`

function dsiplayWeather(weatherData){

    const icon = `https://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`
    const desc = weatherData.weather[0].description;
    const windspeed = weatherData.wind.speed.toFixed(0);
    const temperatur = weatherData.main.temp.toFixed(0);
    const area = weatherData.name;

    let weatherIcon = document.getElementById("Weather-icon");
    weatherIcon.setAttribute('src', icon);
    weatherIcon.setAttribute('alt', desc);
    let preciseArea = document.getElementById("area");
    preciseArea.innerHTML = `In the area of: ${area}`; 

    let weatherDesc = document.getElementById("weather-description");
    weatherDesc.innerHTML = `Weather state is: ${desc}`;

    let weatherTemp = document.getElementById("temperature");
    weatherTemp.innerHTML = `Right now is ${temperatur}&deg;F <br> with the windspeed of: ${windspeed} mph`;


    const windchillSpan = document.getElementById('windchill')
    console.log(windchillSpan)
    let message = "N/A"
    
    if(temperatur <= 50 && windspeed > 3){
    
            let chillfactor = Math.pow(windspeed, 0.16)
            let chill = Math.round(35.74 + (0.6215*temperatur) - (35.75*chillfactor) + (0.4275 * temperatur * chillfactor))
            message = `Feels like: ${chill}°F`
        }
    
    windchillSpan.textContent = message
 }

async function getWeather(){
    try{
        const response = await fetch(url);
        if(response.ok){
            const data = await response.json();
            dsiplayWeather(data);

        }
        else{
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}


getWeather(); 


/*function showWindChill(temp, speed){
    
    const windchillSpan = document.getElementById('windchill')
    console.log(windchillSpan)
    let message = "N/A"

    if(temp <= 50 && speed > 3){

        let chillfactor = Math.pow(speed, 0.16)
        let chill = Math.round(35.74 + (0.6215*temp) - (35.75*chillfactor) + (0.4275 * temp * chillfactor))
        message = `${chill}`
    }

    windchillSpan.textContent = message
}
const temperatureSpan = document.getElementById("temperature")
const windspeedSpan = document.getElementById("windspeed")
     
const temperature = parseInt(temperatureSpan.textContent)
const windspeed = parseInt(windspeedSpan.textContent)
    
showWindChill(temperature, windspeed)
*/
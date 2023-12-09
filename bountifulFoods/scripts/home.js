const lat = "33.1216362";
const lon = "-117.3702035";
const key = "57feb85cb44071db709bef659cd8691a";

const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${key}&units=imperial`;

console.log(url);

const One_Day = 24 * 60 * 60 * 1000;

function dsiplayWeather(dataset){
  console.log(dataset)
  day1 = dataset[0]
  const temp = Math.round(day1.main.temp);
  const icon = `https://openweathermap.org/img/wn/${day1.weather[0].icon}.png`
  const desc = day1.weather[0].description;
  const humi = day1.main.humidity;
 
  let weatherTemp = document.getElementById("temperature-desc");
  weatherTemp.innerHTML = `${desc} · ${temp}&deg;F`;

  let weatherIcon = document.getElementById("weather-icon");
  weatherIcon.setAttribute('src', icon);
  weatherIcon.setAttribute('alt', desc);

  let humidity = document.getElementById("weather-humidity");
  humidity.innerHTML = `Humidity ${humi}%`
}


function displayWeatherForecast(forecastData) {
    const weatherForecast = document.getElementById("weather-forecast");
    
    // Get current date
    let currentDate = new Date();

    // Set time to 9:00 AM
    currentDate.setHours(9, 0, 0, 0);
    // Get the next three days (not including today)
    for (let i = 1; i <= 3; i++) {
        let nextDate = new Date(currentDate.getTime() + i * 24 * 60 * 60 * 1000);
        
        let nextDateString = nextDate.toISOString().slice(0, 10);

        // Find the forecast data for 9:00 AM on the next date
        let forecastForTime = forecastData.find(entry => entry.dt_txt.includes(nextDateString) && entry.dt_txt.includes("09:00:00"));
    
        // Display the forecast
        let newDiv = document.createElement("div");
        newDiv.innerHTML = `<h4>${nextDateString}</h4>
                            <img src="https://openweathermap.org/img/wn/${forecastForTime.weather[0].icon}.png" alt="Weather Icon">
                            <p>${forecastForTime.weather[0].description}</p>
                            <p>Temp: ${forecastForTime.main.temp.toFixed(0)}&deg;</p>`;
        weatherForecast.append(newDiv);
    }
}

  
  async function getWeather() {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        displayWeatherForecast(data.list);
        dsiplayWeather(data.list);
      } else {
        throw Error(await response.text());
      }
    } catch (error) {
      console.log(error);
    }
  }
  
  getWeather();
// Stuff that responsible for updated DT


// local storage manipulations
const storedCount = localStorage.getItem('submissionCount') || 0;
document.getElementById('submissionCount').innerText = storedCount;

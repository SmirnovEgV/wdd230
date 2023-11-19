const lat = "53.8847295";
const lon = "27.4285621";
const key = "57feb85cb44071db709bef659cd8691a";

const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${key}&units=imperial`;

console.log(url);

const One_Day = 24 * 60 * 60 * 1000;

function dsiplayWeather(dataset){
  console.log(dataset)
  const item = dataset[0];
  const icon = `https://openweathermap.org/img/wn/${item.weather[0].icon}.png`
  const desc = item.weather[0].description;
  const windspeed = item.wind.speed.toFixed(0);
  const temperatur = item.main.temp.toFixed(0);
  const area = "Minsk Central";

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


function displayWeatherForecast(dataset) {
  let dates = [];
  let mydates = new Date();
  for (let i = 0; i < 3; i++) {
    mydates = new Date(mydates.getTime() + One_Day);
    nextdate = mydates.toISOString().slice(0, 10);
    dates.push(nextdate);
  }

  const highTemps = dates.map((date) =>
    dataset
      .filter((x) => x.dt_txt.startsWith(date))
      .reduce((currentObj, highObj) =>
        currentObj.main.temp > highObj.main.temp ? currentObj : highObj
      )
  );

  const lowTemps = dates.map((date) =>
    dataset
      .filter((x) => x.dt_txt.startsWith(date))
      .reduce((currentObj, lowObj) =>
        currentObj.main.temp < lowObj.main.temp ? currentObj : lowObj
      )
  );

  const weatherElt = document.getElementById("weather-sections");
  for (let i = 0; i < 3; i++) {
    let newsection = document.createElement("section");
    newsection.innerHTML = `<h2>${dates[i]}</h2><p>High ${highTemps[i].main.temp.toFixed(0)}&deg;</p><p>Low: ${lowTemps[i].main.temp.toFixed(0)}&deg;</p>`;
    weatherElt.append(newsection);
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
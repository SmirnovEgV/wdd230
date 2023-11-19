const lat = "53.8847295";
const lon = "27.4285621";
const key = "57feb85cb44071db709bef659cd8691a";

const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${key}&units=imperial`;

console.log(url);

const One_Day = 24 * 60 * 60 * 1000;

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
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}

getWeather();

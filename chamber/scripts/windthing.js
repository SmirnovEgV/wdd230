const lat = "53.8847295"
const lon = "27.4285621"
const key = "57feb85cb44071db709bef659cd8691a"

const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}`

function dsiplayWeather(weather){
    prophets.forEach(prophet => {
        let section = document.createElement("section")
        section.classList.add("card")
        let sectionHTML = `
        <h3>${prophet.name} ${prophet.lastname}</h3>
        <p>Date of birth: ${prophet.birthdate}</p>
        <p>Place of birth: ${prophet.birthplace} </p>
        <img src="${prophet.imageurl}" alt="pic of ${prophet.name} ${prophet.lastName}"/>`
        section.innerHTML = sectionHTML
        cards.appendChild(section)
    });
}

function showWindChill(temp, speed){
    
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
console.log(temperatureSpan, windspeedSpan )
     
const temperature = parseInt(temperatureSpan.textContent)
const windspeed = parseInt(windspeedSpan.textContent)
console.log(temperature, windspeed )
    
showWindChill(temperature, windspeed)
const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';
const cards = document.querySelector('#cards');

function dsiplayProphets(prophets){
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

async function getProphetData(){
    const response = await fetch(url)
    if (response.ok){
        const data = await response.json();
        dsiplayProphets(data.prophets);
    }
    else{

    }
    console.error("kekeke")

}

getProphetData();
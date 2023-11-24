const gridSelector = document.getElementById("selector-grid")
const listSelector = document.getElementById("selector-list")
const directoryData = document.getElementById("directory-info")

gridSelector.addEventListener('click', ()=>{
    if(!gridSelector.classList.contains('active')){
        gridSelector.classList.add('active')
        listSelector.classList.remove('active')
        directoryData.classList.add('directory-info')
        directoryData.classList.remove('directory-list')
    }
})

listSelector.addEventListener('click', ()=>{
    if(!listSelector.classList.contains('active')){
        listSelector.classList.add('active')
        gridSelector.classList.remove('active')
        directoryData.classList.add('directory-list')
        directoryData.classList.remove('directory-info')
    }
})

const url = "./data/members.json"

const displayMembers = (members) => {
    const cards = document.querySelector(".directory-info")

    members.forEach((member)=> {
        let card = document.createElement("section")
        card.innerHTML = `
        <img src = "${member.imageURL}">
        <p>${member.name}</p>
        <p>${member.address}</p>
        <p>${member.phone}</p>
        <p><a class="card-button" href="${member.website}"> Website</a></p>`
        if (member.membershipLevel == 'Gold'){
            card.classList.add('gold-member')
        }
        cards.appendChild(card)    
    });
}


async function getBusinessData(){
    const response = await fetch(url)
    if (response.ok){
        const data = await response.json()
        displayMembers(data.members)
    }
    else{
        console.error("there where some mistakes")
        const cards = document.querySelector(".directory-info")
        cards.innerHTML = "<section><h1>There where a mistake</h1></section>"

    }
}

getBusinessData();
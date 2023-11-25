// This one for spotlight updates
document.addEventListener("DOMContentLoaded", function () {
    // Fetch JSON data
    fetch('./data/members.json')
        .then(response => response.json())
        .then(data => {
            const indexes = new Set()
            console.log("indexes", indexes)
            while(indexes.size < 3){
                indexes.add(Math.floor(Math.random() * 8 ))
            }
            console.log("ss", indexes)
            const spotlightsSection = document.getElementById('spotlights');
            var j = 0
            indexes.forEach(i => {
                let newsection = document.createElement("section");
                newsection.innerHTML = `<h3>${ data.members[i].name}</h3> <img src=${data.members[i].imageURL} alt=${data.members[i].name} Logo><p>${data.members[i].text}</p>`
                spotlightsSection.append(newsection)
                j++
            })
        })
        .catch(error => console.error('Error fetching JSON:', error));
});

// Function to shuffle an array
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}
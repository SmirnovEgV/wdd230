var button = document.querySelector("#dark-mode")
var body = document.querySelector("body")

button.addEventListener("click", () => {
    button.classList.toggle("dark-mode1")
    body.classList.toggle("dark-mode")
})


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
            const spotlightsSection = document.querySelectorAll('.spotlights');
            var j = 0
            indexes.forEach(i => {
                spotlightsSection[j].querySelector('h3').textContent = data.members[i].name;
                spotlightsSection[j].querySelector('img').src = data.members[i].imageURL;
                spotlightsSection[j].querySelector('p').textContent = data.members[i].text;
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
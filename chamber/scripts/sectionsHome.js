// This one for spotlight updates
document.addEventListener("DOMContentLoaded", function () {
    // Fetch JSON data
    fetch('./data/members.json')
        .then(response => response.json())
        .then(data => {
            // Filter members by Gold and Silver membership levels
            const filteredMembers = data.members.filter(member => member.membershipLevel === "Gold" || member.membershipLevel === "Silver");

            // Ensure there are at least 3 members with Gold or Silver membership
            if (filteredMembers.length >= 3) {
                // Randomly select 3 members
                const indexes = [];
                while (indexes.length < 3) {
                    const randomIndex = Math.floor(Math.random() * filteredMembers.length);
                    if (!indexes.includes(randomIndex)) {
                        indexes.push(randomIndex);
                    }
                }

                // Display the selected members in the spotlight section
                const spotlightsSection = document.getElementById('spotlights');
                indexes.forEach(i => {
                    let newsection = document.createElement("section");
                    newsection.innerHTML = `<h3>${filteredMembers[i].name}</h3> <img src=${filteredMembers[i].imageURL} alt=${filteredMembers[i].name} Logo><p>${filteredMembers[i].text}</p>`;
                    spotlightsSection.append(newsection);
                });
            } else {
                console.error('Not enough members with Gold or Silver membership for spotlight.');
            }
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
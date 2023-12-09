document.addEventListener("DOMContentLoaded", function() {
    const fruitSelectors = [
        document.getElementById("fruitSelector1"),
        document.getElementById("fruitSelector2"),
        document.getElementById("fruitSelector3")
    ];
    const selectedFruitsList = document.getElementById("selectedFruitsList");

    fetch('scripts/fruits.json')
        .then(response => response.json())
        .then(data => {
            // Sort the data alphabetically by the 'name' property
            data.sort((a, b) => a.name.localeCompare(b.name));

            fruitSelectors.forEach(selector => {
                data.forEach(fruit => {
                    let option = document.createElement("option");
                    option.value = fruit.id;
                    option.text = fruit.name;
                    selector.appendChild(option);
                });

                selector.addEventListener("change", function() {
                    // Clear the selected fruits list
                    selectedFruitsList.innerHTML = "";

                    // Get the selected fruits from all selectors
                    const selectedFruitIds = fruitSelectors.map(selector => parseInt(selector.value));
                    const selectedFruits = data.filter(fruit => selectedFruitIds.includes(fruit.id));

                    // Display information about the selected fruits
                    selectedFruits.forEach(selectedFruit => {
                        let listItem = document.createElement("li");
                        listItem.textContent = selectedFruit.name;
                        selectedFruitsList.appendChild(listItem);
                    });
                });
            });
        })
        .catch(error => console.error('Error fetching data:', error));
});

// Things that responsible for form submition?

function submitForm() {
    // Validate form fields
    const firstName = document.getElementById("firstName").value.trim();
    const email = document.getElementById("email").value.trim();
    const phoneNumber = document.getElementById("phoneNumber").value.trim();
    const specialInstructions = document.getElementById("specialInstructions").value.trim();

    const selectedFruits = [
        document.getElementById("fruitSelector1").value,
        document.getElementById("fruitSelector2").value,
        document.getElementById("fruitSelector3").value
    ];

    // Perform additional validation as needed

    if (firstName === "" || email === "" || phoneNumber === "" || specialInstructions.length > 250 || selectedFruits.some(id => id === "")) {
        alert("Please fill in all required fields and make sure to select three fruits.");
        return;
    }

    let submissionCount = localStorage.getItem('submissionCount') || 0;
        submissionCount++;
        localStorage.setItem('submissionCount', submissionCount);

    // Create URLSearchParams object
    const params = new URLSearchParams();
    params.append("firstName", firstName);
    params.append("email", email);
    params.append("phoneNumber", phoneNumber);
    params.append("specialInstructions", specialInstructions);
    
    selectedFruits.forEach((fruit, index) => {
        params.append(`fruit${index + 1}`, fruit);
    });

    // Redirect to confirmation.html with query string
    window.location.href = `confirmation.html?${params.toString()}`;
}

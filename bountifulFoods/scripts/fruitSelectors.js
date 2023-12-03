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

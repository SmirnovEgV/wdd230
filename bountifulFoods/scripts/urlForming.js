document.addEventListener("DOMContentLoaded", function() {
    // Retrieve values from URL parameters
    let url = new URL(window.location.href);
    let params = url.searchParams;

    fetch('scripts/fruits.json')
        .then(response => response.json())
        .then(data => {
            // Get selected fruit IDs from URL parameters
            const fruitIds = [
                params.get("fruit1"),
                params.get("fruit2"),
                params.get("fruit3")
            ];

            // Find matching fruits in the JSON file
            const selectedFruits = data.filter(fruit => fruitIds.includes(fruit.id.toString()));

            // Create a string with fruit names and nutritional info
            const fruitSelectionString = selectedFruits.map(fruit => {
                return `${fruit.name}`;
            }).join(', ');

            let totalCalories = 0;
            let totalFat = 0;
            let totalSugar = 0;
            let totalCarbohydrates = 0;
            let totalProtein = 0;

            selectedFruits.forEach(fruit => {
                totalCalories += fruit.nutritions.calories;
                totalFat += fruit.nutritions.fat;
                totalSugar += fruit.nutritions.sugar;
                totalCarbohydrates += fruit.nutritions.carbohydrates;
                totalProtein += fruit.nutritions.protein;
            });

            // Create a string with total nutritional info
            const totalNutritionString = `Total (Calories: ${totalCalories}, Fat: ${totalFat}, Sugar: ${totalSugar}, Carbohydrates: ${totalCarbohydrates}, Protein: ${totalProtein})`;

        

    // Populate content dynamically
    document.getElementById("yourName").innerHTML = params.get("firstName");
    document.getElementById("yourEmail").innerHTML = params.get("email"); 
    document.getElementById("yourPhone").innerHTML = params.get("phoneNumber"); 
    document.getElementById("yourFruitSelection").innerHTML = `${fruitSelectionString}, ${totalNutritionString}`;
    document.getElementById("special").innerHTML = params.get("specialInstructions");

})
        
    
});
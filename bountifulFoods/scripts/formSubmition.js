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

document.addEventListener("DOMContentLoaded", function() {
    // Retrieve values from URL parameters
    let url = new URL(window.location.href);
    let params = url.searchParams;

    // Populate content dynamically
    document.getElementById("yourName").innerHTML = params.get("firstName");
    document.getElementById("yourEmail").innerHTML = params.get("email"); 
    document.getElementById("yourPhone").innerHTML = params.get("phoneNumber"); 
    document.getElementById("yourFruitSelection").innerHTML = params.get("fruitSelection"); 
    document.getElementById("special").innerHTML = params.get("specialInstructions");  
        
    ;
});

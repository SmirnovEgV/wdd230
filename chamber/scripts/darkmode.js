var button = document.querySelector("#dark-mode")
var body = document.querySelector("body")

button.addEventListener("click", () => {
    body.classList.toggle("dark-mode")
})
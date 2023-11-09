var button = document.querySelector("#dark-mode")
var body = document.querySelector("body")

button.addEventListener("click", () => {
    button.classList.toggle("dark-mode1")
    body.classList.toggle("dark-mode")
})
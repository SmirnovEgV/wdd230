burger = document.querySelector('.hamburger-menu-button')
navmenu = document.querySelector('#nav-menu')

if (burger) {
    burger.addEventListener('click', function () {
        navmenu.classList.toggle('active')
    })
}



document.getElementById("calltoaction").addEventListener("click", function() {
    window.location.href = "join.html"; // Replace "join.html" with the actual URL of the page you want to link to
  });
burger = document.querySelector('.hamburger-menu-button')
navmenu = document.querySelector('#nav-menu')

if (burger) {
    burger.addEventListener('click', function () {
        burger.classList.toggle('active')
        navmenu.classList.toggle('active')
    })
}

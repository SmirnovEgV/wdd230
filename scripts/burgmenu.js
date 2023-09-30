burger = document.querySelector('#burger')
navmenu = document.querySelector('#nav-menu')

if (burger) {
    burger.addEventListener('click', function () {
        burger.classList.toggle('active')
        navmenu.classList.toggle('active')
    })
}

burger = document.querySelector('.hamburger-menu-button')
navmenu = document.querySelector('#nav-menu')

burger.addEventListener('click', function () {
    if (burger.innerHTML != '☰'){
        burger.innerHTML = '☰'
    }
    else {
        burger.innerHTML = 'X'
    }
})

if (burger) {
    burger.addEventListener('click', function () {
        navmenu.classList.toggle('active')
    })
}


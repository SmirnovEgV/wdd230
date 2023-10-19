burger = document.querySelector('#burger')
navmenu = document.querySelector('#nav-menu')
temple_txt = document.querySelector('#temple-title')
/*why*/
if (burger) {
    burger.addEventListener('click', function () {
        burger.classList.toggle('active')
        navmenu.classList.toggle('active')
       /* temple_txt.style.top = '55%'*/
    })
}

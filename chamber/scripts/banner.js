let day = new Date();
let weekday = day.getDay();

if (weekday == 1 || weekday == 2 || weekday == 3 ){
    let var1 = document.getElementById("banner-meet")
    var1.style.display = "flex";
}

let x = document.getElementById("close-btn")
x.addEventListener('click', ()=>{
    let var1 = document.getElementById("banner-meet")
    var1.style.display = "none";

})

let day = new Date();
let weekday = day.getDay();

if (weekday == 0 || weekday == 1 || weekday == 2 || weekday == 4){
    let var1 = document.getElementById("banner-meet")
    var1.style.display = "block";
}

let x = document.getElementById("close-btn")
x.addEventListener('click', ()=>{

})

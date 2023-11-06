const rating = document.getElementById("rating")
rating.addEventListener('change',() => {
    document.getElementById("currentrating").innerHTML = rating.value;
})

const confirm1 = document.getElementById("confirm")
confirm1.addEventListener('blur', ()=>{
    const password= document.getElementById("password")
    if(password.value != confirm1.value){
        document.getElementById("message").innerHTML="Password not matching"
        password.focus()
    }
    else{
        document.getElementById("message").innerHTML =""
    }
})
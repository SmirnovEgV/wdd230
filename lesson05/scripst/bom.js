const myinput = document.querySelector("#favchap");
const mybuttons = document.querySelector("#button");
const mylist = document.querySelector("#list");

mybuttons.addEventListener('click', ()=>{
    if (myinput.value == ""){
        myinput.focus()
        return
    } 


    let listeditem = document.createElement("li");

    let deletebutton = document.createElement("button");

    listeditem.textContent =myinput.value;

    deletebutton.textContent = "❌";

    listeditem.appendChild(deletebutton);

    mylist.appendChild(listeditem);

    deletebutton.addEventListener('click', ()=>{
        listeditem.remove();
    })

    myinput.focus();
    myinput.value = '';
})


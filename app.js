// let color = ["red", "yellow", "green","purple", "white", "whitesmoke", "orange"];
// let mycolor = document.getElementById("colorid");
// let btn = document.getElementById("btn");



// function nowch(){
//     let num = Math.floor(Math.random()*color.length)
//     document.body.style.backgroundColor = color[num];
//     mycolor.innerHTML = "Yellow";    
// }

// btn.addEventListener("click", nowch);

let color = ["red", "yellow", "green","purple", "white", "whitesmoke", "orange"];
let mycolor = document.getElementById("colorid");
let btn = document.getElementById("btn");



function nowch(){
    let num = Math.floor(Math.random()*color.length)
    document.body.style.backgroundColor = color[num];
    mycolor.innerHTML = "Yellow";    
}

btn.addEventListener("click", nowch);

// let color = ["red", "yellow", "green","purple", "white", "whitesmoke", "orange"];
// let mycolor = document.getElementById("colorid");
// let btn = document.getElementById("btn");



// function nowch(){
//     let num = Math.floor(Math.random()*color.length)
//     document.body.style.backgroundColor = color[num];
//     mycolor.innerHTML = "Yellow";    
// }

// btn.addEventListener("click", nowch);
alert("Dont click on the auto-change button twice in a row, ELSE YOU WONT BE ABLE TO STOP THE AUTO COLOR CHANGE. Well if that happens just reload the page")

let color = ["A","B","C","D","E","F","0","1","2","3","4","5","6","7","8","9"];
let mycolor = document.getElementById("colorid");
let manbtn = document.getElementById("manbtn");
let autbtn = document.getElementById("autbtn");
let stopbtn = document.getElementById("stopbtn");



function nowch(){
    
    let hexcolor = "#"
    for (let i = 0; i<6; i++){
        let num = Math.floor(Math.random()*color.length)
        hexcolor += color[num];
    }
    console.log(hexcolor);
    document.body.style.backgroundColor = hexcolor
    mycolor.innerHTML = hexcolor;
}
var rr
var my = false;

function on(){
    if (my == true){
        console.log(1);
        clearInterval(rr)
        my = true;
        rr=setInterval(nowch,1000);
    }
    else{
        rr=setInterval(nowch,1000);
        console.log(2)
        my = true;
        console.log(my)
    }
}

// let myvar = setInterval(nowch,200)
// function autnowch(){
//    myv = setInterval(nowch,500);
// }

function stopnowch(){
    clearInterval(rr);
    console.log("fish")
}

manbtn.addEventListener("click", nowch);
autbtn.addEventListener("click", on);
stopbtn.addEventListener("click", stopnowch);
// setInterval(nowch,3000)

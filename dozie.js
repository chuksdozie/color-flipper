// let color = ["red", "yellow", "green","purple", "white", "whitesmoke", "orange"];
// let mycolor = document.getElementById("colorid");
// let btn = document.getElementById("btn"); 
// function nowch(){

// let num = Math.floor(Math.random()*color.length)
// document.body.style.backgroundColor = color[num];
// mycolor.innerHTML = "Yellow"; 
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
        
    // NEW CODE - I added ; at the end of the next line, dunno how this bug didn't pull up an issue for you
        
    let num = Math.floor(Math.random()*color.length);
    hexcolor += color[num]; 
    } 
    console.log(hexcolor); 
    document.body.style.backgroundColor = hexcolor 
    mycolor.innerHTML = hexcolor;
}


var myv;

// NEW CODE - Initialise auto_on, a variable we would use to tell when the auto function is on...

var auto_on = false

// let myvar = setInterval(nowch,200)

function autnowch(){ 
    // NEW CODE - fix this code to only run if the auto_on is off (false) then set auto_on to true to show it's on
    if (!auto_on){
        myv = setInterval(nowch,500);
        auto_on = true;
    }
} 

function stopnowch(){ 
    clearInterval(myv); 
    console.log("fish");
    
    // NEW CODE - set auto_on to false to show the auto has been turned off
    auto_on = false
} 

manbtn.addEventListener("click", nowch);
autbtn.addEventListener("click", autnowch);
stopbtn.addEventListener("click", stopnowch);

// setInterval(nowch,3000)


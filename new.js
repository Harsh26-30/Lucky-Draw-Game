let profile = document.querySelector("#profile")
let left_img =document.querySelector("#left-img")
let main =document.querySelector("#main")
let inputbox = document.querySelector("#inputbox")
let button = document.querySelector("button")
let submit = document.querySelector(".submit")
let form1 = document.querySelector("#form1")
let hc1o = document.querySelector("#hc1o")
let hc2o = document.querySelector("#hc2o")


// profile



let eightval = []
// submit of form
form1.addEventListener("submit",function(dets){
    dets.preventDefault()
    const data = new FormData(dets.target)
    let value1 = data.get("8_num") 
    let value2 = data.get("1_num")
    const number = value1;
    const digitsArray = Array.from(String(number), Number);
    let uniquearray =[...new Set(digitsArray)];
    const randomElement = uniquearray[Math.floor(Math.random()*uniquearray.length)];
    if (randomElement == value2){
        hc1o.style.display="initial"
        hc2o.style.display="none"
        }
    else{
        hc1o.style.display="none"
        hc2o.style.display="initial"
        }
    console.log("y",value2,"c",randomElement);
})

// button
button.addEventListener("click",function(){
    button.style.color="yellow"
    submit.click()
    
})

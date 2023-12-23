const Button = document.querySelector(".btn");
const Mid = document.querySelector(".mid");
const Store = document.querySelector("#store");
const Form = document.querySelector("form");

function execute(event) {
    let Hrs = Form.hrs.value;
    let Mins = Form.mins.value;
    let Secs = Form.secs.value;
  
    
  
    setInterval(() =>{
      Hrs--;
    },3600000);
    setInterval(() =>{
      Mins--;
    },60000);
    setInterval(() =>{
      Secs--;
    },1000);
  const NewDiv = document.createElement("div");
  NewDiv.className = "new";
  NewDiv.innerHTML = `
    <p>Time Left :</p>
    <p id="time">${--Hrs} : ${--Mins} : ${--Secs} </p> 
    <button id="btn1" onclick="del(this)">Delete</button>
    `;
  Store.appendChild(NewDiv);
  Form.reset();
  
}
function del(deleteBtn){
    deleteBtn.parentNode.remove();
}
Button.addEventListener("click", execute);







/*let hr = 0;
let min = 0;
let sec = 0; 

let timerId = null;

Button.addEventListener("click",function(){
    if(timerId != null){
        clearInterval(timerId);
    }
    timerId = setInterval(startTimer,1000);
});
function startTimer(){
    sec++;
    console.log(sec);
    if(sec == 60){
        sec = 0;
        min++;
        console.log(min);
        if(min == 60){
            min = 0;
            hr++;
            console.log(hr);
        }
    }
}


let secStr;
if(sec < 10){
    secStr = `0${sec}`;
}
else{
   secStr = sec; 
}

let minStr;
if(min < 10){
    minStr = `0${min}`;
}
else{
   minStr = min; 
}

let hrStr;
if(hr < 10){
    hrStr = `0${hr}`;
}
else{
   hrStr = hr; 
}

Mid.innerHtml = `${minStr} : ${secStr} : ${hrStr}`;*/

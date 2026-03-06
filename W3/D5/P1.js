// Basics of click event 

const button = document.getElementById("clickBtn");

button.addEventListener("click",function (){
    console.log("button is smashed,clicked");
});

button.addEventListener("dblclick",function (){
    console.log("Second event Listener :button is smashed twice");
});
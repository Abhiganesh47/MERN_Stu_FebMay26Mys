// keyboard event

const input = document.getElementById("nameInput");
const display = document.getElementById("display");

input.addEventListener("keydown", function(event){
    display.textContent ="last key pressed:"+event.key;
    console.log("Key pressed: ",event.key);
});
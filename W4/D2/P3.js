// insert Adjacent HTML
const container = document.getElementById("container");
// position:
// beforebegin
// afterbegin
// beforeend
// afterend
document.getElementById("Btn").addEventListener("click", function(){
    container.insertAdjacentHTML("afterend","<p>Dynamically inserted</p>")
})
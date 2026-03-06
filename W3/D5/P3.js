// Mouse events
const hoverBox =document.getElementById("hoverBox");

hoverBox.addEventListener("mouseover",function(){
    hoverBox.textContent = "Mouse is over me";
    hoverBox.style.backgroundColor = "yellow";
});

hoverBox.addEventListener("mouseout",function(){
    hoverBox.textContent = "Mouse is  not over me";
    hoverBox.style.backgroundColor = "red";
})
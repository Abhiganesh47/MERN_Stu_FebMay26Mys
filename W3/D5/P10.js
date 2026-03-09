// Programmatic events
const ClickBtn = document.getElementById("ClickBtn");
const demoInput = document.getElementById("demoInput")
const runClick = document.getElementById("runClick");
const runMouseover = document.getElementById("runMouseover");
const runKeydown = document.getElementById("runKeydown");
const runDuplicate = document.getElementById("runDuplicate");
const hoverBox = document.getElementById("hoverBox");


ClickBtn.addEventListener("click", function (e) {
    console.log("e type", e.type);
    console.log("instance mouse event", e instanceof MouseEvent);
});

demoInput.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
        console.log("enter key down");
    }
});

runClick.addEventListener("click", function () {
    ClickBtn.click();
});

runMouseover.addEventListener("click", function () {
    hoverBox.dispatchEvent(new MouseEvent("mouseover"));
    console.log("Dispatching mouseEvent");
});

hoverBox.addEventListener("mouseover", function () {
    console.log("Programmatic triggered mouseover")
});

runKeydown.addEventListener("click", function () {
    demoInput.dispatchEvent(new KeyboardEvent("keydown", { key: "Enter" }));
});

runDuplicate.addEventListener("click",function(){
    const temp = document.createElement("button");
    temp.innerText="hello";
    document.body.appendChild(temp);
});
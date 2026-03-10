// innerText & textContent
// innerText: visible rendered text only
// textContent : all text nodes regardless of css
// innerHtml: allows reading or writing HTML markup inside an element

const message = document.getElementById("message");
const textContent=document.getElementById("textContentbtn");
const textReset = document.getElementById("textReset")

document.getElementById("innerTextBtn").addEventListener("click",function(){
    message.innerText = "Updates using innerText";
});

textContent.addEventListener("click",function(){
    message.textContent = "Updates using textContent";
});

textReset.addEventListener("click",function(){
    message.innerText="Original message";
});


const box = document.getElementById("box");
document.getElementById("innerHTMLBtn").addEventListener("click",function(){
    box.innerHTML = "<strong>Original Content</strong>"
});
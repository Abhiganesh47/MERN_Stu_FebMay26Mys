// Saving and reading the local storage
const themeInput = document.getElementById("themeInput");
const output = document.getElementById("output");

document.getElementById("saveBtn").addEventListener("click",function(){
    localStorage.setItem("theme",themeInput.value);
    localStorage.setItem("username","Abhi");
    localStorage.setItem("loggedIn","true");
    console.log("Saved theme: ",themeInput);
    output.innerText = "successfully stored to localStorage ";
    output.style.color = "green";
});
document.getElementById("readBtn").addEventListener("click",function(){
    const theme = localStorage.getItem("theme");
    output.innerText = "theme is : " + theme;
    output.style.color = "green";
});

document.getElementById("removeBtn").addEventListener("click",function(){
    localStorage.removeItem("theme");
    output.innerText = "Removed 'loggedIn' ";
    output.style.color = "green";
});

document.getElementById("clearBtn").addEventListener("click",function(){
    localStorage.clear();
    output.innerText = "All cleared ";
    output.style.color = "green";
});
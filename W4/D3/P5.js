// Intro of fetch API
const introBtn = document.getElementById("introBtn");
const output = document.getElementById("output");

introBtn.addEventListener("click",function(){
    output.textContent = "Sending request...";
    fetch("https://jsonplaceholder.typicode.com/posts/100")
    .then(function(responce){
        return responce.json();
    })
    .then(function(data){
        console.log("Raw data object : ", data);
        // output.textContent = "Status: " + responce.status+ "\nOk:"+data.ok ;
        output.textContent = JSON.stringify(data,null,2);
    })
    .catch(function(error){
        output.textContent = "Unexpected fatch error :" +error.message;
    });
});
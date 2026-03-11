// Storing and Retreiving JSON data
const jsonOutput = document.getElementById("jsonOutput");

document.getElementById("saveBtn").addEventListener("click",function(){
    const user = {
        id : 102,
        name : "Abhiganesh",
        role : "Full stack developers",
        skills : ["HTML", "CSS", "JS"]
    };
    localStorage.setItem("userProfile", JSON.stringify(user));
    jsonOutput.textContent = "user object saved as string to localStorage";
});

document.getElementById("readBtn").addEventListener("click",function(){
    try{
    const profile = localStorage.getItem("userProfile");
    console.log(JSON.parse(profile));
    console.log(profile);
    jsonOutput.textContent = "Profile :" + profile;
    }
    catch(error){
        jsonOutput.textContent = "JSON Parsing failed"
    }
});
// Accessing FORM elements
const studentForm= document.getElementById("studentForm");
const nameInput= document.getElementById("nameInput");
const emailInput= document.getElementById("emailInput");
const inspectBtn= document.getElementById("inspectBtn");
const terms = document.getElementById("terms");
const country= document.getElementById("country");

inspectBtn.addEventListener("click", function(){
    console.log("FORM :  ",studentForm);
    console.log("NAME :  ",nameInput.value);
    console.log("EMAIL :  ",emailInput.value);

    const selectedGender = document.querySelector('input[name="gender"]:checked');
    console.log("Gender: ",selectedGender? selectedGender.value:"Not selected");
    console.log("Accepted terms: ",terms.checked);
    console.log("Countery: ",country.value);
});
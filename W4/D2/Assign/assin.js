// enter password and correct password
const signupForm = document.getElementById("signupForm");
const signupPassword = document.getElementById("signupPassword");
const resignupPassword = document.getElementById("resignupPassword");
const message = document.getElementById("message");

signupForm.addEventListener("submit", function (event) {
    event.preventDefault();
    // Password validation
    const password = signupPassword.value;
    if (!password) {
        message.textContent = "Password is required";
        message.style.color = "red";
        signupPassword.focus();
        return;
    }
    // check length of password
    if(password.length < 8){
        message.textContent = "Password must be atleast 8 character long";
        message.style.color = "red";
        signupPassword.focus();
        return;
    }
    // check UPPERCASE characters
    if(!/[A-Z]/.test(password)){
        message.textContent = "Password must have 1 UPPERCASE character.";
        message.style.color = "red";
        signupPassword.focus();
        return;
    }
    // check lowercase characters
    if(!/[a-z]/.test(password)){
        message.textContent = "Password must have 1 lowercase character.";
        message.style.color = "red";
        signupPassword.focus();
        return;
    }
    // check number
    if(!/\d/.test(password)){
       message.textContent = "Password must have 1 digit in it.";
        message.style.color = "red";
        signupPassword.focus();
        return; 
    }
    // check special chars
    if(!/[@#%&*!]/.test(password)){
        message.textContent = "Password must have 1 special character [! @ # % & *].";
        message.style.color = "red";
        signupPassword.focus();
        return;
    }   

    // Reentering password to check
    const repassword = resignupPassword.value;

    if (password !== repassword) {
        message.textContent = "Password do not match.";
        message.style.color = "red";
        resignupPassword.focus();
        return;
    }


    message.textContent = "Valid password entered";
    message.style.color = "green";
    console.log("Success!");
}
);
// clear message on input
resignupPassword.addEventListener("input",()=> message.textContent="");
signupPassword.addEventListener("input",()=> message.textContent = "");
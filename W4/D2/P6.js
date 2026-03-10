const livePassword = document.getElementById("livePassword");
const message = document.getElementById("message");
livePassword.addEventListener("input",function(){
    // Password validation
    const password = livePassword.value;
    if (!password) {
        message.textContent = "Password is required";
        message.style.color = "red";
        livePassword.focus();
        return;
    }
    // check length of password
    if(password.length < 8){
        message.textContent = "Password must be atleast 8 character long";
        message.style.color = "red";
        livePassword.focus();
        return;
    }
    // check UPPERCASE characters
    if(!/[A-Z]/.test(password)){
        message.textContent = "Password must have 1 UPPERCASE character.";
        message.style.color = "red";
        livePassword.focus();
        return;
    }
    // check lowercase characters
    if(!/[a-z]/.test(password)){
        message.textContent = "Password must have 1 lowercase character.";
        message.style.color = "red";
        livePassword.focus();
        return;
    }
    // check number
    if(!/\d/.test(password)){
       message.textContent = "Password must have 1 digit in it.";
        message.style.color = "red";
        livePassword.focus();
        return; 
    }
    // check special chars
    if(!/[@#%&*!]/.test(password)){
        message.textContent = "Password must have 1 special character [! @ # % & *].";
        message.style.color = "red";
        livePassword.focus();
        return;
    }   
    message.textContent = "Valid email and password entered";
    message.style.color = "green";
    console.log("Success!",{email,password});
})
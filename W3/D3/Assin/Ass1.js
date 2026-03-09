// Password strength tagger

function tagPassword(password){
    if (typeof password !=="string") {
        return "invalid";
    }
    let hasLetter = false;
    let hasNumber = false;
    for (let i = 0; i < password.length; i++) {
        let ch = password[i];
        if (ch>='a' && ch<='z' || ch>='A' && ch<='Z') {
            hasLetter = true;
        }
        if (ch>='0' && ch<='9'){
            hasNumber = true;
        }
    }
    if (password.length < 8) {
        return "weak";
    }
    if (password.length >=8 && hasLetter && hasNumber) {
        return "medium";
    }
    if (password.length >=12 && hasLetter && hasNumber) {
        return "strong";
    }
    return "Weak";   
}
console.log(tagPassword(666));

// Generating to using login function and verifying the Tokens
const jwt = require("jsonwebtoken")
const secretKey = "monkey123";
const wrongSecretKey = "lala123";
function loginUser(email, password) {
    if (email === "correct@email.com" && password === "mp123") {
        const token = jwt.sign({
            userId: 101,
            email: email,
            role: "student"
        }, secretKey, { expiresIn: "1h" });
        return {
            success: true,
            token: token
        };
    }
    return {
        success: false,
        message: "Invalid Credentials"
    };
}
const loginResult = loginUser("correct@email.com", "mp123");
console.log("login result: ", loginResult);

if (loginResult.success) {
    try {
        const verifiedPayload = jwt.verify(loginResult.token, wrongSecretKey);
        console.log("Varified Payload: ", verifiedPayload);
    }
    catch (error) {
        console.log("varification failed", error.message);
    }
}

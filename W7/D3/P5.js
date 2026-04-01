// JWT Fundamentals:Token generation and  verification
const jwt = require("jsonwebtoken")

const secretKey = "monkey123";

// Payload holds small non-sensitive data
const payload = {
    userId:101,
    role:"member"
};
// jwt.sign() creates a signed JWT tokens
const token = jwt.sign(payload,secretKey,{expiresIn:"1h"});

console.log("Token genreted successfully\n",token);

const tokenParts = token.split(".");
console.log("Header section:",tokenParts[0]);
console.log("Payload section:",tokenParts[1]);
console.log("Signature section:",tokenParts[2]);
console.log("JWT part coount:",tokenParts.length);

try{
    // jwt.verify() checks trust,signature and expiration
    const verifiedPayload = jwt.verify(token,secretKey);

    console.log("Varified Payload: ",verifiedPayload);
}
catch(error){
    console.log("varification failed",error.message);
}

const decodeWithoutVarification = jwt.decode(token);
console.log("Decoded token: ",decodeWithoutVarification);
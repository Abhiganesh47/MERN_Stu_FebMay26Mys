// JWT flow with login,refresh-style and secure verification
const jwt = require("jsonwebtoken");
const express = require("express");

const app = express();
app.use(express.json());

const secretKey = "MySecretKey";
const refreshSecretKey = "MyNewSecretKey";

// in-memory storage for refresh token
const refreshTokens = [];//Array to store Data

function authenticateAccessToken(req, res, next) {
    const authHeader = req.headers.authorization;
    const token = authHeader && authHeader.split(" ")[1];

    if (!token) {
        return res.status(401).json({
            success: false,
            message: "Bearer token is missing."
        });
    }
    try {
        req.user = jwt.verify(token, secretKey, {
            algorithms: ["HS256"],
            issuer: "jwt-example" //server name 
        });
        next();
    }
    catch (error) {
        if (error.name === "TokenExpiredError") {
            return res.status(401).json({
                success: false,
                message: "Access token has expired"
            });
        }
        return res.status(401).json({
            success: false,
            message: "Access token is invalid"
        });
    }
}

app.post("/login", function (req, res) {
    const { email , password } = req.body;
    if (email !== "email@email.com" || password !== "pass@123") { 
        return res.status(401).json({
            success: false,
            message: "Invalid Credentials"
        });
    }
    const accessToken = jwt.sign({
        userId: 101,
        email: email,
        role: "member"
    }, secretKey,
        {
            expiresIn: "10m",
            algorithm: "HS256",
            issuer: "jwt-example"
        }
    );

    const refreshToken = jwt.sign({
        userId: 101,
        email: email
    }, refreshSecretKey,
        {
            expiresIn: "10d", //d:days,m:mins,h:hours
            algorithm: "HS256",
            issuer: "jwt-example"
        }
    );
    refreshTokens.push(refreshToken);
    res.json({
        success: true,
        message: "login successful",
        accessToken: accessToken,
        refreshToken: refreshToken
    });
});

app.post("/refresh", function (req, res) {
    const { refreshToken } = req.body;
    if (!refreshToken || !refreshTokens.includes(refreshToken)) {
        return res.status(401).json({
            success: false,
            message: "Refresh token is missing or invalid"
        });
    }
    try {
        const decoded = jwt.verify(refreshToken, refreshSecretKey,
            {
                algorithms: ["HS256"],
                issuer: "jwt-example"
            });

        const newAccessToken = jwt.sign({
            userId: decoded.userId,
            email: decoded.email,
            role: "member"
        }, secretKey,
            {
                expiresIn: "15m", //d:days,m:mins,h:hours
                algorithm: "HS256",
                issuer: "jwt-example"
            }
        );
        res.json({
            success:true,
            accessToken:newAccessToken
        });
    }
    catch(error){
        res.status(403).json({
            success:false,
            message:"Refresh token verification failed"
        });
    }
});

app.get("/me",authenticateAccessToken,function(req,res){
    res.json({
        success:true,
        message:"Protected user route",
        user:req.user
    });
});

app.listen(4000,function(){
    console.log("JWT DEMO server running @ http://localhost:4000");
});



// Running:  curl -X POST http://localhost:4000/login -H "Content-type:application/json" -d "{\"email\":\"email@email.com\",\"password\":\"pass@123\"}"
// Running:curl -X POST http://localhost:4000/refresh -H "Content-type:application/json" -d "{\"refreshToken\":\"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEwMSwiZW1haWwiOiJlbWFpbEBlbWFpbC5jb20iLCJpYXQiOjE3NzUxMTIwMzcsImV4cCI6MTc3NTk3NjAzNywiaXNzIjoiand0LWV4YW1wbGUifQ.NIH3U5SsZ96n8cC-pkYpDikHMBcYXv5XesAoic-I3ZE\"}"
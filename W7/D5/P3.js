// Session security , regeneration, expiration and logout

const express = require("express");
const session = require("express-session");

const app = express();

app.use(session({
    secret: "MySecretKey",
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 60 * 60 * 1000, //h*m*ms
        httpOnly: true,
        secure: process.env.NODE_ENV === "production"
    }
}));

app.get("/login", function (req, res,next) {
    req.session.regenerate(function (error) {
        if (error) {
            return next(error);
        }

        req.session.user = { // get the data after login
            id: 201,
            username: "Abhi",
            role: "student"
        };
        res.send("Session regenerated & details stored after login.");
    });
});

app.get("/profile",function(req,res){
    if(!req.session.user){
        return res.status(401).json({
            success:false,
            message:"No active login session found."
        });
    }

    res.json({
        success:true,
        sessionUser: req.session.user
    });
});

app.get("/logout",function(req,res,next){
req.session.destroy(function(error){
    if(error){
        return next(error);
    }
    res.clearCookie("connect.sid");
    res.send("Session destroyed & cookie cleared.");
});
});

app.use(function(error,req,res,next){
    res.status(500).json({
        success:false,
        message:error.message
    });
});

app.listen(4000,function(){
    console.log("Express-session DEMO server running @ http://localhost:4000");
});
// Handling Asynchronous errors with async/await
const express = require("express");
const { count } = require("node:console");
const app = express();

function loadUserProfile(){
    return Promise.reject(new Error("User profile can't be loaded"));
}

app.get("/async-fail",async function(req,res,next){
    try{
        const profile = await loadUserProfile();
        res.json(profile);
    }
    catch(error){
        next(error);
    }
});

// Centralized error handling middleware
app.use(function(error,req,res,next){
    res.status(404).json({
        success:false,
        message:"Async-await error handled centarly."
        // OriginalMessage:error.message
    });
});

app.listen(4000,function(){
    console.log("Express server running at http://localhost:4000");
});
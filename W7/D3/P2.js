// Handling Asynchronous errors with callbacks
const express = require("express");
const fs = require("fs");
const path = require("path");
const app = express();

app.get("/file",function(req,res,next){
    const filePath = path.join(__dirname,"newFile.txt");
    fs.readFile(filePath,"utf-8",function(error,data){
        if(error){
            // Forword the async error
            return next(error);
        }
        res.send(data);
    });
});

// Centralized error handling middleware
app.use(function(error,req,res,next){
    res.status(404).json({
        success:false,
        message:"File or folder does not exist."
        // OriginalMessage:error.message
    });
});

app.listen(4000,function(){
    console.log("Express server running at http://localhost:4000");
});
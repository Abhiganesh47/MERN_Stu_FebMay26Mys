// Send JSON response in express

const express = require("express");

const app = express();
app.get("/api/status",function(req,res){
    // res.json() automatically serailizes the object and sets the JSON content type
    res.json({
        success:true,
        message:"Express API is Working "
    });
});

app.get("/api/error",function(req,res){
    res.status(404).json({
        success:false,
        message:"Request resource is not found."
    });
});

app.listen(4000,function(){
    console.log("Express server running at http://localhost:4000");
});
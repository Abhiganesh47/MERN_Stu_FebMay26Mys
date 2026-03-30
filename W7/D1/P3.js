// Handeling different HTTP methods in express
const express = require("express");

const app = express();

// to read
app.get("/users",function(req,res){ 
res.status(200).json([{message:"Success"},
    {id:1,name:"abhi"},
     {id:1,name:"dhanu"},
      {id:1,name:"mana"}
]);
// res.send("Returning all users"); 
});

app.post("/users",function(req,res){
    // res.status() sets the HTTP status code before sending the 
    res.status(201).send("User created.");
});

app.listen(4000,function(){
    console.log("Express server running at http://localhost:4000");
});


// running:curl -X POST http://localhost:4000/users
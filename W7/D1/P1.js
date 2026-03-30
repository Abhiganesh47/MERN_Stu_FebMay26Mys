// Basic of ExpressJS - setup
// npm init -y
// npm install express

// Import module of express
const express = require("express");
// calling express function creates the main application object 
// This obj is used to register routes and middleware
const app = express();

// app.get() handles GET request for a specific path
app.get("/",function(req,res){
// res.send() sends a response body and ends the request automatically
  res.send("Hello from express server");  
});

// Listen() starts the server on a chosen port number
app.listen(4000,function(){
    console.log("Express server running at http://localhost:4000");
});
// Built-in Middleware  
const express = require("express");

const app = express();

app.use(express.json()); 

// express.urlencoded() parses from-style data
// extended : false is a beginner friendly config
app.use(express.urlencoded({extended:false}));

app.post("/api/users",function(req,res){
    res.status(201).json({
        success:true,
        parsedBody: req.body
    });
});

app.post("/form",function(req,res){
    res.json({
        success:true,
        formData: req.body
    });
});

app.listen(4001,function(){
    console.log("Express server running at http://localhost:4001");
});





// RUN : curl -X POST http://localhost:4001/api/users -H "Content-Type:application/json" -d"{\"name\":\"Rakesh\",\"role\":\"admin\"}"
// Run: curl -X POST http://localhost:4001/form -H "Content-Type:application/x-www-form-urlencoded" -d "name=Rakesh&role=admin"
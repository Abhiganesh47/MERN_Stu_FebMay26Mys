// Sending  responce in JSON formate
const http = require("http");

const server = http.createServer(function (req, res) {
    if (req.url === "/api/status" && req.method === "GET") {
        const responseData = {
            success: true,
            message: "API is working",
            server: "NodeJS HTTP Module"
        };
        // JSON response using application/json
        res.writeHead(200, { "Content-Type": "application/json" });
        // JSON.stringfy() converts JS object into a JSON string
        res.end(JSON.stringify(responseData));
        return;
    }
    res.writeHead(404,{"Content-Type":"application/json"});
    res.end(JSON.stringify({success:false,message:"Route not found."}));
});

server.listen(3004,function(){
    console.log("Server is running at http://localhost:3004");
});
// connecting to MongoDB using Mongoose and creating a schema and model to Node.js
const mongoose = require("mongoose");

async function main(){
    try{
        await mongoose.connect("mongodb://localhost:27017/abcmern");
        console.log("MongoDb connected successfully");

        const userSchema = new mongoose.Schema({
            name:String,
            age:Number,
            role:String
        });

        const User = mongoose.model("User",userSchema);

        console.log("mongoose schems model created successfully");
        console.log("Model name: ",User.modelName);

        await mongoose.connection.close();
        console.log("connection closed");
    }
    catch(error){
        console.log("Failed to connect to DB",error.message);
    }
}

main();
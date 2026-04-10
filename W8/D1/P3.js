// Applied filters to the query using comparison operators
const mongoose = require("mongoose");

async function runFilterDemo() {
    try {

        await mongoose.connect("mongodb://localhost:27017/merntraining");
        console.log("MongoDb connected successfully");

        const productSchema = new mongoose.Schema({
            name: String,
            price: Number,
            catogary: String,
            status: String
        });

        const Product = mongoose.models.Product || mongoose.model("Product", productSchema);

        // Creat using creat()
        const product = await Product.create([
            {
                name: "Laptop",
                price: 100000,
                catogary: "Electonics",
                status: "active"
            }, {
                name: "Tab",
                price: 18000,
                catogary: "Electonics",
                status: "inactive"
            }, {
                name: "phone",
                price: 80000,
                catogary: "Electonics",
                status: "active"
            }, {
                name: "book",
                price: 1000,
                catogary: "Stationary",
                status: "inactive"
            }
        ]);

        const equalQuery = await Product.find({status:{$eq:"active"}});
        // console.log("Products which are active : ",equalQuery);

        const greaterThanQuery = await Product.find({price:{$gt:10000}});
        // console.log("Products which are greater than 1000 : ",greaterThanQuery);

        const lessThanQuery = await Product.find({price:{$lt:80000}});
        // console.log("Products which are leass then 80k : ",lessThanQuery);

        const notEqualQuery = await Product.find({name:{$ne:"Tab"}});
        console.log("Products which are not Tab : ",notEqualQuery);

        await mongoose.connection.close();
        console.log("connection closed");
    }
    catch(error){
        console.log("Filter demo error: ",error.message);
    }
}
runFilterDemo();
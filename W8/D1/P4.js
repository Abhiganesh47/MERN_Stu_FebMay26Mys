// Sorting ,Limiting and Pagination
const mongoose = require("mongoose");
const Product = require("./P3");

async function sortPaginationDemo() {
    try {
        await mongoose.connect("mongodb://localhost:27017/merntraining");
        console.log("MongoDb connected successfully");

        const sortedAssending = await Product.find({catogary: "Electonics"}).sort({price:1});
        console.log("Products sorted in assending order : ",sortedAssending);

        await mongoose.connection.close();
        console.log("connection closed");
    }
    catch(error){
        console.log("sort_Paginationn demo error: ",error.message);
    }
}
sortPaginationDemo();
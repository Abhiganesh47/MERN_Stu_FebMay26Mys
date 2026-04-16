// Timestamp and Advanced queries
const mongoose = require("mongoose");

async function main() {
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/datedb");
        console.log("MongoDB connected");

        const demoSchema = new mongoose.Schema(
            {
                name: String
            },
            {
                timestamps: true
            }
        );

        const demoModel = mongoose.model('LogTime', demoSchema);
        // await demoModel.deleteMany();

        // const doc = await demoModel.create([
        //     {name: "Abhi"},
        //     {name: "Savipal"},
        //     {name: "Mana"}
        // ]);

        const recent = await demoModel.find({
            createdAt:{
                $gt: new Date(Date.now() -60*60*1000) 
            }
        }).sort({updatedAt:-1});
        console.log("Recent :",recent);
        
    }
    catch (error) {
        console.error("Error:", error.message);
    }
    finally {
        await mongoose.disconnect();
        console.log("Disconnected from DB.");
    }
}
main();
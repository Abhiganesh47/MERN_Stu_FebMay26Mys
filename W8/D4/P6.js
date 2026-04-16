// otp generation and verification using crypto module of Node.js and MongoDB for storage
const crypto = require('crypto');
const mongoose = require('mongoose');

mongoose.connect("mongodb://127.0.0.1:27017/datedb1")
    .then(() => console.log("MongoDB connected"))
    .catch((err) => console.log(err));

const otpSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true,
        unique: true
    },
    otp: {
        type: String,
        required: true
    },
    expiresAt: {
        type: Date,
        required: true,
        index: { expires: 0 }
    },
    attempts: {
        type: Number,
        default: 0
    }
});

const OTP = mongoose.model('OTP', otpSchema);

async function generateOTP(userId) {
    const otp = crypto.randomInt(100000, 999999).toString();
   

     const otpRecord = await OTP.findOneAndUpdate(
        { userId },
        {
            userId,
            otp,
            expiresAt: new Date(Date.now() + 6000),
            attempts: 0
        },
        {
            upsert: true,
            returnDocument: 'after'
        }
    );
    console.log("OTP:", otp);
    console.log("Stored Record:", otpRecord);
}

async function verifyOTP(userId, enteredOtp) {
    const record = await OTP.findOne({ userId });

    if (!record) {
        return "No OTP";
    }
    if (Date.now() > record.expiresAt) return "Expired";
    if (record.attempts >= 3) return "Blocked";

    record.attempts++;
    if (record.otp === String(enteredOtp)){
        // console.log("otp varifyed");
        
        await OTP.deleteOne({userId});
        return "Valid";
    }
    await record.save();
    return "Invalid";
}
async function main() {
    await generateOTP("user1");

    const storedRecord = await OTP.findOne({userId:"user1"});
    // console.log("Stored Record for verification:", storedRecord);
    const userEnteredOtp = storedRecord.otp;


    setTimeout( async() => {
        const result = await verifyOTP("user1",userEnteredOtp);
    console.log(result);
    await mongoose.connection.close();
    },7000);
    // const result = await verifyOTP("user1",userEnteredOtp);
    // console.log(result);
    // await mongoose.connection.close();
}
main();
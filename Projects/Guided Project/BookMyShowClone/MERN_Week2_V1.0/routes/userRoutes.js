// Fetch bookings for a specific user id
const express = require("express");
const {authMiddleware} = require("../middleware/authMiddleware");
const {bookings} = require("../controllers/bookingController");

const router =  express.Router();

// get bookings for a specific user id
router.get("/:userId/bookings",authMiddleware,(req,res)=>{
    const userId = Number(req.params.userId);
    
    const userBoookings = bookings.filter((booking) => booking.userId === userId);

    res.status(200).json({
        success:true,
        count: userBoookings.length,
        data: userBoookings
    });
});

module.exports = router;
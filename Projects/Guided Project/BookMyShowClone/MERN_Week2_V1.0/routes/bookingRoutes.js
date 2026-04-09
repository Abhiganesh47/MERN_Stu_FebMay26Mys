// Handling req related to booking creation and retrival
const express = require("express");
const {authMiddleware} = require("../middleware/authMiddleware");
const roleMiddleware = require("../middleware/roleMiddleware");
const {bookingValidationHandler,createBooking,getAllBookings,getMyBookings} = require("../controllers/bookingController");

const router = express.Router();

// create a new booking 
router.post("/bookings",authMiddleware,bookingValidationHandler,createBooking);

router.get("/bookings/me",authMiddleware,getMyBookings);

router.get("/bookings",authMiddleware,roleMiddleware("admin"),getAllBookings);

module.exports = router;

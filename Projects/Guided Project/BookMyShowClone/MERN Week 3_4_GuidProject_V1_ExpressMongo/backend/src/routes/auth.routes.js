const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth.controller");
const validate = require("../middleware/validation.middleware");
const { registerSchema, loginSchema } = require("../utils/validationSchemas");

//Routes
// router.post("/register",authController.register);
// router.post("/verify-otp",authController.verifyOTP);
// router.post("/login",authController.login);

router.post("/register", validate(registerSchema), authController.register);
router.post("/login", validate(loginSchema), authController.login);
router.post("/verify-otp", authController.verifyOTP);

module.exports = router;
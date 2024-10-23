// routes/paymentRoutes.js
const express = require('express');
const { createPaymentIntent } = require('../controllers/paymentController');
const { protect } = require('../middleware/authMiddleware');
const router = express.Router();

router.route('/create-payment-intent').post(protect, createPaymentIntent);

module.exports = router;

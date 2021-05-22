const express = require('express');
const checkAuth = require('../middleware/checkAuth');


const BookingController = require('../controllers/booking.controller');

const router = express.Router();

// Get booking
router.get('', checkAuth, BookingController.getBookings);

// Create booking
router.post('/create', checkAuth, BookingController.createBooking);


module.exports = router;

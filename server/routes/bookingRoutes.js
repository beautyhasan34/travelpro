// import express from "express";
// import { createBooking } from "../controllers/bookingController.js";

// const router = express.Router();

// router.post("/", createBooking);

// export default router;

import express from "express";

import {
    createBooking,
    getBookings,
    deleteBooking,
    updateBookingStatus,
} from "../controllers/bookingController.js";

const router = express.Router();

// Create Booking
router.post("/", createBooking);

// Get All Bookings
router.get("/", getBookings);

// Delete Booking
router.delete("/:id", deleteBooking);

// Update Booking Status
router.patch("/:id", updateBookingStatus);

export default router;
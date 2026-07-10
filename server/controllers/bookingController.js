// import Booking from "../models/Booking.js";

// export const createBooking = async (req, res) => {
//     console.log("========== BOOKING REQUEST ==========");
//     console.log(req.body);

//     try {
//         const booking = await Booking.create(req.body);

//         console.log("Saved Successfully:", booking);

//         res.status(201).json({
//             success: true,
//             message: "Booking Successful",
//             booking,
//         });
//     } catch (error) {
//         console.error("Booking Error:", error);

//         res.status(500).json({
//             success: false,
//             message: error.message,
//         });
//     }
// };

import Booking from "../models/Booking.js";

// Create Booking
export const createBooking = async (req, res) => {
    console.log("========== BOOKING REQUEST ==========");
    console.log(req.body);

    try {
        const booking = await Booking.create(req.body);

        console.log("Saved Successfully:", booking);

        res.status(201).json({
            success: true,
            message: "Booking Successful",
            booking,
        });
    } catch (error) {
        console.error("Booking Error:", error);

        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

// Get All Bookings
export const getBookings = async (req, res) => {
    try {
        const bookings = await Booking.find().sort({ createdAt: -1 });

        res.json(bookings);
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
};

// Delete Booking
export const deleteBooking = async (req, res) => {
    try {
        await Booking.findByIdAndDelete(req.params.id);

        res.json({
            success: true,
            message: "Booking Deleted Successfully",
        });
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
};

// Update Booking Status
export const updateBookingStatus = async (req, res) => {
    try {
        const booking = await Booking.findByIdAndUpdate(
            req.params.id,
            {
                status: req.body.status,
            },
            {
                new: true,
            }
        );

        res.json({
            success: true,
            booking,
        });
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
};
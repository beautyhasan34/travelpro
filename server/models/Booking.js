import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },

        email: {
            type: String,
            required: true,
        },

        phone: {
            type: String,
            required: true,
        },

        destination: {
            type: String,
            required: true,
        },

        travelDate: {
            type: String,
            required: true,
        },

        travelers: {
            type: Number,
            required: true,
        },

        status: {
            type: String,
            default: "Pending",
        },
    },
    {
        timestamps: true,
    }
);

export default mongoose.model("Booking", bookingSchema);
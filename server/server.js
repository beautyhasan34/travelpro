import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

import connectDB from "./config/db.js";
import bookingRoutes from "./routes/bookingRoutes.js";

dotenv.config();

const app = express();

// Connect Database
connectDB();

mongoose.connection.once("open", () => {
    console.log("✅ Database Connected:", mongoose.connection.name);
});

// Middleware
app.use(cors());
app.use(express.json());

// Test Route
app.post("/test", (req, res) => {
    console.log(req.body);

    res.json({
        success: true,
        message: "Server OK",
    });
});

// Booking Routes
app.use("/api/bookings", bookingRoutes);

// Home Route
app.get("/", (req, res) => {
    res.send("🚀 TravelPro API Running...");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`✅ Server Running on Port ${PORT}`);
});
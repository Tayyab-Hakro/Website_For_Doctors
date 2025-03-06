import express from "express";
import { Connectdb } from "./database/Connectdb.js";
import cors from "cors";
import UserRouter from "./routes/UserRoute.js";
import dotenv from "dotenv/config";
import AppointmentRouter from "./routes/AppointmentsRoute.js";
import cookieParser from "cookie-parser";

const app = express();

// Middlewares
app.use(express.json());
app.use(cookieParser());
app.use(
    cors({
        origin: "http://localhost:3000", // Adjust based on your frontend URL
        credentials: true,
    })
);

// Connect to Database
Connectdb();

// Routes
app.use("/api/user", UserRouter);
app.use("/api/user/ap", AppointmentRouter);

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, function () {
    console.log(`Server is running on port ${PORT}`);
});

import express from "express";
import { Connectdb } from "./database/Connectdb.js";
import cors from "cors";
import UserRouter from "./routes/UserRoute.js";
import AppointmentRouter from "./routes/AppointmentsRoute.js";
import dotenv from 'dotenv'
import cookieParser from "cookie-parser";

const app = express();
Connectdb();
dotenv.config({
    path:".env"
})

// Middlewares
app.use(express.json());

const corsOptions = {
    origin:"http://localhost:5173",
    credentials:true
}
app.use(cors(corsOptions));

// Connect to Database
app.use(cookieParser());

// Routes
app.use("/api/user", UserRouter);
app.use("/api/user/ap", AppointmentRouter);

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, function () {
    console.log(`Server is running on port ${PORT}`);
});

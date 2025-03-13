import AppointmentModel from "../models/AppointmentModel.js";
import mongoose from "mongoose";
// Create a new appointment
export const UserAppointments = async (req, res) => {
  try {
    const { userId, username, phoneNumber, email, fees, address, date } = req.body;

    // Validate required fields
    if (!username || !phoneNumber || !email || !fees || !address || !date) {
      return res.status(400).json({
        success: false,
        message: "Please fill in all the required fields.",
      });
    }

    // Create a new appointment document
    const newAppointment = new AppointmentModel({
      userId,
      username,
      phoneNumber,
      email,
      fees,
      address,
      date,
    });

    // Save the appointment to the database
    await newAppointment.save();

    // Success response
    return res.status(201).json({
      success: true,
      message: "Appointment has been created successfully.",
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "An error occurred while creating the appointment.",
      error: error.message,
    });
  }
};

export const GetAllAppointments = async (req, res) => {
  const { id } = req.params;

  try {
    // Check if id is provided
    if (!id) {
      return res.status(400).json({ success: false, message: "User ID is required" });
    }

    // Check if id is a valid ObjectId
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ success: false, message: "Invalid User ID format" });
    }

    // Query the database
    const appointments = await AppointmentModel.find({ userId: id });

    // If no appointments found
    if (!appointments || appointments.length === 0) {
      return res.status(404).json({ success: false, message: "No appointments found" });
    }

    // Success
    res.status(200).json({
      success: true,
      message: "Appointments retrieved successfully",
      data: appointments,
    });
  } catch (error) {
    console.error("Error fetching appointments:", error);
    res.status(500).json({
      success: false,
      message: "Server error while fetching appointments",
      error: error.message,
    });
  }
};

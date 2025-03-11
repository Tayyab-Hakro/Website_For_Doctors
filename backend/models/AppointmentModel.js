import mongoose from "mongoose";

const AppointmentSchema = new mongoose.Schema({
  username: { type: String, required: true },
  phoneNumber: { type: String, required: true }, // Better to store as String for flexibility
  email: { type: String, required: true },
  fees: { type: Number, default: 0 },
  address: { type: String, required: true },
  date: { type: Date, required: true }
});

const AppointmentModel = mongoose.model("Appointments", AppointmentSchema);

export default AppointmentModel;

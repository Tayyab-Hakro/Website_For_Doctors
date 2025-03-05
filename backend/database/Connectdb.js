import mongoose from "mongoose";

export const Connectdb = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/DoctorWebsite")
    console.log("MongoDB is connected");
  } catch (err) {
    console.error("MongoDB connection error:", err);
  }
};

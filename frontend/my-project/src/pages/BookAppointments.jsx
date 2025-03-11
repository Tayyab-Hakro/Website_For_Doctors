import { useState } from "react";
import axios from "axios";

function BookAppointments() {
  const [username, setUsername] = useState("");
  const [phoneNumber, setPhoneNumber] = useState(""); // Changed from phoneNum
  const [email, setEmail] = useState("");
  const [fees, setFees] = useState("");
  const [address, setAddress] = useState("");
  
  const todayDate = new Date().toISOString().split("T")[0];
  const [date, setDate] = useState(todayDate);

  const handleBooking = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:3000/api/user/ap/create", {
        username,
        phoneNumber, // Make sure it's phoneNumber
        email,
        fees,
        address,
        date
      });

      console.log(response);
      alert("Appointment booked successfully!");

      // Clear form
      setUsername("");
      setPhoneNumber("");
      setEmail("");
      setFees("");
      setAddress("");
      setDate(todayDate);
      
    } catch (error) {
      console.error("Error booking appointment:", error);
      alert("Failed to book appointment. Please try again.");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 bg-white shadow-md rounded-xl p-6">
      <h1 className="text-2xl font-semibold text-center mb-6 text-gray-800">
        Book Your Appointments
      </h1>

      <form onSubmit={handleBooking} className="space-y-4">
        {/* Username */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Input your name"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Phone Number */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
          <input
            type="tel"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            placeholder="Input your phone number"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Input your email"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Fees */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Fees</label>
          <input
            type="number"
            value={fees}
            onChange={(e) => setFees(e.target.value)}
            placeholder="Enter fees"
            required
            min="0"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Address */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder="Enter address"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Date */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Date</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-300"
        >
          Book Appointment
        </button>
      </form>
    </div>
  );
}

export default BookAppointments;

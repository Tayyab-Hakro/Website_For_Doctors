import axios from "axios";
import { useEffect, useState } from "react";

function MyAppointments() {
  const [data, setData] = useState([]);

  const handleAppointments = async (req ) => {
    try {
      const userId = req.params.userId
      const response = await axios.get(
        `http://localhost:3000/api/user/ap/mydata/${userId}`
      );
      if (response.data.success) {
        console.log(response.data);
        setData(response.data.data);
      } else {
        console.log("Error is coming get data");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleAppointments();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <h1 className="text-3xl font-bold text-center mb-8">My Appointments</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.length > 0 ? (
          data.map((item, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                {item.username}
              </h2>
              <p className="text-gray-600 mb-1">
                <span className="font-medium">Phone:</span> {item.phoneNumber}
              </p>
              <p className="text-gray-600 mb-1">
                <span className="font-medium">Email:</span> {item.email}
              </p>
              <p className="text-gray-600 mb-1">
                <span className="font-medium">Fees:</span> ${item.fees}
              </p>
              <p className="text-gray-600 mb-1">
                <span className="font-medium">Address:</span> {item.address}
              </p>
              <p className="text-gray-600">
                <span className="font-medium">Date:</span>{" "}
                {new Date(item.date).toLocaleDateString()}
              </p>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500 col-span-3">
            No appointments found.
          </p>
        )}
      </div>
    </div>
  );
}

export default MyAppointments;

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Appointments from "./pages/Appointments";
import BookAppointments from "./pages/BookAppointments";
import MyAppointments from "./pages/MyAppointments";
import Isauth from "./components/Isauth";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    const token = localStorage.getItem("token");
    console.log(token);
  }, []);

  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/appointments" element={<Appointments />} />
          <Route
            path="/bookingappointments"
            element={
              <Isauth>
                <BookAppointments />
              </Isauth>
            }
          />
          <Route
            path="/myappointments/:id"
            element={
                <MyAppointments />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

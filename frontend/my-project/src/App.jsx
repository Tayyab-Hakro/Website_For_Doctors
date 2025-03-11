import Navbar from "./Components/Navbar"
import Home from "./pages/Home"
import {BrowserRouter , Routes , Route}  from 'react-router-dom'
import Register from "./pages/Register"
import Appointments from "./pages/Appointments"
import BookAppointments from "./pages/BookAppointments"
import { useEffect } from "react"
import Isauth from "./Components/Isauth"
function App() {
  useEffect (() => {
    const tokem = localStorage.getItem("token")
    console.log(tokem )
  })
  return (
<div>
  <BrowserRouter>
  <Navbar/>
 
  <Routes>
    <Route path="/" element={ <Home/>} />
    <Route path="/register" element={ <Register/>} />
    <Route path="/appointments" element={<Appointments/>} />
    <Route path="/BookngAppointments"  element={<Isauth> <BookAppointments/> </Isauth>} />



  </Routes>
  </BrowserRouter>
</div>
  )
}

export default App
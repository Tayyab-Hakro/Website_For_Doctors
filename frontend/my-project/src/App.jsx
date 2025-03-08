import Navbar from "./Components/Navbar"
import Home from "./pages/Home"
import {BrowserRouter , Routes , Route}  from 'react-router-dom'
import Register from "./pages/Register"
function App() {
  return (
<div>
  <BrowserRouter>
  <Navbar/>
 
  <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/register" element={<Register/>} />

  </Routes>
  </BrowserRouter>
</div>
  )
}

export default App
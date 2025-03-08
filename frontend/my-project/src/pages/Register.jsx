import { useState } from "react";

function Register() {

    const [username , Setusername ] =  useState("")
    const [email , Setemail  ] =  useState("")
    const [password , Setpassword ] =  useState("")
    const HandleForm = async (e) =>{
        e.preventDefault()
        console.log("WOrking ")
    }
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
        <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-sm">
          <h1 className="text-2xl font-semibold text-center text-yellow-500 mb-4">Register</h1>
          
          <form className="space-y-4" onSubmit={HandleForm}>
            <input 
              type="text" 
              placeholder="Username" 
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
            
            <input 
              type="email" 
              placeholder="Email" 
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
            
            <input 
              type="password" 
              placeholder="Password" 
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
            
            <button 
              type="submit" 
              className="w-full bg-yellow-500 text-white py-2 rounded hover:bg-yellow-600 transition"
            >
              Register
            </button>
          </form>
          
          <p className="text-center text-gray-600 mt-4">
            Already have an account? <a href="#" className="text-yellow-500 hover:underline">Login</a>
          </p>
        </div>
      </div>
    );
  }
  
  export default Register;
  
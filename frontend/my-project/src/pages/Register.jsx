import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const navigate = useNavigate();

  const handleForm = async (e) => {
    e.preventDefault(); // Fixed typo

    try {
      if (isLoggedIn) {
        // Login API Call
        const response = await axios.post(
          "http://localhost:3000/api/user/login",
          { email, password },
          {
            headers: {
              "Content-Type": "application/json",
            },
            withCredentials: true,
          }
        );

        if (response.data.success) {
          navigate("/");
        } else {
          console.log("Login failed");
        }
      } else {
        // Signup API Call
        const response = await axios.post(
          "http://localhost:3000/api/user/signup",
          { username, email, password },
          {
            headers: {
              "Content-Type": "application/json",
            },
            withCredentials: true,
          }
        );

        if (response.data.success) {
          navigate("/");
        } else {
          console.log("Signup failed");
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleSignUp = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-sm">
        <h1 className="text-2xl font-semibold text-center text-yellow-500 mb-4">
          {isLoggedIn ? "Login" : "Sign Up"}
        </h1>

        <form className="space-y-4" onSubmit={handleForm}>
          {!isLoggedIn && (
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
          )}

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-yellow-500"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-yellow-500"
          />

          <button
            type="submit"
            className="w-full bg-yellow-500 text-white py-2 rounded hover:bg-yellow-600 transition"
          >
            {isLoggedIn ? "Login" : "Sign Up"}
          </button>
        </form>

        <p className="text-center text-gray-600 mt-4">
          {isLoggedIn ? "Don't have an account?" : "Already have an account?"}
          <button
            className="text-yellow-500 hover:underline ml-1"
            onClick={handleSignUp}
          >
            {isLoggedIn ? "Sign Up" : "Login"}
          </button>
        </p>
      </div>
    </div>
  );
}

export default Register;

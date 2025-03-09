import { useEffect, useState } from 'react';
import '../Css/style.css';
import { Link } from 'react-router-dom';

function Navbar() {
  const [userToken, setUserToken] = useState("");

  const handleLogout = () => {
    localStorage.removeItem("token");
    setUserToken(""); // Clear the token from state immediately
  };
  useEffect(() => {
    const updateToken = () => {
      const token = localStorage.getItem("token");
      setUserToken(token);
    };
  
    // Run once on mount
    updateToken();
  
    // Listen to storage events (in case it changes in another tab/window)
    window.addEventListener('storage', updateToken);
  
    return () => {
      window.removeEventListener('storage', updateToken);
    };
  }, []);

  return (
    <div className="bg-blue-200 Navbar flex justify-between items-center px-14 py-5">
      <div>
        <h1 className="text-3xl font-bold">Tayyab Hakro</h1>
      </div>

      <div className="hidden md:flex">
        <ul className="flex gap-4 text-lg font-medium">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/schedule">Schedule</Link></li>
        </ul>
      </div>

      <div className="flex gap-3">
        {userToken ? (
          <button
            onClick={handleLogout}
            className="bg-blue-500 px-8 py-2 rounded-full text-white font-bold transition hover:bg-blue-600"
          >
            Logout
          </button>
        ) : (
          <Link to="/register">
            <button className="bg-blue-500 px-8 py-2 rounded-full text-white font-bold transition hover:bg-blue-600">
              Signup
            </button>
          </Link>
        )}
      </div>
    </div>
  );
}

export default Navbar;

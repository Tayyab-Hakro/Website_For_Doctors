import { Navigate } from 'react-router-dom';

const Isauth = ({ children }) => {
  const token = localStorage.getItem('token');

  if (!token) {
    // Redirect to register/login if there's no token
    return <Navigate to="/register" />;
  }

  // If token exists, allow access to children routes
  return children;
};


export default Isauth
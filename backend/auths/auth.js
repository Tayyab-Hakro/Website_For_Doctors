import jwt from "jsonwebtoken";
import dotenv from "dotenv";

// Load environment variables (optional if already loaded globally)
dotenv.config(); // ✅ safer without path unless you have specific folder issues

const isAuthenticated = async (req, res, next) => {
  try {
    // Make sure cookie-parser middleware is used in your main app file
    const token = req.cookies?.token;

    console.log("Received token:", token);

    if (!token) {
      return res.status(401).json({
        message: "User not authenticated. Token missing.",
        success: false,
      });
    }

    // Verify token
    const decoded = jwt.verify(token, process.env.TOKEN_SECRET);

    console.log("Decoded token payload:", decoded);

    // Attach userId or whole decoded payload to req.user
    req.user = decoded.userId || decoded;

    next();
  } catch (error) {
    console.error("Authentication error:", error);

    if (error.name === "JsonWebTokenError") {
      return res.status(401).json({
        message: "Invalid token",
        success: false,
      });
    }

    if (error.name === "TokenExpiredError") {
      return res.status(401).json({
        message: "Token expired",
        success: false,
      });
    }

    return res.status(500).json({
      message: "Authentication error",
      success: false,
    });
  }
};

export default isAuthenticated;

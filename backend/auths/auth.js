import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config({
    path: "../.env"
});

const isAuthenticated = async (req, res, next) => {
    try {
        const token = req.cookies.token;
        console.log(token ,"toke is ")
        if (!token) {
            return res.status(401).json({
                message: "User not authenticated.",
                success: false
            });
        }
        
        const decoded = jwt.verify(token, process.env.TOKEN_SECRET);
        req.user = decoded.userId;
        next();
    } catch (error) {
        console.error(error);
        if (error.name === 'JsonWebTokenError') {
            return res.status(401).json({
                message: "Invalid token",
                success: false
            });
        }
        if (error.name === 'TokenExpiredError') {
            return res.status(401).json({
                message: "Token expired",
                success: false
            });
        }
        return res.status(500).json({
            message: "Authentication error",
            success: false
        });
    }
};

export default isAuthenticated;
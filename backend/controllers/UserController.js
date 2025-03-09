import UserModel from '../models/UserModel.js';
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

// =========================== SIGNUP ===========================
export const SignUp = async (req, res) => {
    try {
        const { username, email, password } = req.body;

        // Basic validation
        if (!username || !email || !password) {
            return res.status(400).json({
                message: "All fields are required.",
                success: false
            });
        }

        // Check if user exists
        const existingUser = await UserModel.findOne({ email });
        if (existingUser) {
            return res.status(409).json({
                message: "User already exists.",
                success: false
            });
        }

        // Hash password
        const hashedPassword = await bcryptjs.hash(password, 16);

        // Create new user
        await UserModel.create({
            username,
            email,
            password: hashedPassword
        });

        return res.status(201).json({
            message: "Account created successfully.",
            success: true
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            message: "Server error occurred",
            success: false
        });
    }
};

// =========================== LOGIN ===========================
export const Login = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Basic validation
        if (!email || !password) {
            return res.status(400).json({
                message: "All fields are required.",
                success: false
            });
        }

        // Find user
        const user = await UserModel.findOne({ email });
        if (!user) {
            return res.status(401).json({
                message: "Incorrect email or password",
                success: false
            });
        }

        // Compare passwords
        const isMatch = await bcryptjs.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({
                message: "Incorrect email or password",
                success: false
            });
        }

        // Create JWT token
        const tokenData = { userId: user._id };
        const token = jwt.sign(tokenData, process.env.TOKEN_SECRET, { expiresIn: "1d" });

        return res
            .status(200)
            .cookie("token", token, {
                httpOnly: true,
                secure: process.env.NODE_ENV === 'production',
                maxAge: 24 * 60 * 60 * 1000 // 1 day
            })
            .json({
                message: `Welcome back ${user.username}`,
                user: {
                    _id: user._id,
                    username: user.username,
                    email: user.email
                },
                token, // ✅ Added token here for frontend access
                success: true
            });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            message: "Server error occurred",
            success: false
        });
    }
};

// =========================== LOGOUT ===========================
export const logout = (req, res) => {
    try {
        return res.status(200).clearCookie("token").json({
            message: "User logged out successfully.",
            success: true
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            message: "Server error occurred",
            success: false
        });
    }
};

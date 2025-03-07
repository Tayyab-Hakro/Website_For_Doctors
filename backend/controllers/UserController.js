import UserModel from '../models/UserModel.js';
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

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
        
        const user = await UserModel.findOne({ email });
        if (user) {
            return res.status(409).json({
                message: "User already exists.",
                success: false
            });
        }
        
        const hashedPassword = await bcryptjs.hash(password, 16);
        
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
}

export const Login = async (req, res) => {
    try {
        const { email, password } = req.body;
        
        if (!email || !password) {
            return res.status(400).json({
                message: "All fields are required.",
                success: false
            });
        }
        
        const user = await UserModel.findOne({ email });
        if (!user) {
            return res.status(401).json({
                message: "Incorrect email or password",
                success: false
            });
        }
        
        const isMatch = await bcryptjs.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({
                message: "Incorrect email or password",
                success: false
            });
        }
        
        const tokenData = {
            userId: user._id
        };
        
        const token = jwt.sign(tokenData, process.env.TOKEN_SECRET, { expiresIn: "1d" });
        
        return res.status(200).cookie("token", token, { 
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            maxAge: 24 * 60 * 60 * 1000 // 1 day in milliseconds
        }).json({
            message: `Welcome back ${user.username}`,
            user: {
                _id: user._id,
                username: user.username,
                email: user.email
            },
            success: true
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            message: "Server error occurred",
            success: false
        });
    }
}

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
}


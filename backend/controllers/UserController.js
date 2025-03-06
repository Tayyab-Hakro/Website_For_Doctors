import Usersmodel from "../models/UserModel.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

// Function to generate JWT token
const generateToken = (user) => {
    console.log("Generating JWT Token...");
    console.log("JWT_SECRET:", process.env.JWT_SECRET); // Debugging JWT_SECRET

    return jwt.sign(
        { id: user._id, email: user.email, username: user.username },
        process.env.JWT_SECRET,
        { expiresIn: "1h" }
    );
};

// Signup Route
export const SignUp = async (req, res) => {
    try {
        const { username, email, password } = req.body;
        if (!username || !email || !password) {
            return res.status(400).json({ message: "All fields are required" });
        }

        const existingUser = await Usersmodel.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "User already exists" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new Usersmodel({ username, email, password: hashedPassword });
        await newUser.save();

        const token = generateToken(newUser);

        res.cookie("token", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "strict",
            maxAge: 3600000
        });

        console.log("User signed up, Token Set:", token);

        res.status(201).json({
            message: "User signed up successfully",
            token,
            user: { id: newUser._id, email: newUser.email, username: newUser.username }
        });
    } catch (error) {
        console.error("Error in SignUp:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

// Login Route
export const Login = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({ message: "Email and password are required" });
        }

        const user = await Usersmodel.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({ message: "Invalid credentials" });
        }

        const token = generateToken(user);

        res.cookie("token", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "strict",
            maxAge: 3600000
        });

        console.log("Login successful, Token Set:", token);

        res.status(200).json({
            message: "Login successful",
            token,
            user: { id: user._id, email: user.email, username: user.username }
        });
    } catch (error) {
        console.error("Error in Login:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

// Middleware to Verify Token from Cookies
export const verifyToken = (req, res, next) => {
    try {
        const token = req.cookies.token; // Fixing incorrect token extraction
        if (!token) {
            console.log("No token found in cookies");
            return res.status(403).json({ message: "No token provided" });
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        console.log("Decoded Token:", decoded);

        req.user = decoded.id;
        next();
    } catch (error) {
        console.error("Error in verifyToken:", error);
        res.status(401).json({ message: "Invalid or expired token" });
    }
};

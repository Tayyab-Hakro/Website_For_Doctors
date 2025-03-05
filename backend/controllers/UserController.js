import Usersmodel from "../models/UserModel.js";
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

// Signup Route
export const SignUp = async (req, res) => {
    try {
        const { username, email, password } = req.body;

        if (!username || !email || !password) {
            return res.status(400).json({ message: "All fields are required" });
        }

        // Check if user already exists
        const existingUser = await Usersmodel.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "User already exists" });
        }

        // Hash password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Save user to the database
        const newUser = new Usersmodel({ username, email, password: hashedPassword });
        await newUser.save();

        res.status(201).json({ message: "User signed up successfully" });
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
            return res.status(400).json({ message: "User not found" });
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(400).json({ message: "Invalid credentials" });
        }

        // Generate JWT token
        const token = jwt.sign(
            { id: user._id, email: user.email },
            process.env.JWT_SECRET,
            { expiresIn: "1h" }
        );

        res.status(200).json({ 
            token, 
            user: { id: user._id, email: user.email, username: user.username }, 
            message: "Login successful" 
        });
    } catch (err) {
        console.error("Error in Login:", err);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

// Middleware to Verify Token
export const verifyToken = (req, res, next) => {
    try {
        const authHeader = req.headers["authorization"];

        if (!authHeader || !authHeader.startsWith("Bearer ")) {
            return res.status(403).json({ message: "No token provided" });
        }

        const token = authHeader.split(" ")[1];

        jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
            if (err) return res.status(401).json({ message: "Unauthorized" });

            req.user = decoded;
            next();
        });
    } catch (error) {
        console.error("Error in verifyToken:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

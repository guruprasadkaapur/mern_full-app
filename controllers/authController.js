import userModel from "../models/userModel.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";


export const registerController = async (req, res) => {
    try {
        const { name, email, password, phone, adress } = req.body;
        
        // Validation
        if (!name || !email || !password || !phone || !adress) {
            return res.status(400).send({ message: "Invalid Credentials" });
        }
        
        // Check for existing user
        const existingUser = await userModel.findOne({ email });
        if (existingUser) {
            return res.status(200).send({
                success: false,
                message: "User Already Exists"
            });
        }
        
        // Hash the password using bcrypt
        const hashedPassword = await bcrypt.hash(password, 10); // 10 is the salt rounds
        
        // Save user
        const user = await new userModel({
            name,
            email,
            phone,
            adress,
            password: hashedPassword
        }).save();

        res.status(201).send({
            success: true,
            message: "User Registered Successfully",
            user
        });

    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Internal Server Error",
            error: error.message
        });
    }
};


//login controller
export const loginController = async (req, res) => {
    try {
        const { email, password } = req.body;
        
        // Validation
        if (!email || !password) {
            return res.status(404).send({ message: "Invalid Credentials" });
        }
        // Check for existing user
        const user = await userModel.findOne({ email });
        if (!user) {
            return res.status(200).send({
                success: false,
                message: "User Not Found"
            });
        }
        
    
        // Check password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(200).send({
                success: false,
                message: "Invalid Credentials"
            });
        }
        
        // Create JWT
        const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, { expiresIn: "7d" });
        
        res.status(200).send({
            success: true,
            message: "Login Successful",
            user: {
                _id: user._id,
                name: user.name,
                email: user.email,
                phone: user.phone,
                adress: user.adress
            },
            token,
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Internal Server Error",
            error: error.message
        });
    }
    }


    //test controller
    export const testController = (req, res) => {
        try {
            res.send("Protected Routes");
        } catch (error) {
            console.log(error);
            res.status(500).send({
                success: false,
                message: "Internal Server Error",
                error: error.message
            });
        }
    }
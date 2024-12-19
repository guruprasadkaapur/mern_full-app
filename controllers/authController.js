import userModel from "../models/userModel.js";
import bcrypt from "bcryptjs";
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

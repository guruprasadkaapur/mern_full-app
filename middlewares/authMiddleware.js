import JWT from "jsonwebtoken";
import userModel from "../models/userModel.js";

export const authMiddleware = async (req, res, next) => {
    try {
       
        const decoded = JWT.verify(req.headers.authorization, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    } catch (error) {
        console.log(error);
        return res.status(500).send({ message: "Internal Server Error" });
    }
}
//admin acess
export const isAdmin = async (req, res, next) => {
    try {
        const user = await userModel.findById(req.user._id);
        if (user.role !== 1) {
            return res.status(401).send({ message: "Unauthorized" });
        }
        else{
            next();
        }
       
    } catch (error) {
        console.log(error);
        return res.status(500).send({ message: "Internal Server Error" });
    }
}
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    adress: { 
        type: String,
        required: true,
    },
    role: {
        type: Number,
        default: 0,
    },
});


const userModel = mongoose.model("User", userSchema);
export default userModel;

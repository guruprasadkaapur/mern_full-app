import express from "express";
import { registerController } from "../controllers/authController.js";

//routeer object
const router = express.Router();

//routing
//register || post 
router.post("/register", registerController);


export default router;
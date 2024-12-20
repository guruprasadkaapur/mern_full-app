import express from "express";
import { registerController, loginController, testController } from "../controllers/authController.js";
import { authMiddleware, isAdmin } from "../middlewares/authMiddleware.js";

//routeer object
const router = express.Router();

//routing
//register || post 
router.post("/register", registerController);

//login
router.post("/login", loginController);

//test
router.get("/test",authMiddleware,isAdmin ,testController)


export default router;
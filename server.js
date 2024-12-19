import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";





//configuration
dotenv.config();


//database
connectDB();

//rest object
const app = express();

//middlewares
app.use(morgan('dev'));
app.use(express.json());

//routes
app.use("/api/v1/auth", authRoutes);


//rest api
app.get('/', (req, res) => {
    res.send('hello');
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import cors from "cors";





//configuration
dotenv.config();


//database
connectDB();

//rest object
const app = express();

//middlewares
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

//routes
app.use("/api/v1/auth", authRoutes);


//rest api
app.get('/', (req, res) => {
    res.send('hello');
});

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

///https://github.com/guruprasadkaapur/mern_full-app.git
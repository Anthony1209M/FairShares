import express, { Request, Response } from "express";
import authRoutes from "./routes/auth.routes";
import {errorMiddleware} from "./middleware/errorMiddleware";
import cors from "cors";
import cookieParser from "cookie-parser";



const app = express();

app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}));


app.use(express.json());
app.use(cookieParser());


app.use('/api', authRoutes);



app.use(errorMiddleware);



export default app;
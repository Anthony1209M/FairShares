import express, { Request, Response } from "express";
import authRoutes from "./routes/auth.routes";
import {errorMiddleware} from "./middleware/errorMiddleware";



const app = express();

app.use(express.json());


app.use('/api', authRoutes);

app.use(errorMiddleware);



export default app;
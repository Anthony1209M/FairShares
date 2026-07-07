import express, { Request, Response } from "express";
import authRoutes from "./routes/auth.routes";
import expenseRoutes from "./routes/expense.routes";
import friendshipRoutes from "./routes/friendShip.routes";
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
app.use('/api', expenseRoutes);
app.use('/api', friendshipRoutes);


app.use(errorMiddleware);



export default app;
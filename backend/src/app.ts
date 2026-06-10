import express, { Request, Response } from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.routes";


dotenv.config();

const app = express();

app.use(express.json());


app.use('/api', authRoutes);

const PORT = Number(process.env.PORT) || 3000;

app.listen(PORT, () =>
{
  console.log("Sever running...");
}

)
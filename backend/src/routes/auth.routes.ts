import { Router } from "express";

const router = Router();

router.get("/login", (req, res) => 
{
    res.status(200).json({message:"hola"})
});

export default router;
import { Router } from "express";
import {createSignupUser} from "../controllers/authController"

const router = Router();

router.post("/login");

router.post("/signup", createSignupUser);


export default router;
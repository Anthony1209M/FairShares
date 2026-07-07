import { Router } from "express";
import {createSignupUser, signIn, getMe} from "../controllers/authController"
import {auth, guest} from "../middleware/authMiddleware";


const router = Router();

router.route("/login").post(guest, signIn);

router.post("/signup", createSignupUser);

router.route("/getme").get(auth, getMe);




export default router;
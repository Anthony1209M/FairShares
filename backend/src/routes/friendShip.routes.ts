import { Router } from "express";
import { auth } from "../middleware/authMiddleware";
import { createInvitedUserSchema } from "../schemas/authSchema";
import { addNewfriend } from "../controllers/friendShipController";

const router = Router();

router.route("/friends").post(auth, addNewfriend);

export default router;
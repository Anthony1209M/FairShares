import { Router } from "express";
import { createExpense } from "../controllers/expensesController";
import { auth } from "../middleware/authMiddleware";

const router = Router();

router.route("/expense").post(auth, createExpense);

export default router;
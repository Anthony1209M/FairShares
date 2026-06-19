import expenseModel from "../models/expenseModel";
import User from "../models/userModel";
import {CreateExpenseBody} from "../types/expenseType";
import { Request, Response } from "express";
import {expenseSchema} from "../schemas/expenseSchema"
import { asyncHandler } from "../utils/asyncHandler";


const createExpense= asyncHandler(async(req:Request, res:Response) =>
{
   
        const result = expenseSchema.safeParse(req.body);
        

        //Remember to add verification logged user must be inside participants.

        if(!result.success)
        {
            return res.status(400).json({
            message: "Validation error",
            errors: result.error.format()
            });
        }



        





    


});

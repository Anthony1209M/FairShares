import expenseModel from "../models/expenseModel";
import User from "../models/userModel";
import { Request, Response, NextFunction } from "express";
import {expenseSchema} from "../schemas/expenseSchema"
import { asyncHandler } from "../utils/asyncHandler";
import { HttpError } from "../errors/HttpErrors";


const createExpense= asyncHandler(async(req:Request, res:Response, next) =>
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

        const {splits, total} = result.data;

        const sum = splits.reduce((acc, s) => acc + s.amount, 0);

        if(sum !== total)
        {
            throw new HttpError(400, "Splits must equal total")
        }

});

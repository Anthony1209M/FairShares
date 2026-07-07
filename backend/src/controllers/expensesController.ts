import expenseModel from "../models/expenseModel";
import User from "../models/userModel";
import { Request, Response, NextFunction } from "express";
import {expenseSchema} from "../schemas/expenseSchema"
import { asyncHandler } from "../utils/asyncHandler";
import { HttpError } from "../errors/HttpErrors";



export const createExpense= asyncHandler(async(req:Request, res:Response, next: NextFunction) =>
{
   
        const result = expenseSchema.safeParse(req.body);
        

        //Remember to add verification logged user must be inside participants.

        if(!result.success)
        {
            console.log(result.error);
            return next(new HttpError(400, result.error.issues[0].message));
           
        }

        


        const {splits, total, category, description, participants} = result.data;

        const createdBy = req.user?.userId as string;


        if(!participants.includes(createdBy))
        {
            next(new HttpError(400, "Creator must be a participant"));
        }

        const sum = splits.reduce((acc, s) => acc + s.amount, 0);

        if(sum !== total)
        {
             return next(new HttpError(400, "Splits must equal total"));
        }

        const expense = await expenseModel.create({
            total,
            splits,
            category,
            description,
            participants,
            createdBy
        })

        return res.status(201).json({Message: "Expense created successfully", expense});
});

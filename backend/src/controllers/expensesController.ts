import expenseModel from "../models/expenseModel";
import User from "../models/userModel";
import {CreateExpenseBody} from "../types/expenseType";
import { Request, Response } from "express";


const createExpense= async(req:Request<{}, {}, CreateExpenseBody>, res:Response) =>
{
    try
    {
        const {participants, splits, total, description} = req.body;

        //Remember to add verification logged user must be inside participants.

        if(!description)
        {
            return res.status(400).json({
            message: "Description cannot be empty"});
        }

        if (!participants || participants.length < 2) {
        return res.status(400).json({
            message: "At least 2 participants are required"
        });
        }


        const sum = splits.reduce((acc, s) => acc + s.amount, 0);

        if(sum !== total)
        {
            return res.status(400).json({
            message: "The amount has to be the same as the total"});
        }



        





    }

    catch(err)
    {
         return res.status(500).json({
            message: err
        })

    }
}

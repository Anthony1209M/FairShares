import { Model } from "mongoose";
import User from "../models/userModel";
import { Request, Response, NextFunction } from "express";
import {asyncHandler} from "../utils/asyncHandler"
import { HttpError } from "../errors/HttpErrors";


export const createSignupUser = asyncHandler(async(req:Request, res:Response, next: NextFunction) =>
{
    
        const {email, password, confirmPassword} = req.body;

        const user = await User.findOne({email});

        if(password !== confirmPassword) throw new HttpError(409, "User already exists");
        

        if(!user)
        {  
            await User.create({         
                email: req.body.email,
                name: req.body.name,
                lastName: req.body.lastName,
                password: req.body.password,
                isRegistered: true
                
            });

            return res.status(201).json({Message: "User was created"})
        }

        const isPendingUser = user && !user.isRegistered

        if(isPendingUser) 
        {
            await activateUser(user, password);

            res.status(200).json({Message: "activating account"});
           
        }

        throw new HttpError(409, "User already exists");

    
    
});

const createInvitedUser = asyncHandler(async(req:Request, res:Response, next: NextFunction) =>
{
    
        const {email} = req.body;

        const user = await User.findOne({email});

        if(!user)
        {
            await User.create({         
            email: req.body.email,
            name: req.body.name })

            return res.status(200).json({Message: "User was created"})

        }

    
    
    
    
});

const activateUser = async(user: any, password: string) =>
{


    user.password = password;
    user.isRegistered = true;
           
    await user.save();

    
};





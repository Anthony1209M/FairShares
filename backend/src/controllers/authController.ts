import { Model } from "mongoose";
import User from "../models/userModel";
import { Request, Response } from "express";


export const createSignupUser = async(req:Request, res:Response) =>
{
    try
    {
        const {email, password, confirmPassword} = req.body;

        const user = await User.findOne({email});

        if(password !== confirmPassword) return res.status(400).json({Message: "Passwords do not match"});
        

        if(!user)
        {  
            await User.create({         
                email: req.body.email,
                name: req.body.name,
                lastName: req.body.lastName,
                password: req.body.password,
                isRegistered: true
                
            });

            return res.status(200).json({Message: "User was created"})
        }

        const isPendingUser = user && !user.isRegistered

        if(isPendingUser) 
        {
            await activateUser(user, password);

            res.status(200).json({Message: "activating account"});
           
        }

        return res.status(409).json({Message: "User already exists"})

    }
    catch(err)
    {
        return res.status(500).json({
            message: err
        })

    }
};

const createInvitedUser = async(req:Request, res:Response) =>
{
    try
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

    }
    catch(err)
    {
        return res.status(500).json({
        message: "Server Error"
        })

    }
    
    
};

const activateUser = async(user: any, password: string) =>
{


    user.password = password;
    user.isRegistered = true;
           
    await user.save();

    
};



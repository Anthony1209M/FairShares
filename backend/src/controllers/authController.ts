
import { Model } from "mongoose";
import User from "../models/userModel";
import { Request, Response, NextFunction } from "express";
import {asyncHandler} from "../utils/asyncHandler"
import { HttpError } from "../errors/HttpErrors";
import {signInSchema} from "../schemas/authSchema";
import  jwt, {JwtPayload}  from "jsonwebtoken";
import { activateUser } from "../services/user.service";


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




export const signIn = asyncHandler(async(req:Request, res:Response, next: NextFunction) =>
{

    const user = await User.findOne({email: req.body.email});
    
    if(!user) return next(new HttpError(401, "Invalid credentials"));

    if(user.password !== req.body.password) return next( new HttpError(401, "Invalid credentials"));

    const userJson = user.toObject();

    delete userJson.password;

    const token = createToken(user.id);

    res.cookie("token", token, {httpOnly:true });

    res.status(200).json(
        
            userJson
        
    ) 
});


const createToken = (userId: string) =>
{
    return jwt.sign({userId: userId}, process.env.JWT_SECRET as string, 
    {expiresIn: "1h"});

}

export const getMe = asyncHandler(async(req:Request, res:Response, next: NextFunction) =>
{
    
  if(!req.user)
  {

      return next(new HttpError(401, "Unauthorized"));      
  }

   const user = await User.findById(req.user.userId).select("-password");


    if (!user) {
        
        return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json(
        user
    );

        

    
} );

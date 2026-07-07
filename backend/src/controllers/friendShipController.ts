import { Request, Response, NextFunction } from "express";
import Friendship from "../models/friendShipModel";
import { asyncHandler } from "../utils/asyncHandler";
import User from "../models/userModel";
import { HttpError } from "../errors/HttpErrors";
import { findAndCreateInvitedUser } from "../services/user.service";

export const addNewfriend = asyncHandler(async (req: Request, res: Response, next: NextFunction) => 
{
    const { name, email } = req.body;

    //create a new user if it doesn't exist and return the user object and a boolean indicating if it was created or not
    const {user} = await findAndCreateInvitedUser(email, name);

    Friendship.create({
        userId: req.user?.userId,
        friendId: user?.id
    })

    return res.status(201).json({Message: "Friendship created successfully"});

})
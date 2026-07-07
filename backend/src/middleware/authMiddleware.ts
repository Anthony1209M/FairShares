import { Request, Response, NextFunction } from "express";
import { HttpError } from "../errors/HttpErrors";
import  jwt, {JwtPayload }  from "jsonwebtoken";
import { string } from "zod";
import User from "../models/userModel";

export async function auth(req: Request,res: Response, next: NextFunction)
{
   const token = req.cookies.token;
   
   

   if(!token) return next(new HttpError(401, "Unauthorized"));

   try
   {
       const decoded = jwt.verify(token, process.env.JWT_SECRET as string) as JwtPayload ;

       req.user = decoded;

       return next();

   }
   catch
   {
      return next(new HttpError(401, "Invalid token"));
   }



};

export function guest(req: Request,res: Response, next: NextFunction)
{
    const token = req.cookies.token;

    if(!token)
    {
        return next();
    }

    try
    {
        jwt.verify(token, process.env.JWT_SECRET as string);

        return next(new HttpError(409, "Already logged in"));
    }
    catch
    {
        return next();
    }

}

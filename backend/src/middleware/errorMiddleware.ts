import { Request, Response, NextFunction } from "express";
import { HttpError } from "../errors/HttpErrors";

export function errorMiddleware(
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) {
  console.error(err); 

  if (err instanceof HttpError) {
    return res.status(err.status).json({
      message: err.message,
    });
  }

  
  return res.status(500).json({
    message: "Internal Server Error",
  });
}
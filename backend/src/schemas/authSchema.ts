import { z } from "zod";

export const signUpUserSchema = z.object({
  email: z.string().email(),
  name: z.string().min(5),
  lastName: z.string().min(5),
  password: z.string().min(8),
  confirmPassword: z.string().min(8)
});

export const createInvitedUserSchema = z.object({
  email: z.string().email(),
  name: z.string().min(5)
});

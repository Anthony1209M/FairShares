import {z} from 'zod';

export const expenseSchema = z.object({
    total: z.number({ 
      error: "Total must be a valid number"}).positive("Total must be greater than 0"),
    splits: z.array(z.object({
        userId: z.string().min(1, "User is required"),
        amount: z.number().min(0, "Amount must be greater than or equal to 0")
    })),
    category: z
    .enum([
      "food",
      "transport",
      "housing",
      "entertainment",
      "travel",
      "shopping",
      "health",
      "education",
      "other",
    ],
    {
    message: "You must select a valid category",
   })
    .optional()
    .default("other"),

  description: z.string().min(1, "There has to be a description"),

  participants: z.array(
    z.string().min(1, "Invalid user id")
  ).min(1, "At least one participant is required")
});

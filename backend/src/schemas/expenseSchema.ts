import {z} from 'zod';

export const expenseSchema = z.object({
    total: z.number().positive("Total must be greater than 0"),
    splits: z.array(z.object({
        user: z.string().min(1, "User is required"),
        amount: z.number().min(1, "Amount cannot be less than 1")
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
    ])
    .optional()
    .default("other"),

  description: z.string().min(1, "There has to be a description"),

  participants: z.array(
    z.string().min(1, "Invalid user id")
  ).min(1, "At least one participant is required"),

  createdAt: z.string().optional(),
});

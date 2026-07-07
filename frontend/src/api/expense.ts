import type{ CreateExpenseDTO } from "../types/expense";
import { apiFetch } from "./clients";

export const createExpense = (expense: CreateExpenseDTO) : Promise<void> =>
{
    return apiFetch<void>("/expense", {
        method: "POST",
        body: JSON.stringify(expense)
    });
};
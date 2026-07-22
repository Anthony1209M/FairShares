import type{ CreateExpenseDTO, SummaryExpense } from "../types/expense";
import { apiFetch } from "./clients";

export const createExpense = (expense: CreateExpenseDTO) : Promise<void> =>
{
    return apiFetch<void>("/expense", {
        method: "POST",
        body: JSON.stringify(expense)
    });
};

export const getSummaryObject = (): Promise<SummaryExpense> =>
{
    return apiFetch<SummaryExpense>("/expenses/summary");
}
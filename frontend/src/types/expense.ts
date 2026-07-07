interface Splits
{
    userId: string,
    amount: number
}

export interface CreateExpenseDTO
{
    total: number,
    description: string,
    splits: Splits[],
    category?: string,
    participants: string[]
}
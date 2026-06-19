interface Splits
{
   user: string,
   amount: number
}

export interface CreateExpenseBody
{
    total: number,
    participants: string[],
    splits: Splits[],
    category: string,
    description: string,
    createdBy: string,
    createdAt: string


}
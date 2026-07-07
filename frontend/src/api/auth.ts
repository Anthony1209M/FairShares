import { apiFetch } from "./clients";
import type { User } from "../types/user";

export interface loginDTO
{
    email: string,
    password: string
}


export function login(loginDTO: loginDTO) : Promise<User>
{
    return apiFetch<User>("/login", 
        {
            method: "POST",
            body: JSON.stringify(loginDTO),

        }
    )
}

export async function getCurrentUser() : Promise<User | null >
{
    try
    {
        const user = await apiFetch<User>("/getme");
        
        return user;

    }
    catch(err)
    {
        return null;
    }
   
}

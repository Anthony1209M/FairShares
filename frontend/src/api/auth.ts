import { apiFetch } from "./clients";

export interface loginDTO
{
    email: string,
    password: string
}

interface AuthResponse 
{
  user: { id: string; name: string; email: string };
}


export function login(loginDTO: loginDTO) : Promise<AuthResponse>
{
    return apiFetch<AuthResponse>("/login", 
        {
            method: "POST",
            body: JSON.stringify(loginDTO),

        }
    )
}

export async function getCurrentUser() : Promise<AuthResponse | null >
{
    try
    {
        const user = await apiFetch<AuthResponse>("/getme");
        
        return user;

    }
    catch(err)
    {
        return null;
    }
   
}

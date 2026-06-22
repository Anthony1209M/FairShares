import { apiFetch } from "./clients";

export interface loginDTO
{
    email: string,
    password: string
}

interface AuthResponse 
{
  token: string;
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

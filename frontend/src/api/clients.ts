
const BASEURL = "http://localhost:3000/api";

export async function apiFetch<T>(path:string, options?: RequestInit ): Promise<T>
{
    const res = await fetch(`${BASEURL}${path}`,
    {headers: { "Content-Type": "application/json" },
    credentials: "include",
    ...options,});

    
    
    if(!res.ok)
    {
        const data = await res.json();
        throw new Error(data.message);
    }
    


    return await res.json();

}
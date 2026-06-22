
const BASEURL = "http://localhost:3000/api";

export async function apiFetch<T>(path:string, options?: RequestInit ): Promise<T>
{
    const res = await fetch(`${BASEURL}${path}`,
    {headers: { "Content-Type": "application/json" },
    ...options,});

    if(!res.ok)
    {
        throw new Error(`API Error ${res.status}`)
    }

    return res.json();

}
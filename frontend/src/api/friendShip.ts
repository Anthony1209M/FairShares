import { apiFetch } from "./clients";

export const createFriendship = async (name: string, email: string): Promise<void> => {
    return apiFetch("/friends", {
        method: "POST",
        body: JSON.stringify({ name, email })
    });
};
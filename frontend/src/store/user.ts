import type { User } from "../types/user";


interface AppState {
  currentUser: User | null;
}

export const state: AppState = {
  currentUser: null
};

export function setCurrentUser(user: User | null)
{
     state.currentUser = user;
     
     
}
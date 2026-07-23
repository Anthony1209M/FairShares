import type { User } from "./user";

export interface Friendship {
  id: string;
  userId: string;
  friend: User;
  status: "pending" | "accepted" | "rejected";
}
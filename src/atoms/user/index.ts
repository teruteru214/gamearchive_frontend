import { atom } from "jotai";

export interface User {
  username: string;
  avatar: string;
  uid: string;
  introduction: string;
  twitter_username: string;
  visibility: number;
}

export const loginUserAtom = atom<User | null>(null);

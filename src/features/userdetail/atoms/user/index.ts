// src/atoms/user.ts
import { atom } from "jotai";
import { User } from "types/user";

export const selectUserAtom = atom<User | null>(null);

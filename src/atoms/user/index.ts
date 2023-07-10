import { atom } from "jotai";
import { User } from "types/user";

export const loginUserAtom = atom<User | null>(null);

export const isLoginAtom = atom(true);

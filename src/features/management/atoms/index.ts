import { atom } from "jotai";

export const myGamesToShowAtom = atom<number>(14);

export const sortOrderAtom = atom<"ascending" | "descending" | null>(null);

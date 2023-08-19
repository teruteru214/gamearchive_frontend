import { GameCard } from "features/management/types";
import { atom } from "jotai";

export const gamesAtom = atom<GameCard[]>([]);

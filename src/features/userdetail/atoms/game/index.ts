import { atom } from "jotai";
import { GameCard } from "types/game";

export const selectedStatusAtom = atom<number | null>(null);

export const selectUserGamesAtom = atom<GameCard[]>([]);

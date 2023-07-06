import { atom } from "jotai";
import { game } from "types/game/game";

export const gameResultsState = atom<game[]>([]);

import { GameAcquisition } from "features/acquisition/types";
import { atom } from "jotai";

export const searchQueryAtom = atom(null);
export const gameResultsAtom = atom<GameAcquisition[]>([]);

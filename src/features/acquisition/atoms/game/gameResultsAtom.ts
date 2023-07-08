import { GameAcquisition } from "features/acquisition/types";
import { atom } from "jotai";

export const gameResultsAtom = atom<GameAcquisition[]>([]);

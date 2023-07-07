import { GameAcquisition } from "features/aquisition/types";
import { atom } from "jotai";

export const gameResultsState = atom<GameAcquisition[]>([]);

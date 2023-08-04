import { GameTab } from "features/management/types";
import { atom } from "jotai";

export const selectedGameStatusAtom = atom<GameTab>("unplaying");

import { atom } from "jotai";

import { GameAcquisition } from "../types";

//ゲームの検索文字
export const searchQueryAtom = atom<string>("");
//検索結果。
export const gameResultsAtom = atom<GameAcquisition[]>([]);
// loading用のatom
export const searchInProgressAtom = atom<boolean>(false);

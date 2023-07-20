import { GameAcquisition } from "features/acquisition/types";
import { ConvertedGame } from "features/status/types";
import { atom } from "jotai";

//ゲームの検索文字
export const searchQueryAtom = atom(null);
//検索結果。
export const gameResultsAtom = atom<GameAcquisition[]>([]);
// ステータスのアトム（ステート）
export const statusAtom = atom<string | null>(null);
// 変換されたゲームのアトム（ステート）
export const convertedGameAtom = atom<ConvertedGame>(null);
// errorメッセージ用のatomを定義
export const errorAtom = atom<string | null>(null);

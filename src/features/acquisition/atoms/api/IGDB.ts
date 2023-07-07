import fetchFromIGDB from "features/acquisition/api/fetchFromIGDB";
import { atom } from "jotai";
import { atomFamily } from "jotai/utils";

export const gameResultsFamily = atomFamily((query: string) =>
  atom(fetchFromIGDB(query))
);

import fetchFromIGDB from "features/aquisition/api/fetchFromIGDB";
import { atom } from "jotai";
import { atomFamily } from "jotai/utils";

export const gameResultsFamily = atomFamily((query: string) =>
  atom(fetchFromIGDB(query))
);

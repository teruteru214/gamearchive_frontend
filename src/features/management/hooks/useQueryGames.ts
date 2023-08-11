// useQueryGames.ts

import { QueryClient } from "@tanstack/query-core";
import { selectedGameStatusAtom } from "atoms/games/gameManagement";
import { atomsWithQuery } from "jotai-tanstack-query";
import { GameStatus } from "types/game";

import { getGamesByStatus } from "../api/getGameByStatus";

export const queryClient = new QueryClient();

export const [StatusGameAtom] = atomsWithQuery((get) => ({
  queryKey: ["games", get(selectedGameStatusAtom)],
  queryFn: async ({ queryKey: [, status] }) => {
    return getGamesByStatus(status as GameStatus);
  },
}));

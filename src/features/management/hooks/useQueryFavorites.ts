import { useQuery } from "@tanstack/react-query";

import { getFavorites } from "../api/getFavorites";
import { GameCard } from "../types";

export const useQueryFavorites = () => {
  return useQuery<GameCard[]>({
    queryKey: ["userFavorites"],
    queryFn: getFavorites,
    staleTime: Infinity,
    onError: () => {
      console.error(`お気に入りのゲームの取得に失敗しました。`);
    },
  });
};

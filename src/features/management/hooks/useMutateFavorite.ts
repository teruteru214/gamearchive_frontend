import { useMutation, useQueryClient } from "@tanstack/react-query";

import { deleteFavorite } from "../api/deleteFavorite";
import { postFavorite } from "../api/postFavorite";
import { GameCard } from "../types";

export const useMutateFavorite = () => {
  const queryClient = useQueryClient();

  const createFavoriteMutation = useMutation({
    mutationFn: postFavorite,
    onMutate: async (variables) => {
      await queryClient.cancelQueries({
        queryKey: ["userFavorites"],
      });
      const previousFavorites = queryClient.getQueryData<GameCard[]>([
        "userFavorites",
      ]);
      if (previousFavorites) {
        queryClient.setQueryData<GameCard[]>(
          ["userFavorites"],
          [...previousFavorites, variables]
        );
      }
      return { previousFavorites };
    },
    onSettled: () => {
      queryClient.invalidateQueries({
        queryKey: ["userFavorites"],
      });
    },
    onError: (_error, _variables, context) => {
      const ctx = context as { previousFavorites?: GameCard[] };
      queryClient.setQueryData<GameCard[]>(
        ["userFavorites"],
        ctx?.previousFavorites
      );
      alert("お気に入り登録に失敗しました");
    },
  });

  const deleteFavoriteMutation = useMutation({
    mutationFn: deleteFavorite,
    onMutate: async (variables) => {
      await queryClient.cancelQueries({
        queryKey: ["userFavorites"],
      });
      const previousFavorites = queryClient.getQueryData<GameCard[]>([
        "userFavorites",
      ]);
      if (previousFavorites) {
        queryClient.setQueryData<GameCard[]>(
          ["userFavorites"],
          previousFavorites.filter(
            (previousFavorite) => variables.id !== previousFavorite.id
          )
        );
      }
      return { previousFavorites };
    },
    onSettled: () => {
      queryClient.invalidateQueries({
        queryKey: ["userFavorites"],
      });
    },
    onError: (_error, _variables, context) => {
      const ctx = context as { previousFavorites?: GameCard[] };
      queryClient.setQueryData<GameCard[]>(
        ["userFavorites"],
        ctx?.previousFavorites
      );
      alert("お気に入り解除に失敗しました");
    },
  });

  return {
    createFavoriteMutation,
    deleteFavoriteMutation,
  };
};

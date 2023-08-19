import { useMutation, useQueryClient } from "@tanstack/react-query";

import { deleteGame } from "../api/deleteGame";

export const useMutateGameDelete = () => {
  const queryClient = useQueryClient();

  const deleteGameMutation = useMutation(deleteGame, {
    onMutate: async () => {
      const previousGames = queryClient.getQueryData(["games"]);

      await queryClient.cancelQueries(["games"]);

      return { previousGames };
    },
    onError: (error, _, context) => {
      console.log("Error during mutation:", error);
      queryClient.setQueryData(["games"], context?.previousGames);
    },
    onSettled: () => {
      queryClient.invalidateQueries(["games"]);
    },
  });

  return {
    deleteGameMutation,
  };
};

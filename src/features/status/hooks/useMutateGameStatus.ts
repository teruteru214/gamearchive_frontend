import { useMutation, useQueryClient } from "@tanstack/react-query";

import { updateGameStatus } from "./../api/updateGameStatus";

export const useMutateGameStatus = () => {
  const queryClient = useQueryClient();

  const updateStatusMutation = useMutation(updateGameStatus, {
    onMutate: async () => {
      const previousGames = queryClient.getQueryData(["games"]);

      await queryClient.cancelQueries(["games"]);

      return { previousGames };
    },
    onError: (error, variables, context) => {
      console.log("Error during mutation:", error);
      queryClient.setQueryData(["games"], context?.previousGames);
    },
    onSettled: () => {
      queryClient.invalidateQueries(["games"]);
    },
  });

  return {
    updateStatusMutation,
  };
};

import axios from "axios";
import { endpoint } from "config";

import { UpdateGameStatusParams } from "../types";

export const updateGameStatus = async ({
  gameStatusId,
  newStatus,
  config,
}: UpdateGameStatusParams) => {
  const response = await axios.put(
    `${endpoint}/game_statuses/${gameStatusId}`,
    {
      status: newStatus,
    },
    config
  );
  return response.data;
};

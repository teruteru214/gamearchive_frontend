import axios from "axios";
import { endpoint } from "config";

import { DeleteGameStatusParams } from "../types";

export const deleteGame = async ({
  gameId,
  config,
}: DeleteGameStatusParams) => {
  const response = await axios.delete(`${endpoint}/games/${gameId}`, config);
  return response.data;
};

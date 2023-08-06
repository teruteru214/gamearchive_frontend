import axios from "axios";
import { endpoint } from "config";

export const updateGameStatus = async (
  gameStatusId: number,
  newStatus: string,
  config: { headers: { authorization: string } }
) => {
  const response = await axios.put(
    `${endpoint}/game_statuses/${gameStatusId}`,
    {
      status: newStatus,
    },
    config
  );
  return response.data;
};

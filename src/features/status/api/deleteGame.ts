import axios from "axios";
import { endpoint } from "config";

export const deleteGame = async (
  gameId: number,
  config: {
    headers: {
      authorization: string;
    };
  }
) => {
  const response = await axios.delete(`${endpoint}/games/${gameId}`, config);
  return response.data;
};

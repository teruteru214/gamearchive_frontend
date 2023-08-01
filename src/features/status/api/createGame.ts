import axios from "axios";
import { endpoint } from "config";
import { GameAcquisition } from "features/acquisition/types";

interface GamePayload {
  game: GameAcquisition;
  genres?: string[];
  platforms?: string[];
  game_status: { status: string };
}

export const createGame = async (
  payload: GamePayload,
  config: {
    headers: {
      authorization: string;
    };
  }
) => {
  const response = await axios.post(`${endpoint}/games`, payload, config);
  return response.data;
};

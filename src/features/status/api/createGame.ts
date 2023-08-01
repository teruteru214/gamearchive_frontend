import axios from "axios";
import { endpoint } from "config";

import { GameCard } from "../types";

export const createGame = async (
  payload: GameCard,
  config: {
    headers: {
      authorization: string;
    };
  }
) => {
  const response = await axios.post(`${endpoint}/games`, payload, config);
  return response.data;
};

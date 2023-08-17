import axios from "axios";
import { endpoint } from "config";

import { Game } from "../types";

export const createGame = async (
  payload: Game,
  config: {
    headers: {
      authorization: string;
    };
  }
) => {
  const response = await axios.post(`${endpoint}/games`, payload, config);
  return response.data;
};

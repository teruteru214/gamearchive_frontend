import axios from "axios";
import { endpoint } from "config";

import { GameAcquisition } from "../types";

export const searchGames = async (
  query: string,
  setGameResults: (games: GameAcquisition[]) => void
) => {
  try {
    const response = await axios.post<GameAcquisition[]>(
      `${endpoint}/search`,
      { search: query },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    setGameResults(response.data);
  } catch (error) {
    console.error(error);
    throw error;
  }
};

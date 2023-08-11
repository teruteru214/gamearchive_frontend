import axios from "axios";
import { endpoint } from "config";
import { getAuth } from "firebase/auth";

import { GameCard } from "../types";

interface GameData {
  attributes: {
    id: number;
    title: string;
    cover: string;
    rating: number;
    url: string;
    favorite: boolean;
    game_genres: any[];
    game_platforms: any[];
    game_status: any;
  };
}

export const getGamesByStatus = async (status: string): Promise<GameCard[]> => {
  const auth = getAuth();
  const idToken = await auth.currentUser?.getIdToken(true);

  if (!idToken) {
    throw new Error("Authentication token is missing.");
  }

  const config = {
    headers: {
      authorization: `Bearer ${idToken}`,
    },
  };
  const res = await axios.get(`${endpoint}/games?status=${status}`, config);
  return mapDataToGameCardStatus(res.data.data);
};

const mapDataToGameCardStatus = (data: GameData[]): GameCard[] => {
  return data.map((game: GameData) => {
    return {
      game: {
        id: game.attributes.id,
        title: game.attributes.title,
        cover: game.attributes.cover,
        rating: game.attributes.rating,
        url: game.attributes.url,
      },
      genres: game.attributes.game_genres,
      platforms: game.attributes.game_platforms,
      game_status: game.attributes.game_status,
    };
  });
};

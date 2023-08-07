import { QueryClient } from "@tanstack/query-core";
import { selectedGameStatusAtom } from "atoms/games/gameManagement";
import axios from "axios";
import { endpoint } from "config";
import { getAuth } from "firebase/auth";
import { atomsWithQuery } from "jotai-tanstack-query";
import { GameCardStatus } from "types/game";

interface GameData {
  attributes: {
    id: number;
    title: string;
    cover: string;
    rating: number;
    url: string;
    game_genres: any[];
    game_platforms: any[];
    game_status: any;
  };
}

export const queryClient = new QueryClient();

export const [StatusGameAtom] = atomsWithQuery((get) => ({
  queryKey: ["games", get(selectedGameStatusAtom)],
  queryFn: async ({ queryKey: [, status] }) => {
    const auth = getAuth();
    const idToken = await auth.currentUser?.getIdToken(true);
    const config = {
      headers: {
        authorization: `Bearer ${idToken}`,
      },
    };
    const res = await axios.get(`${endpoint}/games?status=${status}`, config);
    return mapDataToGameCardStatus(res.data.data);
  },
}));

const mapDataToGameCardStatus = (data: GameData[]): GameCardStatus[] => {
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
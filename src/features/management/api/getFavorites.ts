import axios, { AxiosResponse } from "axios";
import { endpoint } from "config";
import { getAuth } from "firebase/auth";

import { ResponseGameType } from "../types";

export const getFavorites = async () => {
  const auth = getAuth();
  const idToken = await auth.currentUser?.getIdToken(true);
  const config = {
    headers: {
      authorization: `Bearer ${idToken}`,
    },
  };
  const res: AxiosResponse<ResponseGameType> = await axios.get(
    `${endpoint}/games/favorites`,
    config
  );
  const gameItems = res.data?.data.map((game) => ({
    id: game.attributes.id,
    title: game.attributes.title,
    cover: game.attributes.cover,
    rating: game.attributes.rating,
    url: game.attributes.url,
    genres: game.attributes.game_genres,
    platforms: game.attributes.game_platforms,
    game_status: game.attributes.game_status,
  }));
  return gameItems;
};

import axios from "axios";
import { endpoint } from "config";
import { getAuth } from "firebase/auth";

import { GameCard } from "../types";

export const postFavorite = async ({ id }: GameCard) => {
  const auth = getAuth();
  const idToken = await auth.currentUser?.getIdToken();
  const config = {
    headers: {
      authorization: `Bearer ${idToken}`,
    },
  };
  return await axios.post(
    `${endpoint}/favorites`,
    {
      game_id: id,
    },
    config
  );
};

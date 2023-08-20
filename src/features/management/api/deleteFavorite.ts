import axios from "axios";
import { endpoint } from "config";
import { getAuth } from "firebase/auth";

import { GameCard } from "../types";

export const deleteFavorite = async ({ id }: GameCard) => {
  const auth = getAuth();
  const idToken = await auth.currentUser?.getIdToken();
  const config = {
    headers: {
      authorization: `Bearer ${idToken}`,
    },
  };
  return await axios.delete(`${endpoint}/favorites/${id}`, config);
};

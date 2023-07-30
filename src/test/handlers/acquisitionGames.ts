import { endpoint } from "config";
import { GameAcquisition } from "features/acquisition/types";
import { DefaultBodyType, PathParams, rest } from "msw";

const initialData = [
  {
    title: "pokemon Sun",
    cover: "https://images.igdb.com/igdb/image/upload/t_cover_big/co3co7.png",
    genres: ["Adventure", "RPG", "Strategy", "TBS"],
    platforms: ["Nintendo3DS"],
    url: "https://www.igdb.com/games/pokemon-sun",
    rating: 76,
  },
  {
    title: "pokemon Moon",
    cover: "https://images.igdb.com/igdb/image/upload/t_cover_big/co3co8.png",
    genres: ["Adventure", "RPG", "Strategy", "TBS"],
    platforms: ["Nintendo3DS"],
    url: "https://www.igdb.com/games/pokemon-moon",
    rating: 78,
  },
  {
    title: "pokemon Gold",
    cover: "https://images.igdb.com/igdb/image/upload/t_cover_big/co5pia.png",

    genres: ["Adventure", "RPG", "TBS"],
    platforms: ["Nintendo3DS", "Gameboycolor"],
    url: "https://www.igdb.com/games/pokemon-gold",
    rating: 86,
  },
  {
    title: "Undertale",
    cover: "https://images.igdb.com/igdb/image/upload/t_cover_big/co2855.png",
    genres: ["Adventure", "RPG", "Strategy", "TBS", "Indie"],
    platforms: ["Xbox One", "PS4", "Linux", "Mac", "PSVita", "PC(windows)"],
    url: "https://www.igdb.com/games/undertale",
    rating: 87,
  },
];

export const acquisitionGameAPI = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  getALLAcquisitionGames() {
    return initialData;
  },
};

export const acquisitionGamesHandlers = [
  rest.get<DefaultBodyType, PathParams, GameAcquisition[]>(
    `${endpoint}/acquisition`,
    (_req, res, ctx) => {
      return res(
        ctx.status(200),
        ctx.json(acquisitionGameAPI.getALLAcquisitionGames())
      );
    }
  ),
];

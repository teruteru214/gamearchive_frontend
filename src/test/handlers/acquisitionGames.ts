import { endpoint } from "config";
import { GameAcquisition } from "features/acquisition/types";
import { DefaultBodyType, PathParams, rest } from "msw";

const initialData = [
  {
    id: 1,
    name: "pokemon Sun",
    cover: {
      id: 1,
      url: "https://images.igdb.com/igdb/image/upload/t_cover_big/co3co7.png",
    },
    genres: [
      {
        id: 1,
        name: "Adventure",
      },
      {
        id: 2,
        name: "RPG",
      },
      {
        id: 3,
        name: "Strategy",
      },
      {
        id: 4,
        name: "TBS",
      },
    ],
    platforms: [
      {
        id: 1,
        name: "Nintendo3DS",
      },
    ],
    url: "https://www.igdb.com/games/pokemon-sun",
    rating: 76,
  },
  {
    id: 2,
    name: "pokemon Moon",
    cover: {
      id: 2,
      url: "https://images.igdb.com/igdb/image/upload/t_cover_big/co3co8.png",
    },
    genres: [
      {
        id: 5,
        name: "Adventure",
      },
      {
        id: 6,
        name: "RPG",
      },
      {
        id: 7,
        name: "Strategy",
      },
      {
        id: 8,
        name: "TBS",
      },
    ],
    platforms: [
      {
        id: 1,
        name: "Nintendo3DS",
      },
    ],
    url: "https://www.igdb.com/games/pokemon-moon",
    rating: 78,
  },
  {
    id: 3,
    name: "pokemon Gold",
    cover: {
      id: 3,
      url: "https://images.igdb.com/igdb/image/upload/t_cover_big/co5pia.png",
    },
    genres: [
      {
        id: 9,
        name: "Adventure",
      },
      {
        id: 10,
        name: "RPG",
      },
      {
        id: 11,
        name: "TBS",
      },
    ],
    platforms: [
      {
        id: 1,
        name: "Nintendo3DS",
      },
      {
        id: 2,
        name: "Gameboycolor",
      },
    ],
    url: "https://www.igdb.com/games/pokemon-gold",
    rating: 86,
  },
  {
    id: 4,
    name: "Undertale",
    cover: {
      id: 4,
      url: "https://images.igdb.com/igdb/image/upload/t_cover_big/co2855.png",
    },
    genres: [
      {
        id: 12,
        name: "Adventure",
      },
      {
        id: 13,
        name: "RPG",
      },
      {
        id: 14,
        name: "Strategy",
      },
      {
        id: 15,
        name: "TBS",
      },
      {
        id: 16,
        name: "Indie",
      },
    ],
    platforms: [
      {
        id: 3,
        name: "Xbox One",
      },
      {
        id: 4,
        name: "PS4",
      },
      {
        id: 5,
        name: "Linux",
      },
      {
        id: 6,
        name: "Mac",
      },
      {
        id: 7,
        name: "PSVita",
      },
      {
        id: 8,
        name: "PC(windows)",
      },
    ],
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
    (req, res, ctx) => {
      return res(
        ctx.status(200),
        ctx.json(acquisitionGameAPI.getALLAcquisitionGames())
      );
    }
  ),
];

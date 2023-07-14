import { endpoint } from "config";
import { rest } from "msw";

const initialData = [
  {
    game: {
      id: 1,
      title: "pokemon Sun",
      cover: "https://images.igdb.com/igdb/image/upload/t_cover_big/co3co7.png",
      url: "https://www.igdb.com/games/pokemon-sun",
      rating: 76,
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
    gameStatus: {
      id: 1,
      user_id: 1,
      status: "unplaying",
    },
  },
  {
    game: {
      id: 2,
      title: "pokemon Moon",
      cover: "https://images.igdb.com/igdb/image/upload/t_cover_big/co3co8.png",
      url: "https://www.igdb.com/games/pokemon-moon",
      rating: 78,
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
    gameStatus: {
      id: 2,
      user_id: 1,
      status: "playing",
    },
  },
  {
    game: {
      id: 3,
      title: "pokemon Gold",
      cover: "https://images.igdb.com/igdb/image/upload/t_cover_big/co5pia.png",
      rating: 86,
      url: "https://www.igdb.com/games/pokemon-gold",
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
        id: 4,
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
    gameStatus: {
      id: 3,
      user_id: 1,
      status: "clear",
    },
  },
  {
    game: {
      id: 4,
      title: "Undertale",
      cover: "https://images.igdb.com/igdb/image/upload/t_cover_big/co2855.png",
      rating: 87,
      url: "https://www.igdb.com/games/undertale",
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
      {
        id: 5,
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
    gameStatus: {
      id: 4,
      user_id: 1,
      status: "unplaying",
    },
  },
];

const savedGameAPI = {
  getGamesByStatus(status: "unplaying" | "playing" | "clear") {
    return initialData.filter((game) => game.gameStatus.status === status);
  },
};

export const savedGamesHandlers = [
  rest.get(`${endpoint}/management/status/unplayed`, (req, res, ctx) => {
    const unplayedGames = savedGameAPI.getGamesByStatus("unplaying");
    return res(ctx.status(200), ctx.json(unplayedGames));
  }),
  rest.get(`${endpoint}/management/status/playing`, (req, res, ctx) => {
    const playingGames = savedGameAPI.getGamesByStatus("playing");
    return res(ctx.status(200), ctx.json(playingGames));
  }),
  rest.get(`${endpoint}/management/status/clear`, (req, res, ctx) => {
    const clearedGames = savedGameAPI.getGamesByStatus("clear");
    return res(ctx.status(200), ctx.json(clearedGames));
  }),
];

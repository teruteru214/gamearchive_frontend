import { atom } from "jotai";
import { GameCard } from "types/game";

export const sabGamesAtom = atom<GameCard[]>([
  {
    game: {
      id: 1,
      title: "The Legend of Zelda: Tears of the Kingdom",
      cover: "https://images.igdb.com/igdb/image/upload/t_cover_big/co5vmg.png",
      rating: 98,
      url: "https://www.igdb.com/games/the-legend-of-zelda-tears-of-the-kingdom",
    },
    genres: [
      {
        id: 1,
        name: "Adventure",
      },
    ],
    platforms: [
      {
        id: 1,
        name: "Nintendo Switch",
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
      title: "Marvel's Spider-Man: Special Edition",
      cover: "https://images.igdb.com/igdb/image/upload/t_cover_big/co485x.png",
      url: "https://www.igdb.com/games/marvels-spider-man-special-edition",
    },
    genres: [
      {
        id: 2,
        name: "Adventure",
      },
      {
        id: 3,
        name: "Hack and slash/Beat 'em up",
      },
    ],
    platforms: [
      {
        id: 2,
        name: "PlayStation 4",
      },
    ],
    gameStatus: {
      id: 2,
      user_id: 1,
      status: "clear",
    },
  },
  {
    game: {
      id: 3,
      title: "Pokémon Crystal",
      cover: "https://images.igdb.com/igdb/image/upload/t_cover_big/co5pil.png",
      url: "https://www.igdb.com/games/pokemon-crystal",
    },
    genres: [
      {
        id: 4,
        name: "Adventure",
      },
      {
        id: 5,
        name: "Role-playing (RPG)",
      },
    ],
    platforms: [
      {
        id: 3,
        name: "Nintendo 3DS",
      },
      {
        id: 4,
        name: "Game Boy Color",
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
      title: "Persona 5 Royal",
      cover: "https://images.igdb.com/igdb/image/upload/t_cover_big/co1nic.png",
      url: "https://www.igdb.com/games/persona-5-royal",
    },
    genres: [
      {
        id: 6,
        name: "Adventure",
      },
      {
        id: 7,
        name: "Role-playing (RPG)",
      },
      {
        id: 8,
        name: "Turn-based strategy (TBS)",
      },
    ],
    platforms: [
      {
        id: 5,
        name: "Xbox One",
      },
      {
        id: 6,
        name: "PlayStation 4",
      },
      {
        id: 7,
        name: "PlayStation 5",
      },
      {
        id: 8,
        name: "PC (Microsoft Windows)",
      },
      {
        id: 9,
        name: "Nintendo Switch",
      },
      {
        id: 10,
        name: "Xbox Series X|S",
      },
    ],
    gameStatus: {
      id: 4,
      user_id: 1,
      status: "playing",
    },
  },
]);

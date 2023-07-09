import { GameAcquisition } from "features/acquisition/types";
import { atom } from "jotai";

const createGameItem = (id: number) => ({
  id,
  name: `The Legend of Zelda: Skyward Sword HD ${id}`,
  cover: "https://images.igdb.com/igdb/image/upload/t_cover_big/co3p3a.png",
  genres: "#Adventure #Role-playing(RPG)",
  platforms: "#NintendoSwitch #Wii",
  url: "https://www.igdb.com/games/the-legend-of-zelda-skyward-sword-hd",
  rating: 76,
  status: 2,
});

export const gameItemsAtom = atom(
  Array.from({ length: 149 }, (_, i) => createGameItem(i + 1))
);

export const createGameAcquisitionItem = (id: number): GameAcquisition => ({
  id,
  name: `The Legend of Zelda: Skyward Sword HD ${id}`,
  cover: {
    id,
    url: "https://images.igdb.com/igdb/image/upload/t_cover_big/co3p3a.png",
  },
  genres: [
    {
      id: 1,
      name: "Adventure",
    },
    {
      id: 2,
      name: "Role-playing(RPG)",
    },
  ],
  platforms: [
    {
      id: 1,
      name: "NintendoSwitch",
    },
    {
      id: 2,
      name: "Wii",
    },
  ],
  url: "https://www.igdb.com/games/the-legend-of-zelda-skyward-sword-hd",
  rating: 76,
});

export const gameItemsAtom2 = atom(
  Array.from({ length: 150 }, (_, i) => createGameAcquisitionItem(i + 1))
);

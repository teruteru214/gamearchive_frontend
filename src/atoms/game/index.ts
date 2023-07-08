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
  Array.from({ length: 30 }, (_, i) => createGameItem(i + 1))
);

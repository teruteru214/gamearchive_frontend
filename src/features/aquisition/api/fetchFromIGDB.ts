// あなたの型定義ファイルからGameをインポートします

import { game } from "types/game/game";

const createGameItem = (id: number): game => ({
  id,
  name: `The Legend of Zelda: Skyward Sword HD ${id}`,
  cover: {
    id: 123,
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
      id: 3,
      name: "NintendoSwitch",
    },
    {
      id: 4,
      name: "Wii",
    },
  ],
  url: "https://www.igdb.com/games/the-legend-of-zelda-skyward-sword-hd",
  rating: 76,
});

const fetchFromIGDB = (query: string): Promise<game[]> => {
  const gameResults = Array.from({ length: 150 }, (_, i) =>
    createGameItem(i + 1)
  );
  return Promise.resolve(gameResults);
};

export default fetchFromIGDB;

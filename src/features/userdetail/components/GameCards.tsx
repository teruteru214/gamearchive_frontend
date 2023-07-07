import { Button } from "@mantine/core";
import GameCard from "components/GameCard";
// 1つのゲームデータを作成する
const createGameItem = (id: number) => ({
  id,
  name: `The Legend of Zelda: Skyward Sword HD ${id}`,
  cover: "https://images.igdb.com/igdb/image/upload/t_cover_big/co3p3a.png",
  genres: "#Adventure #Role-playing(RPG)",
  platforms: "#NintendoSwitch #Wii",
  url: "https://www.igdb.com/games/the-legend-of-zelda-skyward-sword-hd",
  rating: 76,
  status: 1, // Add status here
});

// 30個のゲームデータを生成する
const gameItems = Array.from({ length: 30 }, (_, i) => createGameItem(i + 1));

const GameCards = () => {
  return (
    <div className="flex flex-wrap justify-between gap-4">
      {gameItems.map((game) => (
        <GameCard key={game.id} game={game} />
      ))}
      <Button
        className="flex w-full items-center justify-center border-0 border-y border-gray-300 bg-white text-black hover:bg-gray-100"
        size="md"
      >
        さらに表示する
      </Button>
    </div>
  );
};

export default GameCards;

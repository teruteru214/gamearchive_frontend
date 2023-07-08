import { Button } from "@mantine/core";
import { gameItemsAtom2 } from "atoms/games/gamesListAtom";
import { useAtom } from "jotai";

import GameCardAcquisition from "./GameCardAcquisition";

const SearchResults = () => {
  const [games] = useAtom(gameItemsAtom2);

  return (
    <div className="flex flex-wrap justify-between gap-4">
      {games.map((game) => (
        <GameCardAcquisition key={game.id} game={game} />
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

export default SearchResults;

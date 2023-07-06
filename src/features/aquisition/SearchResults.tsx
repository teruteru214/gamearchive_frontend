import { Button } from "@mantine/core";
import { gameResultsFamily } from "atoms/api/IGDB";
import { searchQueryState } from "atoms/game/searchQueryState";
import GameCardAcquisition from "components/GameCardAcquisition";
import { useAtom } from "jotai";

const SearchResults = () => {
  const [searchQuery] = useAtom(searchQueryState);
  const [gameResults] = useAtom(gameResultsFamily(searchQuery));

  return (
    <div className="flex flex-wrap justify-between gap-4">
      {gameResults.map((game) => (
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

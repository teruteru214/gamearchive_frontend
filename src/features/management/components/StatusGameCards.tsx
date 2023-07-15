import { Button } from "@mantine/core";
import { itemsToShowAtom } from "atoms/games";
import { sabGamesAtom } from "atoms/games/gamesListAtom";
import { useAtom } from "jotai";

import StatusGameCard from "./StatusGameCard";

const StatusGameCards = () => {
  const [itemsToShow, setItemsToShow] = useAtom(itemsToShowAtom);

  const [games] = useAtom(sabGamesAtom);

  return (
    <div className="flex flex-wrap justify-between gap-4">
      {games.slice(0, itemsToShow).map((game) => (
        <StatusGameCard key={game.game.id} gameData={game} />
      ))}
      <Button
        onClick={() => setItemsToShow(itemsToShow + 30)}
        className="flex w-full items-center justify-center border-0 border-y border-gray-300 bg-white text-black hover:bg-gray-100"
        size="md"
        style={{ display: itemsToShow >= games.length ? "none" : "flex" }}
      >
        さらに表示する
      </Button>
    </div>
  );
};

export default StatusGameCards;

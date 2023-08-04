import { Button } from "@mantine/core";
import { itemsToShowAtom } from "atoms/games";
import { useAtom } from "jotai";
import { GameCardStatus } from "types/game";

import { gamesAtom } from "../api/atoms/gamesAtom";
import { GameTab } from "../types";
import StatusGameCard from "./StatusGameCard";

interface StatusGameCardsProps {
  status: GameTab; // Update type here
}

const StatusGameCards: React.FC<StatusGameCardsProps> = () => {
  const [itemsToShow, setItemsToShow] = useAtom(itemsToShowAtom);

  const [games] = useAtom(gamesAtom);

  return (
    <div className="flex flex-wrap justify-between gap-4">
      {games.slice(0, itemsToShow).map((gameData: GameCardStatus) => (
        <StatusGameCard key={gameData.game.id} gameData={gameData} />
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

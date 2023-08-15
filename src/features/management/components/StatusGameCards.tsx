import { Button } from "@mantine/core";
import { itemsToShowAtom } from "atoms/games";
import { useAtom } from "jotai";

import { StatusGameAtom } from "../hooks/useQueryGames";
import { GameCard, GameTab } from "../types";
import StatusGameCard from "./StatusGameCard";

interface StatusGameCardsProps {
  status: GameTab; // Update type here
}

const StatusGameCards: React.FC<StatusGameCardsProps> = () => {
  const [itemsToShow, setItemsToShow] = useAtom(itemsToShowAtom);

  const [games] = useAtom(StatusGameAtom);

  return (
    <div className="flex flex-wrap justify-between gap-4">
      {games.slice(0, itemsToShow).map((gameData: GameCard) => (
        <StatusGameCard key={gameData.id} gameData={gameData} />
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

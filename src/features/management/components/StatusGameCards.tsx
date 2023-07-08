import { Button } from "@mantine/core";
import { gameItemsAtom } from "atoms/dummy";
import { useAtom } from "jotai";

import StatusGameCard from "./StatusGameCard";

const StatusGameCards = () => {
  const [gameItems] = useAtom(gameItemsAtom);

  return (
    <div className="flex flex-wrap justify-between gap-4">
      {gameItems.map((game) => (
        <StatusGameCard key={game.id} game={game} />
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

export default StatusGameCards;

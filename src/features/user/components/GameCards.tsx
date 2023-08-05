import { Button } from "@mantine/core";
import { itemsToShowAtom } from "atoms/games";
import { useAtom } from "jotai";

const GameCards = () => {
  const [itemsToShow, setItemsToShow] = useAtom(itemsToShowAtom);

  return (
    <div className="flex flex-wrap justify-between gap-4">
      <Button
        onClick={() => setItemsToShow(itemsToShow + 30)}
        className="flex w-full items-center justify-center border-0 border-y border-gray-300 bg-white text-black hover:bg-gray-100"
        size="md"
      >
        さらに表示する
      </Button>
    </div>
  );
};

export default GameCards;

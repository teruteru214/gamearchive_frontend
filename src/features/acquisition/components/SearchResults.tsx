import { Button, Center, Image, Skeleton } from "@mantine/core";
import { itemsToShowAtom } from "atoms/games";
import {
  gameResultsAtom,
  searchInProgressAtom,
} from "atoms/games/gameAcquisition";
import { useAtom } from "jotai";
import { useMediaQuery } from "lib/mantine/useMediaQuery";

import before_search from "../../../assets/before_search.png";
import GameCardAcquisition from "./GameCardAcquisition";

const SearchResults = () => {
  const [games] = useAtom(gameResultsAtom);
  const [itemsToShow, setItemsToShow] = useAtom(itemsToShowAtom);
  const [searchInProgress] = useAtom(searchInProgressAtom);

  const largerThanSm = useMediaQuery("sm");

  if (searchInProgress) {
    const skeletonColumns = largerThanSm ? "w-1/2" : "w-full";

    return (
      <div className="flex flex-wrap">
        {Array.from({ length: 30 }).map((_, index) => (
          <div key={index} className={`${skeletonColumns} p-2`}>
            <Skeleton visible={true} width="100%" height={242} />
          </div>
        ))}
      </div>
    );
  } else if (!games || games.length === 0) {
    return (
      <Center>
        <Image
          src={before_search}
          width={largerThanSm ? 550 : 300}
          className="py-20"
        />
      </Center>
    );
  }

  return (
    <div className="flex flex-wrap justify-between gap-4">
      {games.slice(0, itemsToShow).map((game) => (
        <GameCardAcquisition key={game.title} game={game} />
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

export default SearchResults;

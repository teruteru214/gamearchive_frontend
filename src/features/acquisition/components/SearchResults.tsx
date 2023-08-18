import { Button, Center, Image, SimpleGrid, Skeleton } from "@mantine/core";
import {
  gameResultsAtom,
  searchInProgressAtom,
} from "atoms/games/gameAcquisition";
import { gamesToShowAtom } from "atoms/ui";
import { useAtom } from "jotai";
import { useMediaQuery } from "lib/mantine/useMediaQuery";

import before_search from "../../../assets/before_search.png";
import Game from "./Game";

const SearchResults = () => {
  const [games] = useAtom(gameResultsAtom);
  const [gamesToShow, setGamesToShow] = useAtom(gamesToShowAtom);
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
    <>
      <SimpleGrid cols={largerThanSm ? 2 : 1}>
        {games.slice(0, gamesToShow).map((game) => (
          <Game key={game.url} game={game} />
        ))}
      </SimpleGrid>
      <Button
        onClick={() => setGamesToShow(gamesToShow + 30)}
        className="mt-4 flex w-full items-center justify-center border-0 border-y border-gray-300 bg-white text-black hover:bg-gray-100"
        size="md"
        style={{ display: gamesToShow >= games.length ? "none" : "flex" }}
      >
        さらに表示する
      </Button>
    </>
  );
};

export default SearchResults;

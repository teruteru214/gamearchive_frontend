import { Button, Image, SimpleGrid, Skeleton, Tabs } from "@mantine/core";
import { useAtom, useAtomValue } from "jotai";
import { useMediaQuery } from "lib/mantine/useMediaQuery";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import None from "../../../assets/None.png";
import { myGamesToShowAtom, sortOrderAtom } from "../atoms";
import { GameCard, GameListsType } from "../types";
import { sortGamesByRating } from "../utils";
import MyGame from "./MyGame";

const GameStatusSelecter = ({
  game_status,
  gameItems,
  isLoading,
}: GameListsType) => {
  const navigate = useNavigate();
  const params = useParams();
  const [myGamesToShow, setMyGamesToShow] = useAtom(myGamesToShowAtom);
  const largerThanSm = useMediaQuery("sm");
  const sortOrder = useAtomValue(sortOrderAtom);
  const [sortedGameItems, setSortedGameItems] = useState<GameCard[]>([]);

  useEffect(() => {
    if (sortOrder === "descending") {
      const sortedGames = sortGamesByRating(gameItems, false);
      setSortedGameItems(sortedGames);
    } else if (sortOrder === "ascending") {
      const sortedGames = sortGamesByRating(gameItems, true);
      setSortedGameItems(sortedGames);
    } else {
      setSortedGameItems(gameItems);
    }
  }, [sortOrder, gameItems]);

  return (
    <>
      <Tabs
        value={params.tab}
        onTabChange={(value) => {
          navigate(`/management/${value}`);
        }}
        className="py-4"
      >
        <Tabs.List grow position="center">
          {game_status.map((status) => (
            <Tabs.Tab
              key={status.path}
              value={status.path}
              className="text-xs font-semibold sm:text-base"
            >
              {status.name}
            </Tabs.Tab>
          ))}
        </Tabs.List>
      </Tabs>

      {isLoading ? (
        <div className="flex flex-wrap">
          {Array.from({ length: 30 }).map((_, index) => (
            <div
              key={index}
              className={`${largerThanSm ? "w-1/2" : "w-full"} p-2`}
            >
              <Skeleton visible={true} width="100%" height={242} />
            </div>
          ))}
        </div>
      ) : gameItems.length > 0 ? (
        <>
          <SimpleGrid cols={largerThanSm ? 2 : 1}>
            {sortedGameItems.slice(0, myGamesToShow).map((gameItem) => (
              <MyGame key={gameItem.id} gameItem={gameItem} />
            ))}
          </SimpleGrid>
          {sortedGameItems.length > myGamesToShow && (
            <Button
              onClick={() => setMyGamesToShow(myGamesToShow + 14)}
              className="mt-4 flex w-full items-center justify-center border-0 border-y border-gray-300 bg-white text-black hover:bg-gray-100"
              size="md"
            >
              さらに表示する
            </Button>
          )}
        </>
      ) : (
        <div className="my-10 flex justify-center">
          <Image src={None} alt="No games available" />
        </div>
      )}
    </>
  );
};

export default GameStatusSelecter;

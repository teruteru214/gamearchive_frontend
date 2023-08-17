import { Card, Tabs } from "@mantine/core";
import { useEffect, useState } from "react";
import {
  useLocation,
  useNavigate,
  useParams,
  useSearchParams,
} from "react-router-dom";

import { GameListsType } from "../types";
import StatusGameCard from "./StatusGameCard";

const ITEMS_PAGE_SIZE = 20;

const GameStatusHeader = ({ game_status, gameItems }: GameListsType) => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const gamePage = parseInt(searchParams.get("page") || "1");
  const params = useParams();
  console.log(gameItems);
  const { hash, pathname } = useLocation();

  const [currentGameItems, setCurrentGameItems] = useState(
    gameItems.slice(0, ITEMS_PAGE_SIZE)
  );

  const pageCount = Math.ceil(gameItems.length / ITEMS_PAGE_SIZE);

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
    }
    const from = (gamePage - 1) * ITEMS_PAGE_SIZE;
    const to = from + ITEMS_PAGE_SIZE;
    setCurrentGameItems(gameItems.slice(from, to));
  }, [gamePage, gameItems, hash, pathname]);

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
      <div className="flex flex-wrap justify-between gap-2">
        {currentGameItems.map((gameItem) => (
          <StatusGameCard key={gameItem.id} gameItem={gameItem} />
        ))}
      </div>
      <Card className="mt-10 flex items-center justify-center">
        {/* <Pagination
          total={pageCount}
          onChange={(nextPage) => {
            navigate(`${pathname}?page=${nextPage}`);
          }}
          page={gamePage}
        /> */}
      </Card>
    </>
  );
};

export default GameStatusHeader;

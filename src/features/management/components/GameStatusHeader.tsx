import { Button, Image, SimpleGrid, Tabs } from "@mantine/core";
import { myGamesToShowAtom } from "atoms/ui";
import { useAtom } from "jotai";
import { useMediaQuery } from "lib/mantine/useMediaQuery";
import { useNavigate, useParams } from "react-router-dom";

import None from "../../../assets/None.png";
import { GameListsType } from "../types";
import MyGame from "./MyGame";

const GameStatusHeader = ({ game_status, gameItems }: GameListsType) => {
  const navigate = useNavigate();
  const params = useParams();
  const [myGamesToShow, setMyGamesToShow] = useAtom(myGamesToShowAtom);
  const largerThanSm = useMediaQuery("sm");

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
      {gameItems.length > 0 ? (
        <>
          <SimpleGrid cols={largerThanSm ? 2 : 1}>
            {gameItems.slice(0, myGamesToShow).map((gameItem) => (
              <MyGame key={gameItem.id} gameItem={gameItem} />
            ))}
          </SimpleGrid>
          {gameItems.length > myGamesToShow ? (
            <Button
              onClick={() => setMyGamesToShow(myGamesToShow + 14)}
              className="mt-4 flex w-full items-center justify-center border-0 border-y border-gray-300 bg-white text-black hover:bg-gray-100"
              size="md"
            >
              さらに表示する
            </Button>
          ) : null}
        </>
      ) : (
        <div className="my-10 flex justify-center">
          <Image
            src={None}
            style={{ width: largerThanSm ? "600px" : "300px", height: "auto" }}
          />
        </div>
      )}
    </>
  );
};

export default GameStatusHeader;

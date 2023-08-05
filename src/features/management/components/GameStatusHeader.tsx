import { Tabs } from "@mantine/core";
import { selectedGameStatusAtom } from "atoms/games/gameManagement";
import StatusGameCards from "features/management/components/StatusGameCards";
import { useSetAtom } from "jotai";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { GameTab } from "../types";

const GameStatusHeader = () => {
  const updateSelectedGameStatus = useSetAtom(selectedGameStatusAtom);
  const navigate = useNavigate();
  const { status } = useParams();

  useEffect(() => {
    if (status) {
      updateSelectedGameStatus(status as GameTab);
    }
  }, [status, updateSelectedGameStatus]);

  const handleTabChange = (newTab: string) => {
    navigate(`/management/${newTab}`);
  };

  return (
    <Tabs onTabChange={handleTabChange} className="my-4" value={status}>
      <Tabs.List grow position="center">
        <Tabs.Tab
          value="favorites"
          className="text-xs font-semibold sm:text-base"
        >
          お気に入り
        </Tabs.Tab>
        <Tabs.Tab value="clear" className="text-xs font-semibold sm:text-base">
          クリア
        </Tabs.Tab>
        <Tabs.Tab
          value="playing"
          className="text-xs font-semibold sm:text-base"
        >
          プレイ中
        </Tabs.Tab>
        <Tabs.Tab
          value="unplaying"
          className="text-xs font-semibold sm:text-base"
        >
          積みゲー
        </Tabs.Tab>
      </Tabs.List>
      <Tabs.Panel value="favorites">
        <p>お気に入り</p>
        <StatusGameCards status="favorites" />
      </Tabs.Panel>
      <Tabs.Panel value="clear">
        <p>クリア</p>
        <StatusGameCards status="clear" />
      </Tabs.Panel>
      <Tabs.Panel value="playing">
        <p>プレイ中</p>
        <StatusGameCards status="playing" />
      </Tabs.Panel>
      <Tabs.Panel value="unplaying">
        <p>積みゲー</p>
        <StatusGameCards status="unplaying" />
      </Tabs.Panel>
    </Tabs>
  );
};

export default GameStatusHeader;

import { Tabs } from "@mantine/core";
import StatusGameCards from "features/management/components/StatusGameCards";
import { useState } from "react";

const GameStatusHeader = () => {
  const [activeTab, setActiveTab] = useState<string | null>("unplaying");
  return (
    <Tabs value={activeTab} onTabChange={setActiveTab} className="my-4">
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
        <StatusGameCards />
      </Tabs.Panel>
      <Tabs.Panel value="clear">
        <p>クリア</p>
        <StatusGameCards />
      </Tabs.Panel>
      <Tabs.Panel value="playing">
        <p>プレイ中</p>
        <StatusGameCards />
      </Tabs.Panel>
      <Tabs.Panel value="unplaying">
        <p>積みゲー</p>
        <StatusGameCards />
      </Tabs.Panel>
    </Tabs>
  );
};

export default GameStatusHeader;

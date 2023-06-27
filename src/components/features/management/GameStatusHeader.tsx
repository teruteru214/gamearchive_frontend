import { Tabs } from "@mantine/core";

const GameStatusHeader = () => {
  return (
    <Tabs color="yellow" defaultValue="unplaying" className="my-4">
      <Tabs.List>
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
        <Tabs.Tab
          value="favorites"
          className="text-xs font-semibold sm:text-base"
        >
          お気に入り
        </Tabs.Tab>
      </Tabs.List>
    </Tabs>
  );
};

export default GameStatusHeader;

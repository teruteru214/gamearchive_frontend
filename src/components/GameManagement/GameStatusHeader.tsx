import { Tabs } from "@mantine/core";

const StatusGameCardsHeader = () => {
  return (
    <Tabs color="yellow" defaultValue="unplaying">
      <Tabs.List>
        <Tabs.Tab value="clear" className="font-semibold">
          クリア
        </Tabs.Tab>
        <Tabs.Tab value="playing" className="font-semibold">
          プレイ中
        </Tabs.Tab>
        <Tabs.Tab value="unplaying" className="font-semibold">
          積みゲー
        </Tabs.Tab>
        <Tabs.Tab value="favorites" className="font-semibold">
          お気に入り
        </Tabs.Tab>
      </Tabs.List>
    </Tabs>
  );
};

export default StatusGameCardsHeader;

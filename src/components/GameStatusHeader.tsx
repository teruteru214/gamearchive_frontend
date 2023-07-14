import { Tabs } from "@mantine/core";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const GameStatusHeader = () => {
  const navigate = useNavigate();
  const { status } = useParams();
  const [currentTab, setCurrentTab] = useState(status || "unplaying");

  useEffect(() => {
    setCurrentTab(status || "unplaying");
  }, [status]);

  const changeTab = (tabValue: string) => {
    navigate(`/management/${tabValue}`);
  };

  return (
    <Tabs value={currentTab} className="my-4" onTabChange={changeTab}>
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

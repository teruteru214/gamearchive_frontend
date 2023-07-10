import { IconDisc } from "@tabler/icons-react";
import HeroContents from "components/HeroContents";

import GameSearch from "./GameSearch";

const GameAcquisition = () => {
  return (
    <>
      <HeroContents
        IconComponent={<IconDisc size="3rem" stroke={1.5} />}
        title="ゲームを取得"
      />
      <GameSearch />
    </>
  );
};

export default GameAcquisition;

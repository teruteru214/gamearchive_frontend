import { Container } from "@mantine/core";
import { IconReplace } from "@tabler/icons-react";
import HeroContents from "components/HeroContents";

import Profile from "../../../components/Profile";
import GameStatusHeader from "../components/GameStatusHeader";
import GameManagementControls from "./GameManagementControls";

const GameManagement = () => {
  return (
    <>
      <HeroContents
        IconComponent={<IconReplace size="3rem" stroke={1.5} />}
        title="ゲームマネジメント"
      />
      <Container>
        <Profile />
        <GameManagementControls />
        <GameStatusHeader />
      </Container>
    </>
  );
};

export default GameManagement;

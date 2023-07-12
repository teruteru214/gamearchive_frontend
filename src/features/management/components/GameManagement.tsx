import { Button, Container } from "@mantine/core";
import { IconDisc, IconReplace } from "@tabler/icons-react";
import HeroContents from "components/HeroContents";
import { useNavigate } from "react-router-dom";

import Profile from "../../../components/Profile";
import GameManagementField from "./GameManagementField";

const GameManagement = () => {
  const navigate = useNavigate();

  return (
    <>
      <HeroContents
        IconComponent={<IconReplace size="3rem" stroke={1.5} />}
        title="ゲームマネジメント"
      />
      <Container>
        <Profile />
        <div className="flex justify-center">
          <Button onClick={() => navigate("/acquisition")}>
            <IconDisc size="0.9rem" stroke={1.5} className="mr-1" />
            ゲームを追加する
          </Button>
        </div>
        <GameManagementField />
      </Container>
    </>
  );
};

export default GameManagement;

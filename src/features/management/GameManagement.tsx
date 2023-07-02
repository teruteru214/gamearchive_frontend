import { Button, Container } from "@mantine/core";
import { IconDisc } from "@tabler/icons-react";

import Profile from "../../components/Profile";
import GameManagementField from "./GameManagementField";
import HeroContents from "./HeroContents";

const userProfileData = {
  name: "ダニエル",
  avatar: "https://unsplash.com/ja/%E5%86%99%E7%9C%9F/ZHvM3XIOHoE",
  introduction: "Hello! I'm a game enthusiast.",
  twitterUsername: "UserTwitter",
};

const GameManagement = () => {
  return (
    <>
      <HeroContents />
      <Container>
        <Profile {...userProfileData} />
        <div className="flex justify-center">
          <Button>
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

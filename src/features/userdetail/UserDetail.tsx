import { Container } from "@mantine/core";
import Profile from "components/Profile";

import GamesList from "./GamesList";
import HeroContents from "./HeroContents";

const userProfileData = {
  name: "ダニエル",
  avatar: "https://unsplash.com/ja/%E5%86%99%E7%9C%9F/ZHvM3XIOHoE",
  description: "Hello! I'm a game enthusiast.",
  twitterUsername: "UserTwitter",
};

const UserDetail = () => {
  return (
    <>
      <HeroContents />
      <Container>
        <Profile {...userProfileData} />
        <GamesList />
      </Container>
    </>
  );
};

export default UserDetail;

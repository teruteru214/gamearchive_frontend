import { Container } from "@mantine/core";
import Profile from "components/Profile";

import GamesList from "./GamesList";
import HeroContents from "./HeroContents";

const UserDetail = () => {
  return (
    <>
      <HeroContents />
      <Container>
        <Profile />
        <GamesList />
      </Container>
    </>
  );
};

export default UserDetail;

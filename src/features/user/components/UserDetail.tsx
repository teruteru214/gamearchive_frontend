import { Container } from "@mantine/core";
import { IconUser } from "@tabler/icons-react";
import HeroContents from "components/HeroContents";
import Profile from "components/Profile";

import GamesList from "./GamesList";

const UserDetail = () => {
  return (
    <>
      <HeroContents
        IconComponent={<IconUser size="3rem" stroke={1.5} />}
        title="プロフィール"
      />
      <Container>
        <Profile />
        <GamesList />
      </Container>
    </>
  );
};

export default UserDetail;

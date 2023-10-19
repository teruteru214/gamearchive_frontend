import { Container } from "@mantine/core";
import { IconBell } from "@tabler/icons-react";
import HeroContents from "components/HeroContents";

import LineSettings from "../components/LineSettings";

const GameNotification = () => {
  return (
    <>
      <HeroContents
        IconComponent={<IconBell size="3rem" stroke={1.5} />}
        title="積みゲー通知設定"
      />
      <Container size="xs" className="my-36">
        <LineSettings />
      </Container>
    </>
  );
};

export default GameNotification;

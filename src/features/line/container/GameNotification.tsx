import { Container } from "@mantine/core";
import { IconBrandLine } from "@tabler/icons-react";
import HeroContents from "components/HeroContents";

import LineSettings from "../components/LineSettings";

const GameNotification = () => {
  return (
    <>
      <HeroContents
        IconComponent={<IconBrandLine size="3rem" stroke={1.5} />}
        title="Line通知設定"
      />
      <Container className="my-52" size="xs">
        <LineSettings />
      </Container>
    </>
  );
};

export default GameNotification;

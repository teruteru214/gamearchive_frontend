import { Button, Group } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { useMediaQuery } from "lib/mantine/useMediaQuery";
import { useNavigate } from "react-router-dom";

import RefineModal from "../components/RefineModal";

const GameManagementControls = () => {
  const largerThanSm = useMediaQuery("sm");
  const navigate = useNavigate();
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <div className="flex justify-center">
      <Group position="center">
        <Button
          onClick={() => navigate("/acquisition")}
          size="xs"
          className="w-52"
          variant="light"
        >
          ゲームを追加する
        </Button>
        <Button size="xs" className="w-52" onClick={open} variant="light">
          ジャンルとゲーム機体で絞り込む
        </Button>
        <Button size="xs" className="w-52" variant="light">
          評価が高い順に並べる
        </Button>
        <Button size="xs" className="w-52" variant="light">
          評価が低い順に並べる
        </Button>
        <RefineModal opened={opened} onClose={close} />
      </Group>
    </div>
  );
};

export default GameManagementControls;

import { Button, Group, Title } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { useAtom } from "jotai";
import { useNavigate } from "react-router-dom";

import { sortOrderAtom } from "../atoms/index";
import RefineModal from "../components/RefineModal";

const GameManagementControls = () => {
  const navigate = useNavigate();
  const [opened, { open, close }] = useDisclosure(false);
  const [, setSortOrder] = useAtom(sortOrderAtom);

  return (
    <>
      <Title order={4} className="mb-5" align="center">
        絞り込み or 並べ替え
      </Title>
      <div className="flex justify-center">
        <Group position="center">
          <Button
            onClick={() => navigate("/acquisition")}
            size="xs"
            className="w-52"
            variant="light"
            radius="lg"
          >
            ゲームを追加する
          </Button>
          <Button
            size="xs"
            className="w-52"
            onClick={open}
            variant="light"
            radius="lg"
          >
            ジャンルとゲーム機体で絞り込む
          </Button>
          <Button
            size="xs"
            className="w-52"
            variant="light"
            radius="lg"
            onClick={() => setSortOrder("descending")}
          >
            評価が高い順に並べる
          </Button>
          <Button
            size="xs"
            className="w-52"
            variant="light"
            radius="lg"
            onClick={() => setSortOrder("ascending")}
          >
            評価が低い順に並べる
          </Button>
          <RefineModal opened={opened} onClose={close} />
        </Group>
      </div>
    </>
  );
};

export default GameManagementControls;

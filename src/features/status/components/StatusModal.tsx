import { Button, Modal, Select, Stack, Text } from "@mantine/core";
import { GameAcquisition } from "features/acquisition/types";
import { FC } from "react";

type StatusModalProps = {
  opened: boolean;
  onClose: () => void;
  game: GameAcquisition;
};

const StatusModal: FC<StatusModalProps> = ({ opened, onClose, game }) => {
  return (
    <Modal opened={opened} onClose={onClose} centered size="sm">
      <Stack className="flex items-center justify-center space-y-4 pb-16">
        <Text size="lg">ゲームステータスを入力</Text>
        <Select
          placeholder="ゲームステータスを選択"
          data={[
            { value: "1", label: "クリア" },
            { value: "2", label: "プレイ中" },
            { value: "3", label: "積みゲー" },
          ]}
        />
        <Button>ゲームを取得する</Button>
      </Stack>
    </Modal>
  );
};

export default StatusModal;

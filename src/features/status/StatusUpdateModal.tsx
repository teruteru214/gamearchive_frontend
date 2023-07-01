import { Button, Modal, Select, Stack, Text } from "@mantine/core";
import { FC } from "react";

type StatusUpdateModalProps = {
  opened: boolean;
  onClose: () => void;
};

const StatusUpdateModal: FC<StatusUpdateModalProps> = ({ opened, onClose }) => (
  <Modal opened={opened} onClose={onClose} centered size="sm">
    <Stack className="flex items-center justify-center space-y-4 pb-16">
      <Text size="lg">ゲームステータスを変更</Text>
      <Select
        placeholder="積みゲー"
        data={[
          { value: "1", label: "クリア" },
          { value: "2", label: "プレイ中" },
          { value: "3", label: "積みゲー" },
        ]}
      />
      <div className="flex">
        <Button className="mr-20" color="yellow">
          更新
        </Button>
        <Button color="red">削除</Button>
      </div>
    </Stack>
  </Modal>
);

export default StatusUpdateModal;

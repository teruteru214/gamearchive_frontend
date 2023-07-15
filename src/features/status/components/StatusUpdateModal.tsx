import { Button, Modal, Select, Stack, Text } from "@mantine/core";
import { FC, useState } from "react";
import { GameCard, GameStatus } from "types/game";

type StatusUpdateModalProps = {
  opened: boolean;
  onClose: () => void;
  gameData: GameCard;
};

const StatusUpdateModal: FC<StatusUpdateModalProps> = ({
  gameData,
  opened,
  onClose,
}) => {
  const [selectedStatus, setSelectedStatus] = useState(
    gameData.gameStatus.status
  ); // 初期値を現在のステータスで設定

  const handleUpdate = () => {
    gameData.gameStatus.status = selectedStatus;
    console.log(gameData); // gameDataの値をコンソールに出力
  };

  return (
    <Modal opened={opened} onClose={onClose} centered size="sm">
      <Stack className="flex items-center justify-center space-y-4 pb-16">
        <Text size="lg">ゲームステータスを変更</Text>
        <Select
          value={selectedStatus}
          onChange={(value) => value && setSelectedStatus(value as GameStatus)} // valueがnullでない場合だけ状態を更新
          data={[
            { value: "unplaying", label: "積みゲー" },
            { value: "playing", label: "プレイ中" },
            { value: "clear", label: "クリア" },
          ]}
        />
        <div className="flex">
          <Button className="mr-20" onClick={handleUpdate}>
            更新
          </Button>
          <Button color="red">削除</Button>
        </div>
      </Stack>
    </Modal>
  );
};

export default StatusUpdateModal;

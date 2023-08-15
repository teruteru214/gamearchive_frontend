import { Button, Modal, Select, Stack, Text } from "@mantine/core";
import { GameCard, GameStatus } from "features/management/types";
import { getAuth } from "firebase/auth";
import { FC, useState } from "react";

import { updateGameStatus } from "../api/updateGameStatus";

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
    gameData.game_status.status
  ); // 初期値を現在のステータスで設定

  const handleUpdate = async () => {
    const auth = getAuth();
    const idToken = await auth.currentUser?.getIdToken(true);

    const config = {
      headers: {
        authorization: `Bearer ${idToken}`,
      },
    };

    try {
      const updatedGameStatus = await updateGameStatus(
        gameData.game_status.id,
        selectedStatus,
        config
      );
      console.log(updatedGameStatus); // updatedGameStatusの値をコンソールに出力
      gameData.game_status.status = selectedStatus;
    } catch (error) {
      console.error(error);
    }
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
          <Button className="mr-4" onClick={handleUpdate}>
            更新
          </Button>
          <Button className="mr-4" onClick={handleUpdate}>
            お気に入り登録
          </Button>
          <Button color="red">削除</Button>
        </div>
      </Stack>
    </Modal>
  );
};

export default StatusUpdateModal;

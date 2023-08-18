import {
  Button,
  Image,
  Modal,
  Select,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import { IconTrash } from "@tabler/icons-react";
import { GameCard, GameStatus } from "features/management/types";
import { getAuth } from "firebase/auth";
import { FC, useState } from "react";

import { updateGameStatus } from "../api/updateGameStatus";

type StatusUpdateModalProps = {
  opened: boolean;
  onClose: () => void;
  gameItem: GameCard;
  defaultImage: string;
};

const StatusUpdateModal: FC<StatusUpdateModalProps> = ({
  gameItem,
  opened,
  onClose,
  defaultImage,
}) => {
  const [selectedStatus, setSelectedStatus] = useState(
    gameItem.game_status.status
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
        gameItem.game_status.id,
        selectedStatus,
        config
      );
      gameItem.game_status.status = selectedStatus;
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Modal opened={opened} onClose={onClose} centered size="sm">
      <Stack className="flex items-center justify-center space-y-4 pb-16">
        <Title order={4}>ゲームステータスを選択してください</Title>
        <Text className="text-center">{gameItem.title}</Text>
        <Image
          src={gameItem.cover ? gameItem.cover : defaultImage}
          width={140}
          radius="sm"
        />
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
          <Button className="mr-4 w-24" onClick={handleUpdate}>
            更新
          </Button>
          <Button color="red" className="w-24">
            <IconTrash size="1.1rem" stroke={1.5} className="mr-1" />
            削除
          </Button>
        </div>
      </Stack>
    </Modal>
  );
};

export default StatusUpdateModal;

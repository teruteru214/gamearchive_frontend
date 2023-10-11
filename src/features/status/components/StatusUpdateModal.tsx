import { Button, Image, Modal, Select, Title } from "@mantine/core";
import { notifications } from "@mantine/notifications";
import { gamesAtom } from "atoms/games/gameManagement";
import { confettiDisplayAtom } from "atoms/ui";
import { GameCard, GameStatus } from "features/management/types";
import { getAuth } from "firebase/auth";
import { useAtom } from "jotai";
import { FC, useState } from "react";

import { useMutateGameStatus } from "../hooks/useMutateGameStatus";

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
  );
  const [loading, setLoading] = useState(false);
  const { updateStatusMutation } = useMutateGameStatus();
  const [games, setGames] = useAtom(gamesAtom);
  const [, setShowConfetti] = useAtom(confettiDisplayAtom);

  const handleUpdate = async () => {
    setLoading(true);
    const auth = getAuth();
    const idToken = await auth.currentUser?.getIdToken(true);

    const config = {
      headers: {
        authorization: `Bearer ${idToken}`,
      },
    };

    try {
      await updateStatusMutation.mutateAsync({
        gameStatusId: gameItem.game_status.id,
        newStatus: selectedStatus,
        config,
      });
      gameItem.game_status.status = selectedStatus;
      onClose();
      notifications.show({
        title: "Success",
        message: `${gameItem.title}のプレイ状況を変更しました！`,
        color: "green",
      });
      const updatedGames = games.map((game) =>
        game.id === gameItem.id
          ? {
              ...game,
              game_status: { ...game.game_status, status: selectedStatus },
            }
          : game
      );
      setGames(updatedGames);
      if (selectedStatus === "clear") {
        setShowConfetti(true);
        setTimeout(() => setShowConfetti(false), 7000);
      }
    } catch (error) {
      notifications.show({
        title: "Error",
        message: `${gameItem.title}のプレイ状況の変更に失敗しました`,
        color: "red",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal opened={opened} onClose={onClose} centered size="sm">
      <div className="flex flex-col items-center justify-center space-y-4">
        <Title order={5}>ゲームステータスを選択してください</Title>
        <Image
          src={gameItem.cover ? gameItem.cover : defaultImage}
          width={200}
          radius="sm"
        />
        <Title order={5} className="text-center">
          {gameItem.title}
        </Title>
        <Select
          value={selectedStatus}
          onChange={(value) => value && setSelectedStatus(value as GameStatus)}
          data={[
            { value: "unplaying", label: "積みゲー" },
            { value: "playing", label: "プレイ中" },
            { value: "clear", label: "クリア" },
          ]}
          className="w-52"
        />
        <Button className="w-52" onClick={handleUpdate} loading={loading}>
          プレイ状況を更新
        </Button>
      </div>
    </Modal>
  );
};

export default StatusUpdateModal;

import { Button, Image, Modal, Stack, Title } from "@mantine/core";
import { notifications } from "@mantine/notifications";
import { GameCard } from "features/management/types";
import { getAuth } from "firebase/auth";
import { useState } from "react";

import { useMutateGameDelete } from "../hooks/useMutateGameDelete";

type DeleteModalProps = {
  opened: boolean;
  onClose: () => void;
  gameItem: GameCard;
  defaultImage: string;
};

const DeleteModal = ({
  gameItem,
  opened,
  onClose,
  defaultImage,
}: DeleteModalProps) => {
  const [loading, setLoading] = useState(false);
  const { deleteGameMutation } = useMutateGameDelete();

  const handleDelete = async () => {
    setLoading(true);
    try {
      const auth = getAuth();
      const idToken = await auth.currentUser?.getIdToken(true);
      const config = {
        headers: {
          authorization: `Bearer ${idToken}`,
        },
      };
      await deleteGameMutation.mutateAsync({
        gameId: gameItem.id,
        config,
      });
      notifications.show({
        title: "Success",
        message: "ゲームの削除に成功しました!",
        color: "green",
      });
      onClose();
    } catch (error) {
      notifications.show({
        title: "Error",
        message: "ゲームの削除に失敗しました",
        color: "red",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Modal opened={opened} onClose={onClose} centered size="sm">
        <Stack className="flex flex-col items-center justify-center space-y-4">
          <Title order={5}>本当にゲームを削除しますか？</Title>
          <Image
            src={gameItem.cover ? gameItem.cover : defaultImage}
            width={200}
            radius="sm"
          />
          <Title order={5} className="text-center">
            {gameItem.title}
          </Title>
          <Button
            className="w-52"
            color="red"
            onClick={handleDelete}
            loading={loading}
          >
            ゲームを削除
          </Button>
        </Stack>
      </Modal>
    </>
  );
};

export default DeleteModal;

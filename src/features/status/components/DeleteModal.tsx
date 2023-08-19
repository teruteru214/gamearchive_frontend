import { Button, Image, Modal, Stack, Text, Title } from "@mantine/core";
import { GameCard } from "features/management/types";
import { getAuth } from "firebase/auth";

import { deleteGame } from "../api/deleteGame";

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
  const handleDelete = async () => {
    try {
      const auth = getAuth();
      const idToken = await auth.currentUser?.getIdToken(true);
      const config = {
        headers: {
          authorization: `Bearer ${idToken}`,
        },
      };
      await deleteGame(gameItem.id, config);
      alert("Game deleted successfully.");
      onClose();
    } catch (error) {
      alert("Failed to delete the game.");
    }
  };

  return (
    <>
      <Modal opened={opened} onClose={onClose} centered size="sm">
        <Stack className="flex flex-col items-center justify-center space-y-4 pb-14">
          <Title order={4}>本当にゲームを削除しますか？</Title>
          <Text className="text-center">{gameItem.title}</Text>
          <Image
            src={gameItem.cover ? gameItem.cover : defaultImage}
            width={140}
            radius="sm"
          />
          <Button className="w-36" color="red" onClick={handleDelete}>
            ゲームを削除
          </Button>
        </Stack>
      </Modal>
    </>
  );
};

export default DeleteModal;

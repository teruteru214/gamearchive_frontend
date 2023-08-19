import { Button, Image, Modal, Stack, Text, Title } from "@mantine/core";
import { GameCard } from "features/management/types";

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
          <Button className="w-36" color="red">
            ゲームを削除
          </Button>
        </Stack>
      </Modal>
    </>
  );
};

export default DeleteModal;

import { Button, Divider, Modal, Text } from "@mantine/core";
import { FC } from "react";

type RefineModalProps = {
  opened: boolean;
  onClose: () => void;
};

const RefineModal: FC<RefineModalProps> = ({ opened, onClose }) => {
  const buttonsArray = new Array(30).fill(null);

  return (
    <Modal opened={opened} onClose={onClose} size="sm">
      <Text>ジャンルで絞る</Text>
      <Divider my="sm" />
      {buttonsArray.map((_, index) => (
        <Button
          key={`genres-${index}`}
          radius="lg"
          size="xs"
          compact
          className="mr-1"
          variant="outline"
        >
          genres
        </Button>
      ))}
      <Divider my="sm" />
      <Text>プラットフォームで絞る</Text>
      <Divider my="sm" />
      {buttonsArray.map((_, index) => (
        <Button
          key={`platform-${index}`}
          radius="lg"
          size="xs"
          compact
          className="mr-1"
          variant="outline"
        >
          platform
        </Button>
      ))}
    </Modal>
  );
};

export default RefineModal;

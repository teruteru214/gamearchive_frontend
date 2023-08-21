import { Button, Divider, Modal, Text } from "@mantine/core";
import { FC } from "react";

import { GameCard } from "../types";
import { extractUniqueGenresAndPlatforms } from "../utils";

type RefineModalProps = {
  opened: boolean;
  onClose: () => void;
  gameItems: GameCard[];
};

const RefineModal: FC<RefineModalProps> = ({ opened, onClose, gameItems }) => {
  const { genres, platforms } = extractUniqueGenresAndPlatforms(gameItems);

  return (
    <Modal opened={opened} onClose={onClose} size="sm">
      <Text>ジャンルで絞る</Text>
      <Divider my="sm" />
      {genres.map((genre, index) => (
        <Button
          key={`genres-${index}`}
          radius="lg"
          size="xs"
          compact
          className="mr-1"
          variant="outline"
        >
          {genre}
        </Button>
      ))}
      <Divider my="sm" />
      <Text>プラットフォームで絞る</Text>
      <Divider my="sm" />
      {platforms.map((platform, index) => (
        <Button
          key={`platform-${index}`}
          radius="lg"
          size="xs"
          compact
          className="mr-1"
          variant="outline"
        >
          {platform}
        </Button>
      ))}
    </Modal>
  );
};

export default RefineModal;

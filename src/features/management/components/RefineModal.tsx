import { Button, Divider, Modal, Title } from "@mantine/core";
import { useAtom } from "jotai";
import { FC } from "react";

import { selectedGenresAtom, selectedPlatformsAtom } from "../atoms";
import { GameCard } from "../types";
import { extractUniqueGenresAndPlatforms } from "../utils";

type RefineModalProps = {
  opened: boolean;
  onClose: () => void;
  gameItems: GameCard[];
};

const RefineModal: FC<RefineModalProps> = ({ opened, onClose, gameItems }) => {
  const { genres, platforms } = extractUniqueGenresAndPlatforms(gameItems);
  const [selectedGenres, setSelectedGenres] = useAtom(selectedGenresAtom);
  const [selectedPlatforms, setSelectedPlatforms] = useAtom(
    selectedPlatformsAtom
  );

  const handleGenreClick = (genre: string) => {
    setSelectedGenres((prev) =>
      prev.includes(genre) ? prev.filter((g) => g !== genre) : [...prev, genre]
    );
  };

  const handlePlatformClick = (platform: string) => {
    setSelectedPlatforms((prev) =>
      prev.includes(platform)
        ? prev.filter((p) => p !== platform)
        : [...prev, platform]
    );
  };

  return (
    <Modal opened={opened} onClose={onClose} size="sm">
      <Title order={5}>ゲームジャンルで絞る</Title>
      <Divider my="sm" />
      {genres.map((genre, index) => (
        <Button
          key={`genres-${index}`}
          radius="lg"
          size="xs"
          compact
          className="mr-1"
          variant={selectedGenres.includes(genre) ? "filled" : "outline"}
          onClick={() => handleGenreClick(genre)}
        >
          {genre}
        </Button>
      ))}
      <Title order={5} className="mt-5">
        ゲーム機体で絞る
      </Title>
      <Divider my="sm" />
      {platforms.map((platform, index) => (
        <Button
          key={`platform-${index}`}
          radius="lg"
          size="xs"
          compact
          className="mr-1"
          variant={selectedPlatforms.includes(platform) ? "filled" : "outline"}
          onClick={() => handlePlatformClick(platform)}
        >
          {platform}
        </Button>
      ))}
    </Modal>
  );
};

export default RefineModal;

import { Button, Divider, Drawer, Space, Stack, Title } from "@mantine/core";
import { useAtom } from "jotai";
import { useNavigate } from "react-router-dom";

import {
  selectedGenresAtom,
  selectedPlatformsAtom,
  sortOrderAtom,
} from "../atoms";
import { GameCard } from "../types";
import { extractUniqueGenresAndPlatforms } from "../utils";

interface GameSettingDrawerProps {
  opened: boolean;
  onClose: () => void;
  gameItems: GameCard[];
}

const GameSettingDrawer = ({
  opened,
  onClose,
  gameItems,
}: GameSettingDrawerProps) => {
  const navigate = useNavigate();
  const [sortOrder, setSortOrder] = useAtom(sortOrderAtom);

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
    <Drawer opened={opened} onClose={onClose} size="xs">
      <Title order={4}>ゲームの追加</Title>
      <Button
        onClick={() => navigate("/acquisition")}
        size="xs"
        className="mt-1 w-52"
        variant="light"
        radius="lg"
      >
        ゲームを追加する
      </Button>
      <Space h="md" />
      <Title order={4}>ゲームステータスの切り替え</Title>
      <Stack spacing="xs">
        <Button
          onClick={() => navigate("/management/favorites")}
          size="xs"
          className="mt-1 w-52"
          variant="light"
          radius="lg"
        >
          お気に入りのゲームを表示
        </Button>
        <Button
          onClick={() => navigate("/management/clear")}
          size="xs"
          className="w-52"
          variant="light"
          radius="lg"
        >
          クリアしたゲームを表示
        </Button>
        <Button
          onClick={() => navigate("/management/playing")}
          size="xs"
          className="w-52"
          variant="light"
          radius="lg"
        >
          プレイしたゲームの表示
        </Button>
        <Button
          onClick={() => navigate("/management/unplaying")}
          size="xs"
          className="w-52"
          variant="light"
          radius="lg"
        >
          積みゲーを表示
        </Button>
      </Stack>
      <Space h="md" />
      <Title order={4}>ゲームソート機能</Title>
      <Stack spacing="xs">
        <Button
          size="xs"
          className="mt-1 w-52"
          variant={sortOrder === "descending" ? "filled" : "outline"}
          radius="lg"
          onClick={() => setSortOrder("descending")}
          color="red"
        >
          評価が高い順に並べる
        </Button>
        <Button
          size="xs"
          className="w-52"
          variant={sortOrder === "ascending" ? "filled" : "outline"}
          radius="lg"
          onClick={() => setSortOrder("ascending")}
          color="blue"
        >
          評価が低い順に並べる
        </Button>
      </Stack>
      <Space h="md" />
      <Title order={4}>ジャンルで絞りこむ</Title>
      <Divider className="my-1" />
      {genres.map((genre, index) => (
        <Button
          key={`genres-${index}`}
          radius="lg"
          size="xs"
          compact
          variant={selectedGenres.includes(genre) ? "filled" : "outline"}
          onClick={() => handleGenreClick(genre)}
          className="mr-1"
        >
          {genre}
        </Button>
      ))}
      <Space h="md" />
      <Title order={4}>プラットフォームで絞りこむ</Title>
      <Divider className="my-1" />
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
    </Drawer>
  );
};

export default GameSettingDrawer;

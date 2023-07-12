import { ActionIcon, TextInput } from "@mantine/core";
import { IconClick, IconSearch } from "@tabler/icons-react";
import { gameResultsAtom } from "atoms/games/gameAcquisition";
import { useAtom } from "jotai";
import { acquisitionGameAPI } from "test/handlers/acquisitionGames";

const SearchInputButton = () => {
  // const [searchQuery, setSearchQuery] = useAtom(searchQueryAtom);
  const [, setGameResults] = useAtom(gameResultsAtom);

  const handleSearch = async () => {
    const results = await acquisitionGameAPI.getALLAcquisitionGames();
    setGameResults(results);
  };

  return (
    <div className="py-4">
      <TextInput
        icon={<IconSearch size="1.1rem" stroke={1.5} />}
        radius="xl"
        size="md"
        rightSection={
          <ActionIcon
            size={32}
            radius="xl"
            variant="filled"
            color="yellow"
            onClick={handleSearch} // クリックイベントに検索を結びつけます
          >
            <IconClick size="1.1rem" stroke={1.5} />
          </ActionIcon>
        }
        placeholder="ゲームの名前を入力してください"
        rightSectionWidth={42}
      />
      <p className="text-xs text-gray-400">
        *目的のゲームが出てこない時、英語でも検索してみてください
      </p>
    </div>
  );
};

export default SearchInputButton;

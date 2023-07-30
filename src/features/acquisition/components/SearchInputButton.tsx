import { ActionIcon, TextInput } from "@mantine/core";
import { IconPointerSearch, IconSearch } from "@tabler/icons-react";
import { gameResultsAtom, searchQueryAtom } from "atoms/games/gameAcquisition";
import { useAtom } from "jotai";

import { searchGames } from "../api/searchGames";

const SearchInputButton = () => {
  const [searchQuery, setSearchQuery] = useAtom(searchQueryAtom);
  const [, setGameResults] = useAtom(gameResultsAtom);

  const handleSearch = async () => {
    try {
      await searchGames(searchQuery, setGameResults);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="py-4">
      <TextInput
        icon={<IconSearch size="1.1rem" stroke={1.5} />}
        radius="xl"
        size="md"
        value={searchQuery || ""} // added this
        onChange={(e) => setSearchQuery(e.target.value)} // added this
        rightSection={
          <ActionIcon
            size={32}
            radius="xl"
            variant="filled"
            color="yellow"
            onClick={handleSearch}
          >
            <IconPointerSearch size="1.1rem" stroke={1.5} />
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

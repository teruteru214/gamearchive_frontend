import { ActionIcon, TextInput } from "@mantine/core";
import { IconPointerSearch, IconSearch } from "@tabler/icons-react";
import { gameResultsAtom, searchQueryAtom } from "atoms/games/gameAcquisition";
import { useAtom } from "jotai";
import { useState } from "react";
import { z } from "zod";

import { searchGames } from "../api/searchGames";

const SearchInputButton = () => {
  const [searchQuery, setSearchQuery] = useAtom(searchQueryAtom);
  const [, setGameResults] = useAtom(gameResultsAtom);
  const [error, setError] = useState<string | null>(null);

  const searchQuerySchema = z
    .string()
    .nonempty({ message: "*ゲーム名を入力してください" });

  const handleSearch = async () => {
    try {
      searchQuerySchema.parse(searchQuery);
      setError(null);
      await searchGames(searchQuery, setGameResults);
    } catch (error) {
      if (error instanceof z.ZodError) {
        setError(error.errors[0].message);
      } else {
        console.error(error);
      }
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
        rightSectionWidth={42}
        error={error}
      />
      <p className="text-xs text-gray-400">
        *目的のゲームが出てこない時、英語でも検索してみてください
      </p>
    </div>
  );
};

export default SearchInputButton;

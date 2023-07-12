import { ActionIcon, TextInput } from "@mantine/core";
import { IconClick, IconSearch } from "@tabler/icons-react";

const SearchInputButton = () => {
  // const [searchQuery, setSearchQuery] = useAtom(searchQueryState);

  const handleSearch = async () => {
    // 検索クエリを使ってAPIからデータを取得
    // const results = await fetchFromIGDB(searchQuery);
    // 取得したデータを状態に反映 (ここで適切な状態を設定します)
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

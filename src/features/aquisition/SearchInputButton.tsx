import { ActionIcon, TextInput } from "@mantine/core";
import { IconClick, IconSearch } from "@tabler/icons-react";

const SearchInputButton = () => {
  return (
    <div className="py-4">
      <TextInput
        icon={<IconSearch size="1.1rem" stroke={1.5} />}
        radius="xl"
        size="md"
        rightSection={
          <ActionIcon size={32} radius="xl" color="yellow" variant="filled">
            <IconClick size="1.1rem" stroke={1.5} />
          </ActionIcon>
        }
        placeholder="ゲームの名前を入力してください"
        rightSectionWidth={42}
      />
      <p className="text-xs text-gray-400">
        *日本語でも検索できますが、英語の方が見つかりやすいです
      </p>
    </div>
  );
};

export default SearchInputButton;

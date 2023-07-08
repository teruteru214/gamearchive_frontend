// src/features/components/SearchInput.tsx
import { TextInput } from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";
import { filterInputAtom } from "atoms/user/userInfoAtom";
import { useAtom } from "jotai";

const SearchInput = () => {
  const [filterInput, setFilterInput] = useAtom(filterInputAtom);

  return (
    <TextInput
      icon={<IconSearch size={18} stroke={1.5} />}
      radius="lg"
      size="sm"
      placeholder="キーワードを入力..."
      value={filterInput}
      onChange={(e) => setFilterInput(e.target.value)}
      className="py-8"
    />
  );
};

export default SearchInput;

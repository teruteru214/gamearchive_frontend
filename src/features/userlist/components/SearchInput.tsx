// src/features/components/SearchInput.tsx
import { TextInput } from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";
import { useAtom } from "jotai";

import { filterInputAtom } from "../atoms/user";

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

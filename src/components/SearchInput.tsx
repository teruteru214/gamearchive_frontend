import { TextInput } from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";
import { Dispatch, SetStateAction } from "react";

type SearchInputProps = {
  filterInput: string;
  setFilterInput: Dispatch<SetStateAction<string>>;
};

const SearchInput = ({ filterInput, setFilterInput }: SearchInputProps) => {
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

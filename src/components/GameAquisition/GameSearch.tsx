import { Container } from "@mantine/core";
import SearchInput from "components/SearchInput";
import { useState } from "react";

import SearchResult from "./SearchResults";

const GameSearch = () => {
  const [filterInput, setFilterInput] = useState("");
  return (
    <Container>
      <SearchInput filterInput={filterInput} setFilterInput={setFilterInput} />
      <SearchResult />
    </Container>
  );
};

export default GameSearch;

import { Container } from "@mantine/core";

import SearchInputButton from "./SearchInputButton";
import SearchResult from "./SearchResults";

const GameSearch = () => {
  return (
    <Container>
      <SearchInputButton />
      <SearchResult />
    </Container>
  );
};

export default GameSearch;

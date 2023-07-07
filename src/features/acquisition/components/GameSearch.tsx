import { Container } from "@mantine/core";

import SearchInputButton from "./SearchInputButton";
import SearchResults from "./SearchResults";

const GameSearch = () => {
  return (
    <Container>
      <SearchInputButton />
      <SearchResults />
    </Container>
  );
};

export default GameSearch;

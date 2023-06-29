import { Container } from "@mantine/core";
import { useState } from "react";

import HeroContents from "./HeroContents";
import PublicUserList from "./PublicUserList";
import SearchInput from "./SearchInput";

const UserListPage = () => {
  const [filterInput, setFilterInput] = useState("");
  return (
    <>
      <HeroContents />
      <Container>
        <SearchInput
          filterInput={filterInput}
          setFilterInput={setFilterInput}
        />
        <PublicUserList />
      </Container>
    </>
  );
};

export default UserListPage;

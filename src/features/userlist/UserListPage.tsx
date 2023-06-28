import { Container } from "@mantine/core";
import SearchInput from "components/SearchInput";
import { useState } from "react";

import HeroContents from "./HeroContents";
import PublicUserList from "./PublicUserList";

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

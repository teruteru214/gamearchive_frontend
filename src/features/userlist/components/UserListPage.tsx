// src/features/components/UserListPage.tsx
import { Container } from "@mantine/core";

import HeroContents from "./HeroContents";
import PublicUserList from "./PublicUserList";
import SearchInput from "./SearchInput";

const UserListPage = () => {
  return (
    <>
      <HeroContents />
      <Container>
        <SearchInput />
        <PublicUserList />
      </Container>
    </>
  );
};

export default UserListPage;

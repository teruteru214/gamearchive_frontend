// src/features/components/UserListPage.tsx
import { Container } from "@mantine/core";
import { IconUsersGroup } from "@tabler/icons-react";
import HeroContents from "components/HeroContents";

import PublicUserList from "./PublicUserList";
import SearchInput from "./SearchInput";

const UserListPage = () => {
  return (
    <>
      <HeroContents
        IconComponent={<IconUsersGroup size="3rem" stroke={1.5} />}
        title="ユーザー一覧"
      />
      <Container>
        <SearchInput />
        <PublicUserList />
      </Container>
    </>
  );
};

export default UserListPage;

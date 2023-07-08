// src/features/components/PublicUserList.tsx
import { Pagination } from "@mantine/core";
import { useAtom } from "jotai";

import {
  activePageAtom,
  filteredUsersAtom,
  ITEMS_PER_PAGE,
} from "../atoms/user";
import PublicUser from "./PublicUser";

const PublicUserList: React.FC = () => {
  const [filteredUsers] = useAtom(filteredUsersAtom);
  const [activePage, setPage] = useAtom(activePageAtom);

  const startIndex = (activePage - 1) * ITEMS_PER_PAGE;
  // const selectedUsers = filteredUsers.slice(
  //   startIndex,
  //   startIndex + ITEMS_PER_PAGE
  // );

  return (
    <div>
      <div className="flex flex-wrap items-center justify-center gap-4">
        {filteredUsers.map((user, index) => (
          <PublicUser key={index} {...user} />
        ))}
      </div>
      <div className="flex justify-center">
        <Pagination
          total={Math.ceil(filteredUsers.length / ITEMS_PER_PAGE)}
          size="md"
          radius="xs"
          value={activePage}
          onChange={setPage}
        />
      </div>
    </div>
  );
};

export default PublicUserList;

import { Pagination } from "@mantine/core";
import { useState } from "react";

import PublicUser from "./PublicUser";

type User = {
  avatar: string;
  username: string;
};

const ITEMS_PER_PAGE = 28;

const PublicUserList: React.FC = () => {
  const users: User[] = Array.from({ length: 160 }, (_, i) => ({
    avatar:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWgelbHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=250&q=80",
    username: `田中 ${i}`,
  }));

  const [activePage, setPage] = useState(1);

  const startIndex = (activePage - 1) * ITEMS_PER_PAGE;
  const selectedUsers = users.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  return (
    <div>
      <div className="flex flex-wrap items-center justify-center gap-4">
        {selectedUsers.map((user, index) => (
          <PublicUser
            key={index}
            avatar={user.avatar}
            username={user.username}
          />
        ))}
      </div>
      <div className="flex justify-center">
        <Pagination
          total={Math.ceil(users.length / ITEMS_PER_PAGE)}
          color="yellow"
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

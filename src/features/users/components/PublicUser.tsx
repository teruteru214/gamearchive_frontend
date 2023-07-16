import { Avatar } from "@mantine/core";
import React from "react";

type PublicUserProps = {
  avatar: string;
  username: string;
};

const PublicUser: React.FC<PublicUserProps> = ({ avatar, username }) => {
  return (
    <div className="m-2 flex flex-col items-center border-2 border-gray-200 p-2">
      <Avatar variant="filled" radius="xl" size="xl" src={avatar} />
      <p>{username}</p>
    </div>
  );
};

export default PublicUser;

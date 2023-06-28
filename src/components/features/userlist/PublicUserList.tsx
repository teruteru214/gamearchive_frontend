import PublicUser from "./PublicUser";

type User = {
  avatar: string;
  username: string;
};

const PublicUserList: React.FC = () => {
  const users: User[] = Array.from({ length: 30 }, (_, i) => ({
    avatar:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWgelbHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=250&q=80",
    username: `田中 ${i}`,
  }));

  return (
    <div className="flex flex-wrap">
      {users.map((user, index) => (
        <PublicUser key={index} avatar={user.avatar} username={user.username} />
      ))}
    </div>
  );
};

export default PublicUserList;

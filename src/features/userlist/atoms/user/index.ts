// src/jotai/atoms/userAtoms.ts
import { atom } from "jotai";
import { User } from "types/user";

export const filterInputAtom = atom<string>("");
export const activePageAtom = atom<number>(1);
export const ITEMS_PER_PAGE = 28;

export const usersAtom = atom<Array<User>>([
  // {
  //   username: "松本",
  //   avatar: "...",
  //   uid: 12,
  //   introduction: "Introduction of 松本",
  //   twitterUsername: "TwitterUsername_MATSUMOTO",
  //   visibility: 1,
  // },
  // {
  //   username: "田中",
  //   avatar: "...",
  //   uid: 12,
  //   introduction: "Introduction of 田中",
  //   twitterUsername: "tanaka",
  //   visibility: 1,
  // },
]);

export const filteredUsersAtom = atom((get) => {
  const filterInput = get(filterInputAtom).toLowerCase();
  const users = get(usersAtom);

  return users.filter((user) =>
    user.username.toLowerCase().includes(filterInput)
  );
});

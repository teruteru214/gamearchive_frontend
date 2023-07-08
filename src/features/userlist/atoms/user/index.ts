// src/jotai/atoms/userAtoms.ts
import { atom } from "jotai";
import { User } from "types/user";

export const filterInputAtom = atom<string>("");
export const activePageAtom = atom<number>(1);
export const ITEMS_PER_PAGE = 28;

export const usersAtom = atom<Array<User>>([
  {
    username: `松本`,
    avatar:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWgelbHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=250&q=80",
    uid: `UID_MATSUMOTO`,
    introduction: `Introduction of 松本`,
    twitterUsername: `TwitterUsername_MATSUMOTO`,
    visibility: 2,
  },
  {
    username: `田中`,
    avatar:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWgelbHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=250&q=80",
    uid: `UID_TANAKA`,
    introduction: `Introduction of 田中`,
    twitterUsername: `TwitterUsername_TANAKA`,
    visibility: 2,
  },
]);

export const filteredUsersAtom = atom((get) => {
  const filterInput = get(filterInputAtom).toLowerCase();
  const users = get(usersAtom);

  return users.filter((user) =>
    user.username.toLowerCase().includes(filterInput)
  );
});

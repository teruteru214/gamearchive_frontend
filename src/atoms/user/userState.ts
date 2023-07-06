import { atom } from "jotai";

export const userState = atom({
  isLoggedIn: false,
  user: null,
});

import { atom } from "jotai";

export interface UserState {
  authChecked: boolean;
  avatar: string;
  introduction: string;
  nickname: string;
  uid: string;
  twitter_name: string;
  visibility: string;
}

export const loginUserAtom = atom<UserState>({
  authChecked: false,
  avatar: "",
  introduction: "",
  nickname: "",
  uid: "",
  twitter_name: "",
  visibility: "",
});

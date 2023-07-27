import { atom } from "jotai";

export interface UserState {
  apiChecked: boolean;
  authChecked: boolean;
  avatar: string;
  avatarKey: string;
  introduction: string;
  nickname: string;
  uid: string;
  twitter_name: string;
  visibility: string;
}

export const loginUserAtom = atom<UserState>({
  authChecked: false,
  avatar: "",
  avatarKey: "",
  introduction: "",
  nickname: "",
  uid: "",
  twitter_name: "",
  visibility: "",
  apiChecked: false,
});

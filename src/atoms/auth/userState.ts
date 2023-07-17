import { atom } from "jotai";

export interface UserState {
  authChecked: boolean;
  avatar: string;
  introduction: string;
  nickname: string;
  uid: string;
}

// Userの初期状態を定義します
export const userState = atom<UserState>({
  authChecked: false,
  avatar: "",
  introduction: "",
  nickname: "",
  uid: "",
});

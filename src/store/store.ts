import { loginUserAtom } from "atoms/auth/loginUser";
import { createStore } from "jotai";

// Create a store
export const authStore = createStore();
// Setting initial state of userState atom in store
authStore.set(loginUserAtom, {
  authChecked: false,
  avatar: "",
  introduction: "",
  nickname: "",
  uid: "",
  twitter_name: "", // 新しいプロパティを初期化
  visibility: "private",
});

import { userState } from "atoms/auth/userState";
import { createStore } from "jotai";

// Create a store
export const authStore = createStore();
// Setting initial state of userState atom in store
authStore.set(userState, {
  authChecked: false,
  avatar: "",
  introduction: "",
  nickname: "",
  uid: "",
});

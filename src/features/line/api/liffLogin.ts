import liff from "@line/liff";

import { Profile } from "../types";

export const initLiff = async (): Promise<Profile | null> => {
  const liffId = import.meta.env.VITE_APP_LIFF_ID;
  if (liffId) {
    try {
      await liff.init({ liffId });
      const isLogin = liff.isLoggedIn();
      if (isLogin) {
        return await liff.getProfile();
      }
    } catch (err) {
      console.error({ err });
    }
  }
  return null;
};

export const handleLineLogin = async (): Promise<Profile | null> => {
  if (liff.isLoggedIn()) {
    liff.logout();
    return null;
  } else {
    try {
      await liff.login();
      return await liff.getProfile();
    } catch (error) {
      console.error("Login failed: ", error);
      return null;
    }
  }
};

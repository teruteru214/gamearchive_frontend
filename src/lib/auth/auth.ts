import axios from "axios";
import {
  getAdditionalUserInfo,
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { NavigateFunction } from "react-router-dom";

import { postIdToken } from "./../../features/auth/api/postIdToken";

export const signInWithGoogle = (
  setOpened: (flag: boolean) => void,
  navigate: NavigateFunction
) => {
  const auth = getAuth();
  const provider = new GoogleAuthProvider();
  signInWithPopup(auth, provider)
    .then(async (result) => {
      setOpened(false);
      const user = result.user;
      const token = await user.getIdToken();

      const config = {
        headers: { authorization: `Bearer ${token}` },
      };

      try {
        await postIdToken(config);
        if (getAdditionalUserInfo(result)?.isNewUser) {
          navigate("/");
          return;
        }
        navigate("/");
      } catch (err) {
        let message;

        if (axios.isAxiosError(err) && err.response) {
          console.error(err.response.data.message);
        } else {
          message = String(err);
          console.error(message);
        }
      }
      navigate("/management/unplaying");
    })
    .catch((error) => {
      setOpened(false);
      if (error.code === "auth/account-exists-with-different-credential") {
        alert(
          `${error.customData.email}は他のSNSと連携した既存ユーザーが登録済みです。既存ユーザーでログイン後、こちらのSNSとの連携が可能です`
        );
        return;
      }
      alert(`ログイン/新規登録に失敗しました。\n${error.message}`);
    });
};

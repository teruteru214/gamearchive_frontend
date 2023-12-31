import axios from "axios";
import { endpoint } from "config";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

export const signInWithGoogle = (
  close: () => void,
  setIsLoading: (loading: boolean) => void
) => {
  const auth = getAuth();
  const provider = new GoogleAuthProvider();

  setIsLoading(true);
  close();

  signInWithPopup(auth, provider)
    .then(async (result) => {
      setIsLoading(false);

      const user = result.user;
      const token = await user.getIdToken();

      const config = {
        headers: { authorization: `Bearer ${token}` },
      };

      try {
        const res = await axios.post(
          `${endpoint}/authentication`,
          null,
          config
        );

        if (res.status !== 200) {
          throw new Error("login error");
        }
      } catch (err) {
        let message;

        if (axios.isAxiosError(err) && err.response) {
          console.error(err.response.data.message);
        } else {
          message = String(err);
          console.error(message);
        }
      }
    })
    .catch((error) => {
      setIsLoading(false);

      if (error.code === "auth/account-exists-with-different-credential") {
        alert(
          `${error.customData.email}は他のSNSと連携した既存ユーザーが登録済みです。既存ユーザーでログイン後、こちらのSNSとの連携が可能です`
        );
        return;
      }
      alert(`ログイン/新規登録に失敗しました。\n${error.message}`);
    });
};

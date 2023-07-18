import { loginUserAtom } from "atoms/auth/userState";
import {
  getAdditionalUserInfo,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  User,
} from "firebase/auth";
import { useAtomValue, useSetAtom } from "jotai";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const useFirebaseAuth = () => {
  const navigate = useNavigate();
  const currentUser = useAtomValue(loginUserAtom);
  const setUserState = useSetAtom(loginUserAtom);
  const { authChecked } = useAtomValue(loginUserAtom);

  const nextOrObserver = async (authUser: User | null) => {
    if (authUser) {
      setUserState({
        nickname: authUser.displayName || "",
        avatar: authUser.photoURL || "",
        uid: authUser.uid,
        introduction: "",
        twitter_name: "", // 新しいプロパティを初期化
        visibility: "private", // 新しいプロパティを初期化
        authChecked: true,
      });
    } else {
      setUserState({
        avatar: "",
        nickname: "",
        uid: "",
        introduction: "",
        twitter_name: "", // 新しいプロパティを初期化
        visibility: "private", // 新しいプロパティを初期化
        authChecked: false,
      });
    }
  };

  useEffect(() => {
    const auth = getAuth();
    const unSub = onAuthStateChanged(auth, nextOrObserver);
    return () => {
      unSub();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const signInWithGoogle = (setOpened: (flag: boolean) => void) => {
    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        setOpened(false);
        if (getAdditionalUserInfo(result)?.isNewUser) {
          navigate("/onboarding");
          return;
        }
        navigate("/");
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

  const signOut = async () => {
    const auth = getAuth();
    auth.signOut();
    setUserState({
      avatar: "",
      nickname: "",
      uid: "",
      introduction: "",
      twitter_name: "", // 新しいプロパティを初期化
      visibility: "private", // 新しいプロパティを初期化
      authChecked: false,
    });
  };

  return {
    currentUser,
    signInWithGoogle,
    signOut,
    authChecked,
  };
};

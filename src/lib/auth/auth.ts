import { userState } from "atoms/auth/userState";
import { auth, provider } from "firebase";
import {
  getAdditionalUserInfo,
  onAuthStateChanged,
  signInWithPopup,
  User,
} from "firebase/auth";
import { useAtomValue, useSetAtom } from "jotai";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const useFirebaseAuth = () => {
  const navigate = useNavigate();
  const currentUser = useAtomValue(userState);
  const setUserState = useSetAtom(userState);

  const nextOrObserver = async (authUser: User | null) => {
    if (authUser) {
      setUserState({
        nickname: authUser.displayName || "",
        avatar: authUser.photoURL || "",
        uid: authUser.uid,
        introduction: "",
        authChecked: true,
      });
    } else {
      setUserState({
        avatar: "",
        nickname: "",
        uid: "",
        introduction: "",
        authChecked: false,
      });
    }
  };

  useEffect(() => {
    const unSub = onAuthStateChanged(auth, nextOrObserver);
    return () => {
      unSub();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const signInWithGoogle = (setOpened: (flag: boolean) => void) => {
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
    auth.signOut();
    setUserState({
      avatar: "",
      nickname: "",
      uid: "",
      introduction: "",
      authChecked: false,
    });
  };

  return {
    currentUser,
    signInWithGoogle,
    signOut,
  };
};

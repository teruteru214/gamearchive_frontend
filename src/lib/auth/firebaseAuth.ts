import { loginUserAtom } from "atoms/auth/loginUser";
import { getAvatar } from "features/user/api/getAvatar";
import { showProfile } from "features/user/api/showProfile";
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
  const setUserState = useSetAtom(loginUserAtom);
  const currentUser = useAtomValue(loginUserAtom);

  const nextOrObserver = async (authUser: User | null) => {
    if (authUser) {
      const idToken = await authUser.getIdToken();
      const config = {
        headers: {
          authorization: `Bearer ${idToken}`,
        },
      };

      try {
        const user = await showProfile(config);

        const avatarImageUrl = user.data.attributes.avatar_key
          ? await getAvatar(config)
          : authUser.photoURL || "";

        setUserState({
          nickname: user.data.attributes.nickname || "",
          avatar: avatarImageUrl,
          avatarKey: user.data.attributes.avatar_key || "",
          uid: authUser.uid,
          introduction: user.data.attributes.introduction || "",
          twitter_name: user.data.attributes.twitter_name || "",
          visibility: user.data.attributes.visibility || "",
          authChecked: true,
          apiChecked: true,
        });
      } catch (error) {
        const err = error as Error;
        console.error(`Failed to fetch user profile\n${err.message}`);
      }
    } else {
      setUserState({
        nickname: "",
        avatar: "",
        avatarKey: "",
        uid: "",
        introduction: "",
        twitter_name: "",
        visibility: "",
        authChecked: false,
        apiChecked: false,
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
          navigate("/");
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
      nickname: "",
      uid: "",
      avatar: "",
      avatarKey: "",
      introduction: "",
      twitter_name: "",
      visibility: "",
      authChecked: true,
      apiChecked: false,
    });
  };

  return {
    currentUser,
    signInWithGoogle,
    signOut,
    authChecked: currentUser.authChecked,
  };
};

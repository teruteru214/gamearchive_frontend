import liff from "@line/liff";
import { useEffect, useState } from "react";

import { handleLineLogin, initLiff } from "../api/liffLogin";
import { postAccessToken } from "../api/postAccessToken";
import { Profile } from "../types";
import BeforeLogin from "./BeforeLogin";
import LineLoggedIn from "./LineLoggedIn";
import SummaryList from "./SummaryList";

const LineSettings = () => {
  const [isLogin, setLogin] = useState(false);
  const [profile, setProfile] = useState<Profile | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userProfile = await initLiff();
        const accessToken = liff.getAccessToken();
        if (accessToken) {
          await postAccessToken(accessToken);
        }
        setProfile(userProfile);
        setLogin(!!userProfile);
      } catch (e) {
        console.error("An error occurred:", e);
        setLogin(false);
        setProfile(null);
      }
    };

    fetchData();
  }, []);

  const handleLogin = async () => {
    try {
      const userProfile = await handleLineLogin();
      if (userProfile) {
        const accessToken = liff.getAccessToken();
        if (accessToken) {
          await postAccessToken(accessToken);
        }
      }
      setProfile(userProfile);
      setLogin(!!userProfile);
    } catch (e) {
      console.error("An error occurred during login:", e);
      setLogin(false);
      setProfile(null);
    }
  };

  return (
    <>
      {isLogin && profile ? (
        <LineLoggedIn profile={profile} />
      ) : (
        <BeforeLogin handleLineLogin={handleLogin} />
      )}
      <SummaryList />
    </>
  );
};

export default LineSettings;

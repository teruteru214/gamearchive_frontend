import { useEffect, useState } from "react";

import { handleLineLogin, initLiff } from "../api/liffLogin";
import { Profile } from "../types";
import BeforeLogin from "./BeforeLogin";
import LineLoggedIn from "./LineLoggedIn";

const LineSettings = () => {
  const [isLogin, setLogin] = useState(false);
  const [profile, setProfile] = useState<Profile | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const userProfile = await initLiff();
      setProfile(userProfile);
      setLogin(userProfile !== null);
    };
    fetchData();
  }, []);

  const handleLogin = async () => {
    const userProfile = await handleLineLogin();
    setProfile(userProfile);
    setLogin(userProfile !== null);
  };

  return (
    <>
      {isLogin && profile ? (
        <LineLoggedIn profile={profile} />
      ) : (
        <BeforeLogin handleLineLogin={handleLogin} />
      )}
    </>
  );
};

export default LineSettings;

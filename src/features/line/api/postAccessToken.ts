import axios from "axios";
import { endpoint } from "config";
import { getAuth } from "firebase/auth";

export const postAccessToken = async (accessToken: string) => {
  const auth = getAuth();
  const firebaseIdToken = await auth.currentUser?.getIdToken();
  const config = {
    headers: {
      Authorization: `Bearer ${firebaseIdToken}`,
    },
  };

  try {
    const res = await axios.post(
      `${endpoint}/line_settings`,
      { lineAccessToken: accessToken },
      config
    );
    if (res.status !== 200 && res.status !== 201) {
      throw new Error("Failed to post AccessToken");
    }
  } catch (error) {
    console.error("An error occurred while sending the accessToken:", error);
    throw new Error("Failed to send AccessToken");
  }
};

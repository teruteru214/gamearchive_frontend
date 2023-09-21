import axios from "axios";
import { endpoint } from "config";
import { getAuth } from "firebase/auth";

export const postLiffIdToken = async (IdToken: string) => {
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
      { lineIdToken: IdToken },
      config
    );
    if (res.status !== 200) {
      throw new Error("Failed to post IDtoken");
    }
  } catch (error) {
    console.error("An error occurred while sending the Idtoken:", error);
    throw new Error("Failed to send Idtoken");
  }
};

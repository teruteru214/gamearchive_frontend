import axios from "axios";
import { endpoint } from "config";

export const patchProfile = async (
  nickname: string,
  avatar_key: string | null,
  introduction: string,
  twitter_name: string,
  visibility: "private" | "public",
  config: {
    headers: {
      authorization: string;
    };
  }
) => {
  const res = await axios.patch(
    `${endpoint}/profile`,
    {
      nickname: nickname,
      avatar_key: avatar_key,
      introduction: introduction,
      twitter_name: twitter_name,
      visibility: visibility,
    },
    config
  );
  if (res.status !== 200) {
    throw new Error("profile post error");
  }
  return res.data;
};

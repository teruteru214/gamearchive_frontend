import { useQuery } from "@tanstack/react-query";
import axios, { AxiosResponse } from "axios";
import { endpoint } from "config";
import { getAuth } from "firebase/auth";

import { ResponseLineSettingType } from "../types";

export const useQueryLineSetting = () => {
  const getLineSetting = async () => {
    const auth = getAuth();
    const idToken = await auth.currentUser?.getIdToken(true);
    const uid = await auth.currentUser?.uid;
    const config = {
      headers: {
        authorization: `Bearer ${idToken}`,
      },
    };
    const res: AxiosResponse<ResponseLineSettingType> = await axios.get(
      `${endpoint}/line_setting?uid=${uid}`,
      config
    );

    const lineSettingData = res.data.data.attributes;

    const LineSetting = {
      id: lineSettingData.id,
      line_notification: lineSettingData.line_notification,
      stacked_notification_interval:
        lineSettingData.stacked_notification_interval,
    };
    return LineSetting;
  };

  const { status, data } = useQuery({
    queryKey: ["lineSetting"],
    queryFn: getLineSetting,
    staleTime: 0,
    onError: () => alert(`Line設定情報取得に失敗しました。`),
  });

  return {
    data,
    status,
  };
};

import axios from "axios";
import { endpoint } from "config";

import { UpdateLineSettingParams } from "../types";

export const updateLineSetting = async (params: UpdateLineSettingParams) => {
  const response = await axios.put(
    `${endpoint}/line_settings`,
    {
      id: params.id,
      line_notification: params.line_notification,
      stacked_notification_interval: params.stacked_notification_interval,
      favorite_notification_interval: params.favorite_notification_interval,
    },
    params.config
  );
  return response.data;
};

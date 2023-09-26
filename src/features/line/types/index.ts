export interface Profile {
  userId: string;
  displayName: string;
  pictureUrl?: string;
}

export interface LoggedInProps {
  profile: Profile;
}

export interface BeforeLoginProps {
  handleLineLogin: () => void;
}

export type LineSettingType = {
  attributes: {
    id: number;
    line_notification: boolean;
    stacked_notification_interval: number;
    favorite_notification_interval: number;
  };
};

export type ResponseLineSettingType = {
  data: LineSettingType;
};

export interface UpdateLineSettingParams {
  id: number;
  line_notification: boolean;
  stacked_notification_interval: number;
  favorite_notification_interval: number;
  config: { headers: { authorization: string } };
}

export interface UserLineQueryResult {
  data: {
    id: number;
    line_notification: boolean;
    favorite_notification_interval: number;
    stacked_notification_interval: number;
  };
  status: "error" | "success" | "loading";
}

export interface NotificationSettingsProps {
  userId?: number;
  initialIsSwitchOn?: boolean;
  initialStackedValue?: number;
  initialFavoriteValue?: number;
}

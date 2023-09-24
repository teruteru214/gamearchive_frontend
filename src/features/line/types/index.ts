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

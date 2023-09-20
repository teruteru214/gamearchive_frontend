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

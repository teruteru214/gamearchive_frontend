import { IconUserEdit } from "@tabler/icons-react";
import HeroContents from "components/HeroContents";

import ProfileForm from "../components/ProfileForm";

const ProfileEdit = () => {
  return (
    <>
      <HeroContents
        IconComponent={<IconUserEdit size="3rem" stroke={1.5} />}
        title="プロフィール編集"
      />
      <ProfileForm />
    </>
  );
};

export default ProfileEdit;

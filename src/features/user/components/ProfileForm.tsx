import {
  Box,
  Button,
  Container,
  FileButton,
  Group,
  Select,
  Stack,
  Textarea,
  TextInput,
} from "@mantine/core";
import { useForm, zodResolver } from "@mantine/form";
import { showNotification } from "@mantine/notifications";
import { IconCheck } from "@tabler/icons-react";
import { loginUserAtom } from "atoms/auth/loginUser";
import ImagePreview from "features/auth/components/ImagePreview";
import { getAuth } from "firebase/auth";
import { useAtom, useSetAtom } from "jotai";
import { postImage } from "lib/api/postImage";
import { useMediaQuery } from "lib/mantine/useMediaQuery";
import { useCallback, useEffect, useState } from "react";
import { z } from "zod";

import { getAvatar } from "../api/getAvatar";
import { patchProfile } from "../api/patchProfile";

const schema = z.object({
  nickname: z
    .string()
    .trim()
    .min(1, { message: "ニックネームは必須です" })
    .max(40, { message: "ニックネームは40字以内にしてください" }),
  introduction: z
    .string()
    .max(160, { message: "自己紹介は160字以内にしてください" }),
  twitter_name: z.string(),
  visibility: z.string(),
});

type Form = z.infer<typeof schema>;

const ProfileForm = () => {
  const [user] = useAtom(loginUserAtom);
  const largerThanSm = useMediaQuery("sm");
  const form = useForm<Form>({
    validate: zodResolver(schema),
    initialValues: {
      nickname: user.nickname,
      twitter_name: user.twitter_name,
      introduction: user.introduction,
      visibility: user.visibility,
    },
    validateInputOnBlur: true,
  });

  const updateUser = useSetAtom(loginUserAtom);
  const [file, setFile] = useState<File | null>(null);
  const [imageURL, setImageURL] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const changeFileHandler = useCallback((payload: File | null) => {
    if (payload) {
      setFile(payload);
    }
  }, []);

  useEffect(() => {
    setImageURL(user.avatar);
    return () => {
      setImageURL("");
    };
  }, [user]);

  return (
    <>
      <Container className="mt-4">
        <Box sx={{ maxWidth: 500 }} mx="auto">
          <form
            onSubmit={form.onSubmit(async (values) => {
              setIsLoading(true);
              try {
                const auth = getAuth();
                const idToken = await auth.currentUser?.getIdToken(true);
                const config = {
                  headers: {
                    authorization: `Bearer ${idToken}`,
                  },
                };
                if (file) {
                  const key = await postImage(file, config);
                  await patchProfile(
                    values.nickname,
                    key,
                    values.introduction,
                    values.twitter_name,
                    values.visibility,
                    config
                  );
                  const avatarImageUrl = await getAvatar(config);

                  showNotification({
                    message: "更新しました！",
                    icon: <IconCheck />,
                    styles: (theme) => ({
                      root: {
                        backgroundColor: theme.colors.dark,
                      },
                      description: { color: theme.white },
                    }),
                  });

                  updateUser((state) => ({
                    ...state,
                    nickname: values.nickname,
                    introduction: values.introduction,
                    avatar: avatarImageUrl,
                    avatarKey: key || "",
                    twitter_name: values.twitter_name,
                    visibility: values.visibility,
                  }));

                  setIsLoading(false);
                } else {
                  const key = user.avatarKey;
                  await patchProfile(
                    values.nickname,
                    key,
                    values.introduction,
                    values.twitter_name,
                    values.visibility,
                    config
                  );
                  if (user.avatarKey) {
                    const avatarImageUrl = await getAvatar(config);
                    showNotification({
                      message: "更新しました！",
                      icon: <IconCheck />,
                      styles: (theme) => ({
                        root: {
                          backgroundColor: theme.colors.dark,
                        },
                        description: { color: theme.white },
                      }),
                    });
                    updateUser((state) => ({
                      ...state,
                      nickname: values.nickname,
                      introduction: values.introduction,
                      avatar: avatarImageUrl,
                      avatarKey: key || "",
                      twitter_name: values.twitter_name,
                      visibility: values.visibility,
                    }));
                  } else {
                    const avatarImageUrl = user.avatar;
                    showNotification({
                      message: "更新しました！",
                      icon: <IconCheck />,
                      styles: (theme) => ({
                        root: {
                          backgroundColor: theme.colors.dark,
                        },
                        description: { color: theme.white },
                      }),
                    });
                    updateUser((state) => ({
                      ...state,
                      nickname: values.nickname,
                      introduction: values.introduction,
                      avatar: avatarImageUrl,
                      avatarKey: key || "",
                      twitter_name: values.twitter_name,
                      visibility: values.visibility,
                    }));
                  }
                  setIsLoading(false);
                }
              } catch (error: any) {
                setIsLoading(false);
                alert(`プロフィール編集に失敗しました。\n${error.message}`);
              }
            })}
          >
            <Stack spacing="lg">
              <Group position="left">
                {largerThanSm ? (
                  <ImagePreview
                    file={file}
                    imageURL={imageURL}
                    setImageURL={setImageURL}
                    size={120}
                  />
                ) : (
                  <ImagePreview
                    file={file}
                    imageURL={imageURL}
                    setImageURL={setImageURL}
                    size={84}
                  />
                )}
                <FileButton
                  onChange={changeFileHandler}
                  accept="image/png,image/jpeg"
                >
                  {(props) => (
                    <Button variant="outline" {...props}>
                      画像をアップロード
                    </Button>
                  )}
                </FileButton>
              </Group>
              <TextInput
                withAsterisk
                label="ニックネーム"
                placeholder="表示名を入力"
                {...form.getInputProps("nickname")}
              />
              <Textarea
                label="自己紹介"
                placeholder="自己紹介を入力"
                {...form.getInputProps("introduction")}
              />
              <TextInput
                label="Twitterユーザー名"
                placeholder="@なしで入力"
                {...form.getInputProps("twitter_name")}
              />
              <Select
                label="ユーザー公開/非公開"
                placeholder="Pick one"
                data={[
                  { value: "private", label: "非公開" },
                  { value: "public", label: "公開" },
                ]}
                {...form.getInputProps("visibility")}
              />
            </Stack>
            <Group position="center" className="mt-10">
              <Button type="submit" radius="xl" size="md" loading={isLoading}>
                更新する
              </Button>
            </Group>
          </form>
        </Box>
      </Container>
    </>
  );
};

export default ProfileForm;

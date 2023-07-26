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
import { loginUserAtom } from "atoms/auth/loginUser";
import ImagePreview from "features/auth/components/ImagePreview";
import { useAtom } from "jotai";
import { useMediaQuery } from "lib/mantine/useMediaQuery";
import { useCallback, useEffect, useState } from "react";
import { z } from "zod";

const schema = z.object({
  avatar: z.string(),
  username: z.string().trim().min(1, { message: "ニックネームは必須です" }),
  introduction: z.string(),
  twitter_name: z.string(),
  visibility: z.enum(["private", "public"]),
});

type Form = z.infer<typeof schema>;

const ProfileForm = () => {
  const [user] = useAtom(loginUserAtom);
  const largerThanSm = useMediaQuery("sm");
  const form = useForm<Form>({
    validate: zodResolver(schema),
  });

  const [file, setFile] = useState<File | null>(null);
  const [imageURL, setImageURL] = useState("");

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
          <form onSubmit={form.onSubmit((values) => console.log(values, file))}>
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
                defaultValue={user.nickname}
              />
              <Textarea
                label="自己紹介"
                placeholder="自己紹介を入力"
                defaultValue={user.introduction}
              />
              <TextInput
                label="Twitterユーザー名"
                placeholder="@なしで入力"
                defaultValue={user.twitter_name}
              />
              <Select
                label="ユーザー公開/非公開"
                placeholder="Pick one"
                data={[
                  { value: "private", label: "非公開" },
                  { value: "public", label: "公開" },
                ]}
                defaultValue={user.visibility}
              />
            </Stack>
            <Group position="center" className="mt-10">
              <Button type="submit" radius="xl" size="md">
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

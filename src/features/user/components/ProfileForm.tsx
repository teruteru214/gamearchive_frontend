import {
  Avatar,
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
import { useAtom } from "jotai";
import { useState } from "react";
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
  const [currentUser] = useAtom(loginUserAtom);
  const form = useForm<Form>({
    validate: zodResolver(schema),
  });

  const [file, setFile] = useState<File | null>(null);
  const [imageURL, setImageURL] = useState("");
  return (
    <>
      <Container className="mt-4">
        <Box sx={{ maxWidth: 500 }} mx="auto">
          <form onSubmit={form.onSubmit((values) => console.log(values, file))}>
            <Stack spacing="lg">
              <Group position="left">
                <Avatar
                  src={imageURL || currentUser.avatar}
                  size="xl"
                  radius="xl"
                />
                <FileButton
                  onChange={(file: File | null) => {
                    if (file) {
                      setFile(file);
                      setImageURL(URL.createObjectURL(file));
                    }
                  }}
                  accept="image/png,image/jpeg"
                >
                  {(props) => <Button {...props}>画像をアップロード</Button>}
                </FileButton>
              </Group>
              <TextInput
                withAsterisk
                label="ニックネーム"
                placeholder="表示名を入力"
                defaultValue={currentUser.nickname}
              />
              <Textarea
                label="自己紹介"
                placeholder="自己紹介を入力"
                defaultValue={currentUser?.introduction}
              />
              <TextInput
                label="Twitterユーザー名"
                placeholder="@なしで入力"
                defaultValue={currentUser?.twitter_name}
              />
              <Select
                label="ユーザー公開/非公開"
                placeholder="Pick one"
                data={[
                  { value: "private", label: "非公開" },
                  { value: "public", label: "公開" },
                ]}
                defaultValue={currentUser.visibility}
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

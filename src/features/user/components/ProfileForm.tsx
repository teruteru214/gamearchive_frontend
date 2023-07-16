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
import { IconUserEdit } from "@tabler/icons-react";
import { loginUserAtom } from "atoms/user/userInfoAtom";
import HeroContents from "components/HeroContents";
import { useAtom } from "jotai";
import { useMediaQuery } from "lib/mantine/useMediaQuery";
import { useState } from "react";
import { z } from "zod";

const schema = z.object({
  username: z.string().trim().min(1, { message: "ニックネームは必須です" }),
  introduction: z.string(),
  twitterUsername: z.string(),
  visibility: z.enum(["public", "private"]),
});

type Form = z.infer<typeof schema>;

const ProfileForm = () => {
  const [userProfile] = useAtom(loginUserAtom);
  const largerThanSm = useMediaQuery("sm");
  const form = useForm<Form>({
    validate: zodResolver(schema),
    initialValues: {
      username: userProfile.username,
      introduction: userProfile.introduction,
      twitterUsername: userProfile.twitterUsername,
      visibility: userProfile.visibility === 0 ? "public" : "private",
    },
  });
  const [file, setFile] = useState<File | null>(null);
  return (
    <>
      <HeroContents
        IconComponent={<IconUserEdit size="3rem" stroke={1.5} />}
        title="プロフィール編集"
      />
      <Container className="mt-4">
        <Box sx={{ maxWidth: 500 }} mx="auto">
          <form onSubmit={form.onSubmit((values) => console.log(values, file))}>
            <Stack spacing="lg">
              <Group position="left">
                {largerThanSm ? (
                  <Avatar src={userProfile.avatar} size={120} />
                ) : (
                  <Avatar src={userProfile.avatar} size="xl" />
                )}
                <FileButton onChange={setFile} accept="image/png,image/jpeg">
                  {(props) => <Button {...props}>画像をアップロード</Button>}
                </FileButton>
              </Group>
              <TextInput
                withAsterisk
                label="ニックネーム"
                placeholder="表示名を入力"
                {...form.getInputProps("username")}
              />
              <Textarea
                label="自己紹介"
                placeholder="自己紹介を入力"
                {...form.getInputProps("introduction")}
              />
              <TextInput
                label="Twitterユーザー名"
                placeholder="@なしで入力"
                {...form.getInputProps("twitterUsername")}
              />
              <Select
                label="ユーザー公開/非公開"
                placeholder="Pick one"
                data={[
                  { value: "public", label: "公開" },
                  { value: "private", label: "非公開" },
                ]}
                {...form.getInputProps("visibility")} // Added visibility input props
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

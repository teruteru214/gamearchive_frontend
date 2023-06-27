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
import { useMediaQuery } from "lib/mantine/useMediaQuery";
import { useState } from "react";
import { z } from "zod";

import HeroContents from "./HeroContents";

const schema = z.object({
  nickname: z.string().trim().min(1, { message: "ニックネームは必須です" }),
  twitterUsername: z.string(),
  description: z.string(),
  visibility: z.enum(["public", "private"]),
});

type Form = z.infer<typeof schema>;

const ProfileForm = () => {
  const largerThanXs = useMediaQuery("xs");
  const largerThanSm = useMediaQuery("sm");
  const largerThanMd = useMediaQuery("md");
  const largerThanLg = useMediaQuery("lg");
  const largerThanXl = useMediaQuery("xl");
  const form = useForm<Form>({
    validate: zodResolver(schema),
    initialValues: {
      nickname: "",
      twitterUsername: "",
      description: "",
      visibility: "private",
    },
  });
  const [file, setFile] = useState<File | null>(null);
  return (
    <>
      <HeroContents />
      <Container className="mt-4">
        <Box sx={{ maxWidth: 500 }} mx="auto">
          <form onSubmit={form.onSubmit((values) => console.log(values, file))}>
            <Stack spacing="lg">
              <Group position="left">
                {largerThanSm ? (
                  <Avatar src="/src/assets/avatar.png" size={120} />
                ) : (
                  <Avatar src="/src/assets/avatar.png" size="xl" />
                )}
                <FileButton onChange={setFile} accept="image/png,image/jpeg">
                  {(props) => (
                    <Button {...props} color="yellow">
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
                {...form.getInputProps("description")}
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
              <Button type="submit" radius="xl" size="md" color="yellow">
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

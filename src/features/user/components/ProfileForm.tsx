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
import { useFirebaseAuth } from "lib/auth/firebaseAuth";
import { useState } from "react";
import { z } from "zod";

const schema = z.object({
  username: z.string().trim().min(1, { message: "ニックネームは必須です" }),
  introduction: z.string(),
  twitter_name: z.string(),
  visibility: z.enum(["public", "private"]),
  avatar: z.string(), // 新たに追加
});

type Form = z.infer<typeof schema>;

const ProfileForm = () => {
  const { currentUser } = useFirebaseAuth();
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
                {...form.getInputProps("twitter_name")}
              />
              <Select
                label="ユーザー公開/非公開"
                placeholder="Pick one"
                data={[
                  { value: "private", label: "非公開" },
                  { value: "public", label: "公開" },
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

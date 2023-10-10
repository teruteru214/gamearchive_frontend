import {
  Button,
  Center,
  Indicator,
  NumberInput,
  Stack,
  Switch,
  Title,
} from "@mantine/core";
import { Calendar } from "@mantine/dates";
import { useForm, zodResolver } from "@mantine/form";
import { notifications } from "@mantine/notifications";
import { getAuth } from "firebase/auth";
import { useState } from "react";
import { z } from "zod";

import { updateLineSetting } from "../api/updateLineSetting";
import { NotificationSettingsProps } from "../types";

const schema = z.object({
  line_notification: z.boolean(),
  stacked_notification_interval: z
    .number()
    .min(1, { message: "1日以上" })
    .max(60, { message: "60日以下" }),
});

type Form = z.infer<typeof schema>;

const NotificationSettings: React.FC<NotificationSettingsProps> = ({
  userId,
  initialIsSwitchOn,
  initialStackedValue,
  initialNotificationDate,
}) => {
  const form = useForm<Form>({
    validate: zodResolver(schema),
    initialValues: {
      line_notification: initialIsSwitchOn ?? false,
      stacked_notification_interval: initialStackedValue ?? 1,
    },
    validateInputOnBlur: true,
  });

  const [loading, setLoading] = useState(false);

  const handleUpdate = async () => {
    if (!userId) {
      console.error("line_user_idが送られてきていません");
      return;
    }

    setLoading(true);

    const values = form.values;

    try {
      const auth = getAuth();
      const idToken = await auth.currentUser?.getIdToken(true);
      const config = {
        headers: {
          authorization: `Bearer ${idToken}`,
        },
      };
      await updateLineSetting({
        id: userId,
        ...values,
        config,
      });
      notifications.show({
        title: "Success",
        message: "LINE通知設定を更新しました！",
        color: "green",
      });
    } catch (error) {
      notifications.show({
        title: "Error",
        message: "LINE通知設定の更新を失敗しました",
        color: "red",
      });
    } finally {
      setLoading(false);
    }
  };

  const notificationDate = initialNotificationDate
    ? new Date(initialNotificationDate)
    : new Date();

  return (
    <form onSubmit={form.onSubmit(handleUpdate)}>
      <Stack>
        <Switch
          label="積みゲー通知"
          checked={form.values.line_notification}
          {...form.getInputProps("line_notification")}
          onLabel="ON"
          offLabel="OFF"
        />
        {form.values.line_notification && (
          <>
            <NumberInput
              {...form.getInputProps("stacked_notification_interval")}
              label="次のリマインダーを設定する日数を入力"
              withAsterisk
            />
            <Title order={5} align={"center"}>
              次回通知日
            </Title>
            <Center>
              <Calendar
                renderDay={(date) => {
                  const day = date.getDate();
                  const isNotificationDate =
                    date.getFullYear() === notificationDate.getFullYear() &&
                    date.getMonth() === notificationDate.getMonth() &&
                    day === notificationDate.getDate();

                  return (
                    <Indicator
                      size={6}
                      color="green"
                      offset={-2}
                      disabled={!isNotificationDate}
                    >
                      <div>{day}</div>
                    </Indicator>
                  );
                }}
              />
            </Center>
          </>
        )}
        <Center>
          <Button
            type="submit"
            radius="xl"
            size="md"
            className="w-36"
            loading={loading}
          >
            更新する
          </Button>
        </Center>
      </Stack>
    </form>
  );
};

export default NotificationSettings;

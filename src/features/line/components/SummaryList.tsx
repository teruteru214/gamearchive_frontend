import { Accordion, Image, Space, Text } from "@mantine/core";
import { IconAlertCircle, IconNotebook } from "@tabler/icons-react";

import tsumige from "../../../assets/tsumige.gif";

const SummaryList = () => {
  return (
    <>
      <Accordion className="mt-4" variant="filled">
        <Accordion.Item value="flexibility">
          <Accordion.Control icon={<IconNotebook />}>
            使用方法
          </Accordion.Control>
          <Accordion.Panel>
            LINEログインをすると以下の機能が使えます。
            <Space h="lg" />
            <Text className="font-bold">積みゲー通知機能</Text>
            通知設定をオンにし、希望の日付間隔を数字で入力すると、通知日が決定します。(10と記入すると10日ごとに積みゲーを通知します)
            通知日になったら積みゲープレイを促す通知が18時に届きます。
            <Image src={tsumige} />
          </Accordion.Panel>
        </Accordion.Item>
        <Accordion.Item value="focus-ring">
          <Accordion.Control icon={<IconAlertCircle />}>
            注意点
          </Accordion.Control>
          <Accordion.Panel>
            1
            通知を受け取るためには、まず「ゲーム取得画面」から積みゲーを取得してください。これを行わないと積みゲーの通知はされません。
            <Space h="lg" />
            2
            内容を一度更新すると、前回の通知日の設定は自動的にリセットされます。
            <Space h="lg" />3
            LINEチャンネルからの直接の応答は、基本的に受け付けておりません。
          </Accordion.Panel>
        </Accordion.Item>
      </Accordion>
    </>
  );
};

export default SummaryList;

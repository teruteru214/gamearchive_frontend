import { Accordion, Image, Space } from "@mantine/core";
import { IconAlertCircle, IconNotebook } from "@tabler/icons-react";

import favorite_game from "../../../assets/line_favorite.png";
import tsumige from "../../../assets/tsumige.png";

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
            1
            友達登録した公式チャンネルからリッチメニューを使用し、公開ユーザーのお気に入りゲーム（ハイライトゲーム）を受け取ることができます。
            <Image src={favorite_game} />
            <Space h="lg" />2
            通知設定をオンにし、希望の日付間隔を数字で入力すると、毎日18:00に未プレイのゲーム（積みゲー）をプレイするように促す通知が届きます
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

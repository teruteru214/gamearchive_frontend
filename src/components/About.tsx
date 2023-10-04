import { Container, Group, Image, Text, Title } from "@mantine/core";
import { useMediaQuery } from "lib/mantine/useMediaQuery";

import image1 from "../assets/gamemachine.png";
import image2 from "../assets/hero.png";

const About = () => {
  const largerThanSm = useMediaQuery("sm");
  return (
    <div className="py-10">
      {largerThanSm ? (
        <>
          <Container>
            <div className="flex justify-between pb-24">
              <div className="mx-auto max-w-sm md:mr-10 md:max-w-md">
                <Title className="mb-10 text-xl sm:text-2xl">
                  GameArchiveは、ゲームを効率的に管理するサービスです。
                </Title>
                <Text className="mb-3 leading-relaxed max-sm:text-sm">
                  あらゆるプラットフォームのゲームの進捗を管理できるサービスです。
                </Text>
                <Text className="mb-3 leading-relaxed max-sm:text-sm">
                  それを元にして作ったのがGameArchiveです。
                </Text>
                <Text className="mb-3 leading-relaxed max-sm:text-sm">
                  Googleユーザーでログインをした後にゲームの基本情報を検索してゲームステータスと共に記録することでゲームの進捗を管理します。
                </Text>
                <Text className="mb-3 leading-relaxed max-sm:text-sm">
                  そして、LINEログインすることによって他者ユーザーのお気に入りのゲームの取得。また登録した積みゲーのプレイを促す通知を設定することができます。
                </Text>
                <Text className="mb-3 leading-relaxed max-sm:text-sm">
                  またプロフィールの公開ボタンを押すことによって、自身のお気に入りのゲームを他者のLINEチャンネルに通知することができます。
                </Text>
              </div>
              <Image src={image1} className="max-sm:hidden" width={450} />
            </div>
            <div className="flex justify-between">
              <Image src={image2} className="mr-4 max-sm:hidden" width={400} />
              <div className="mx-auto ml-10">
                <Title className="mb-10 text-xl sm:text-2xl">
                  豊富な管理オプションでゲームライフがより快適に。
                </Title>
                <Text className="mb-3 leading-relaxed max-sm:text-sm">
                  マネジメントページでは以下の方法で適切なゲーム管理ができます。
                </Text>
                <Text className="mb-3 leading-relaxed max-sm:text-sm">
                  ゲームのステータス（積みゲー、プレイ中、クリア）を簡単に切り替え可能です。
                </Text>
                <Text className="mb-3 leading-relaxed max-sm:text-sm">
                  ゲームはタグで分類されて表示されています。（お気に入り、クリア、プレイ中、積みゲー）
                </Text>
                <Text className="mb-3 leading-relaxed max-sm:text-sm">
                  ゲームの評価値によるソートや、ジャンル、ゲーム機種による絞り込み検索が可能です。
                </Text>
                <Text className="leading-relaxed max-sm:text-sm">
                  何より、画面がサクサクと動作するため、ストレスなくゲーム管理ができます。
                </Text>
              </div>
            </div>
          </Container>
        </>
      ) : (
        <>
          <div className="pb-20">
            <div className="mx-auto max-w-sm md:max-w-md">
              <Title className="mb-5 text-xl sm:text-2xl">
                GameArchiveは、ゲームを効率的に管理するサービスです
              </Title>
              <Text className="mb-3 leading-relaxed max-sm:text-sm">
                あらゆるプラットフォームのゲームの進捗を管理できるサービス欲しくないです。
              </Text>
              <Text className="mb-3 leading-relaxed max-sm:text-sm">
                それを元にして作ったのがGameArchiveです。
              </Text>
              <Text className="mb-3 leading-relaxed max-sm:text-sm">
                Googleユーザーでログインをした後にゲームの基本情報を検索してゲームステータスと共に記録することでゲームの進捗を管理します。
              </Text>
              <Text className="mb-3 leading-relaxed max-sm:text-sm">
                そして、LINEログインすることによって他者ユーザーのお気に入りのゲームの取得。また登録した積みゲーのプレイを促す通知を設定することができます。
              </Text>
              <Text className="mb-3 leading-relaxed max-sm:text-sm">
                またプロフィールの公開ボタンを押すことによって、自身のお気に入りのゲームを他者のLINEチャンネルに通知することができます。
              </Text>
            </div>
            <Group position="center">
              <Image src={image1} width={300} fit="contain" />
            </Group>
          </div>
          <div>
            <div className="mx-auto max-w-sm md:mr-10 md:max-w-md">
              <Title className="mb-5 text-xl sm:text-2xl">
                豊富な管理オプションでゲームライフがより快適に。
              </Title>
              <Text className="mb-3 leading-relaxed max-sm:text-sm">
                マネジメントページでは以下の方法で適切なゲーム管理ができます
              </Text>
              <Text className="mb-3 leading-relaxed max-sm:text-sm">
                ゲームのステータス（積みゲー、プレイ中、クリア）を簡単に切り替え可能です。
              </Text>
              <Text className="mb-3 leading-relaxed max-sm:text-sm">
                ゲームはタグで分類されて表示されています。（お気に入り、クリア、プレイ中、積みゲー）
              </Text>
              <Text className="mb-3 leading-relaxed max-sm:text-sm">
                ゲームの評価値によるソートや、ジャンル、ゲーム機種による絞り込み検索が可能です。
              </Text>
              <Text className="mb-3 leading-relaxed max-sm:text-sm">
                何より、画面がサクサクと動作するため、ストレスなくゲーム管理ができます。
              </Text>
            </div>
            <Group position="center">
              <Image src={image2} width={300} fit="contain" />
            </Group>
          </div>
        </>
      )}
    </div>
  );
};

export default About;

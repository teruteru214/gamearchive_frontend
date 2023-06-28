import { Button, Image } from "@mantine/core";

import appDescription from "../../assets/appDescription.png";
import appDescription2 from "../../assets/appDescription2.png";
import { useMediaQuery } from "../../lib/mantine/useMediaQuery";

const AppDescription = () => {
  const largerThanSm = useMediaQuery("sm");
  return (
    <div className="flex flex-col items-center justify-center space-y-4">
      <h1 className="pt-6 text-center text-2xl font-medium sm:text-3xl">
        本アプリの使い方
      </h1>
      <Image
        src={appDescription2}
        style={{ width: largerThanSm ? "600px" : "300px", height: "auto" }}
      />
      <p className="text-center text-sm sm:text-xl">
        1.ゲーム検索機能であなたがプレイしたいゲームまたは
        <br />
        プレイ済みのゲームを見つけ、ライブラリに取り込みます
      </p>
      <Image
        src={appDescription}
        style={{ width: largerThanSm ? "600px" : "300px", height: "auto" }}
      />
      <p className="pb-5 text-center text-sm sm:text-xl">
        2.取得ゲームのプレイ状況に基づくステータス管理で、
        <br />
        あなたのゲーム体験をスムーズに最適化しましょう
      </p>
      <Button className="mt-10 bg-yellow-400 text-xl hover:bg-yellow-500">
        ログインして使用する
      </Button>
    </div>
  );
};

export default AppDescription;
import { Button, Image } from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";
import { useNavigate } from "react-router-dom";

import appDescription from "../../../assets/appDescription.png";
import appDescription2 from "../../../assets/appDescription2.png";
import { useMediaQuery } from "../../../lib/mantine/useMediaQuery";

const AppDescription = () => {
  const largerThanSm = useMediaQuery("sm");
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center space-y-4">
      <h1 className="mb-0 pt-6 text-center text-2xl font-medium sm:text-3xl">
        本アプリの使い方
      </h1>
      <p className="text-xs text-gray-400">
        (本アプリはGoogleログインしたユーザーのみゲームを取得できます)
      </p>

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
      <Button onClick={() => navigate("/acquisition")}>
        <IconSearch size="0.9rem" stroke={1.5} className="mr-1" />
        早速ゲームを検索してみる
      </Button>
    </div>
  );
};

export default AppDescription;

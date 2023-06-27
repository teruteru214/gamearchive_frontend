import AppDescription from "./AppDescription";
import HeroContents from "./HeroContents";

const data = [
  {
    link: "#",
    label: "プライバシーポリシー",
  },
  {
    link: "#",
    label: "利用規約",
  },
  {
    link: "#",
    label: "お問い合わせ",
  },
];

const isLogin = true;
const user = { name: "User", image: "user-image-url" };

const Top = () => {
  return (
    <>
      <HeroContents />
      <AppDescription />
    </>
  );
};

export default Top;

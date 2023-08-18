import { atom } from "jotai";

export const FooterAtom = atom([
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
]);

export const gamesToShowAtom = atom<number>(30);

export const myGamesToShowAtom = atom<number>(14);

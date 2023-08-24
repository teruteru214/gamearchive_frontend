import { atom } from "jotai";

export const FooterAtom = atom([
  {
    link: "/about",
    label: "GameArchiveについて",
  },
  {
    link: "/terms",
    label: "利用規約",
  },
  {
    link: "/privacy-policy",
    label: "プライバシーポリシー",
  },
]);

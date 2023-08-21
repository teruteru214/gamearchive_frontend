import { Helmet } from "react-helmet-async";

type HeadProps = {
  title?: string;
  description?: string;
};

export const Head = ({ title = "", description = "" }: HeadProps = {}) => {
  return (
    <Helmet
      title={title ? `${title} | GameArchive` : undefined}
      defaultTitle="GameArchive | あなたのゲームライブラリを究極に管理"
    >
      <meta name="description" content={description} />
    </Helmet>
  );
};

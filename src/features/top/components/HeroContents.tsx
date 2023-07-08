import { Container, createStyles, Image, Title } from "@mantine/core";

import hero from "../../../assets/hero.png";
import { useMediaQuery } from "../../../lib/mantine/useMediaQuery";

const useStyles = createStyles((theme) => ({
  inner: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.xl,
  },
  title: {
    margin: theme.spacing.md,
    color: theme.colorScheme === "dark" ? theme.white : "#05A5FF",
    fontFamily: `sans-serif, ${theme.fontFamily}`,
    lineHeight: 1.2,
    fontWeight: 500,
  },
}));

const HeroContents = () => {
  const { classes } = useStyles();
  const largerThanSm = useMediaQuery("sm");
  return (
    <div className="bg-yellow-50">
      <Container>
        <div className={classes.inner}>
          <Image
            src={hero}
            style={{ width: largerThanSm ? "200px" : "100px", height: "auto" }}
            className="mr-1"
          />
          <Title
            className={classes.title}
            style={{
              fontSize: largerThanSm ? "32px" : "16px",
            }}
          >
            一つ一つクリアへ
            <br />
            積みゲー解消のパートナー
          </Title>
        </div>
      </Container>
    </div>
  );
};

export default HeroContents;

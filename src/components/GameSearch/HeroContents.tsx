import { Container, createStyles, Title } from "@mantine/core";
import { IconDisc } from "@tabler/icons-react";

import { useMediaQuery } from "../../lib/mantine/useMediaQuery";

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
          <IconDisc size="3rem" stroke={1.5} />
          <Title
            className={classes.title}
            style={{
              fontSize: largerThanSm ? "22px" : "20px",
            }}
          >
            ゲームを取得
          </Title>
        </div>
      </Container>
    </div>
  );
};

export default HeroContents;

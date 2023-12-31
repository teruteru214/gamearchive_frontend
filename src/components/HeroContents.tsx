import { Container, createStyles, Title } from "@mantine/core";
import { ReactElement } from "react";

import { useMediaQuery } from "../lib/mantine/useMediaQuery";

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

interface HeroContentsProps {
  IconComponent: ReactElement;
  title: string;
}

const HeroContents = ({ IconComponent, title }: HeroContentsProps) => {
  const { classes } = useStyles();
  const largerThanSm = useMediaQuery("sm");
  return (
    <div className="bg-yellow-50">
      <Container className="bg-yellow-50">
        <div className={classes.inner}>
          {IconComponent}
          <Title
            className={classes.title}
            style={{
              fontSize: largerThanSm ? "22px" : "20px",
            }}
          >
            {title}
          </Title>
        </div>
      </Container>
    </div>
  );
};

export default HeroContents;

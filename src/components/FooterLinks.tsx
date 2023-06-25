import { Anchor, Container, Group, Image, Text } from "@mantine/core";

import logo from "../assets/logo.png";

interface FooterLinksProps {
  data: { label: string; link: string }[];
}

const FooterLinks = ({ data }: FooterLinksProps) => {
  // const { classes } = useStyles();

  const links = data.map((link) => (
    <Anchor<"a">
      color="dimmed"
      key={link.label}
      onClick={(event) => event.preventDefault()}
      underline={false}
      className="text-sm hover:bg-m_gray-2 max-sm:text-xs"
    >
      {link.label}
    </Anchor>
  ));

  return (
    <footer className="mt-6 border-0 border-t border-solid border-t-m_gray-2 bg-yellow-50 py-12">
      <Container
        className="flex items-center justify-between max-sm:flex-col"
        size="lg"
      >
        <Image src={logo} width={300} fit="contain" />
        <Group className="max-xs:mt-4">{links}</Group>
      </Container>
      <Container
        className="mt-6 flex items-center justify-between px-4 py-6 max-sm:flex-col"
        size="lg"
      >
        <Text color="dimmed" size="sm">
          © 2023 All rights reserved.
        </Text>
      </Container>
    </footer>
  );
};

export default FooterLinks;

import "./lib/tailwind.css";

import {
  Button,
  Col,
  Container,
  Grid,
  MantineProvider,
  Paper,
} from "@mantine/core";
import React from "react";

const App: React.FC = () => {
  return (
    <MantineProvider theme={{ colorScheme: "light" }}>
      <Container size="md" className="h-full px-8 pt-8">
        <Grid>
          <Col span={12} style={{ maxWidth: 400 }}>
            <Paper style={{ padding: "1em" }} shadow="xs">
              <h1 className="mb-4 text-2xl">
                Mantine & Tailwind CSS Test View with MantineProvider
              </h1>
              <h1 className="text-3xl font-bold underline">Hello world!</h1>
              <Button>Hello, world!</Button>
            </Paper>
          </Col>
        </Grid>
      </Container>
    </MantineProvider>
  );
};

export default App;

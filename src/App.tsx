import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import PlacesIveWorked from "./PlacesIveWorked";

function Copyright() {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      textAlign="center"
      sx={{ mb: 3 }}
    >
      {"Copyright © Ben Krig "}
      {new Date().getFullYear()}.
    </Typography>
  );
}

export default function App() {
  return (
    <>
      <Container>
        <Box sx={{ my: 4 }}>
          <Typography variant="h4" component="h1" gutterBottom>
            Hi I'm Ben.
          </Typography>
          <Typography>
            I'm a software engineer with an interest in Cloud Computing and
            Distributed Systems.
          </Typography>
        </Box>
        <Box sx={{ my: 4 }}>
          <PlacesIveWorked />
        </Box>
      </Container>
      <Copyright />
    </>
  );
}

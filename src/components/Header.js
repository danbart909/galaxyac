import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Container,
} from "@mui/material";

export default function Header() {
  return (
    <AppBar position="sticky" color="default" elevation={1}>
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ justifyContent: "space-between" }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <img
              src="/assets/logo-placeholder.png"
              alt="Pro Air Tech logo"
              style={{ height: 56 }}
            />
          </Box>
            <Box
              flex
              justifyContent={'center'}
            >
              <Typography variant="h6" color="text.primary">
                Pro Air Tech, LLC
              </Typography>
            </Box
           >
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <Typography variant="body1" fontWeight="bold">
              (678) 504-5340
            </Typography>
            <Button
              href="#contact"
              variant="contained"
              color="success"
              size="small"
            >
              Get Service
            </Button>
          </Box>
        </Toolbar>
      </Container>

      <Toolbar
        component="nav"
        sx={{ justifyContent: "center", gap: 3, bgcolor: "grey.100" }}
      >
        <Button href="#home">Home</Button>
        <Button href="#air">Air Conditioning</Button>
        <Button href="#heating">Heating</Button>
        <Button href="#financing">Financing</Button>
        <Button href="#contact">Contact</Button>
      </Toolbar>
    </AppBar>
  );
}
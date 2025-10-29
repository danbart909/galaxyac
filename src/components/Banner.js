import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { Link as RouterLink } from 'react-router-dom'

export default function Banner() {
  return (
    <Box
      width="100%"
      py={6}
      display="flex"
      alignItems="center"
      justifyContent="space-evenly"
      sx={{
        backgroundColor: "#003f5c",
        color: "white",
        textAlign: "center",
      }}
    >
      <Typography variant="h5">
        GalaxyAC — Reliable Service in the Vastness of the Cosmos
      </Typography>
      <Button
        variant="contained"
        color="secondary"
        size="large"
        component={RouterLink}
        to="/contact"
      >
        Contact Us
      </Button>
    </Box>
  );
}
import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { C1, C2 } from "../modules/helper.js";
import { Link as RouterLink } from 'react-router-dom'

export default function Banner2() {
  return (
    <Box
      width="100%"
      py={10}
      textAlign="center"
      sx={{
        backgroundColor: C2,
        color: C1,
      }}
    >
      <Typography variant="h4" mb={2}>
        Need Fast Service?
      </Typography>
      <Typography variant="body1" mb={4}>
        Our technicians are ready to help — same-day appointments available!
      </Typography>
      <Button
        variant="contained"
        color="secondary"
        component={RouterLink}
        to="/contact"
        sx={{
          backgroundColor: "#ffffff",
          color: C2,
          fontWeight: "bold",
          "&:hover": { backgroundColor: C1 },
        }}
      >
        Request Service
      </Button>
    </Box>
  );
}
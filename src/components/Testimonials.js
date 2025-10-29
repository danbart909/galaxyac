import React from "react";
import { Container, Typography, Box } from "@mui/material";

export default function Testimonials() {
  return (
    <Box sx={{ py: 6 }}>
      <Container maxWidth="sm">
        <Typography variant="h4" align="center" gutterBottom>
          What Our Clients Say
        </Typography>
        <Typography variant="h6" align="center" gutterBottom>
          “Pro Air Tech, LLC has been our HVAC company for over ten years.
          Honest, and reliable they are awesome!!!”
        </Typography>
        <Typography variant="body2" align="center">
          — Michael C.
        </Typography>
      </Container>
    </Box>
  );
}
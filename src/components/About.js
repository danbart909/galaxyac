import React from "react";
import { Container, Typography, Box } from "@mui/material";

export default function About() {
  return (
    <Box id="heating" sx={{ py: 6, bgcolor: "grey.100" }}>
      <Container maxWidth="md">
        <Typography variant="h4" gutterBottom>
          Professional AC Repair and Installation Contractors
        </Typography>
        <Typography paragraph>
          Honesty and integrity are the hallmarks of the Pro Air Tech, LLC
          business philosophy and are the foundation upon which the company was
          founded.
        </Typography>
        <Typography paragraph>
          We thrive on providing clear explanations to our customers and doing
          things right the first time. To schedule an appointment with our
          Hiram, GA air conditioning experts, call (678) 504-5340.
        </Typography>
      </Container>
    </Box>
  );
}
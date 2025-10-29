import React from "react";
import { Container, Typography, Box, Button, Grid } from "@mui/material";

export default function Footer() {
  return (
    <Box component="footer" sx={{ bgcolor: "grey.900", color: "grey.100", py: 4 }}>
      <Container maxWidth="lg">
        <Grid container justifyContent="space-between" alignItems="center">
          <Grid item>
            <Typography variant="h6">Pro Air Tech, LLC</Typography>
            <Typography variant="body2">Heating & Cooling Contractor</Typography>
            <Typography variant="body2">Hiram, GA</Typography>
          </Grid>
          <Grid item>
            <Typography variant="h6" gutterBottom>
              (678) 504-5340
            </Typography>
            <Button href="#contact" variant="contained" color="success">
              Contact Us Today
            </Button>
          </Grid>
        </Grid>
        <Typography variant="caption" display="block" align="center" sx={{ mt: 3 }}>
          © 2021 Pro Air Tech, LLC
        </Typography>
      </Container>
    </Box>
  );
}
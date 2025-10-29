import React from "react";
import { Container, Typography, Button, Grid, Box } from "@mui/material";

export default function Hero() {
  return (
    <Box
      id="home"
      sx={{
        py: 6,
        backgroundImage: "url(/assets/hero-bg.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        // color: "white",
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={7}>
            <Typography variant="h3" component="h1" gutterBottom>
              Pro Air Tech LLC
            </Typography>
            <Typography variant="h6" gutterBottom>
              Heating & Cooling Contractor
            </Typography>
            <Typography variant="body1" paragraph>
              Open 24 Hours • Emergency Service • Financing Available
            </Typography>
            <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
              <Button variant="contained" color="success" size="large" href="#contact">
                Schedule Service
              </Button>
              <Button
                variant="outlined"
                color="inherit"
                size="large"
                href="tel:16785045340"
              >
                Call Us: (678) 504-5340
              </Button>
            </Box>
          </Grid>
          <Grid item xs={12} md={5}>
            <img
              src="/assets/van-placeholder.jpg"
              alt="Pro Air Tech van"
              style={{ width: "100%", borderRadius: 8 }}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}